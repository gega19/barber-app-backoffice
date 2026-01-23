'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Scissors, Edit, Star, MapPin, Upload, Image as ImageIcon, Check, X } from 'lucide-react';
import { workplacesService, Workplace, UpdateWorkplaceData, workplaceMediaService, WorkplaceMedia } from '@/lib/workplaces';
import { authService } from '@/lib/auth';
import { uploadService } from '@/lib/upload';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import dynamic from 'next/dynamic';

const LocationPicker = dynamic(() => import('@/components/map/LocationPicker'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <div className="text-gray-500">Cargando mapa...</div>
        </div>
    ),
});

const workplaceSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    address: z.string().optional(),
    city: z.string().optional(),
    latitude: z.number().min(-90).max(90).optional().nullable(),
    longitude: z.number().min(-180).max(180).optional().nullable(),
    description: z.string().optional(),
    image: z.string().optional(),
    banner: z.string().optional(),
    instagramUrl: z.string().optional(),
    tiktokUrl: z.string().optional(),
});

type WorkplaceFormData = z.infer<typeof workplaceSchema>;

export default function MyBarbershopPage() {
    const [workplace, setWorkplace] = useState<Workplace | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [uploadingBanner, setUploadingBanner] = useState(false);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const bannerInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
    } = useForm<WorkplaceFormData>({
        resolver: zodResolver(workplaceSchema),
    });

    const watchedImage = watch('image');
    const watchedBanner = watch('banner');

    const fetchWorkplace = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await workplacesService.getMyWorkplace();
            setWorkplace(data);
            reset({
                name: data.name,
                address: data.address || '',
                city: data.city || '',
                latitude: data.latitude,
                longitude: data.longitude,
                description: data.description || '',
                image: data.image || '',
                banner: data.banner || '',
                instagramUrl: data.instagramUrl || '',
                tiktokUrl: data.tiktokUrl || '',
            });
        } catch (err: any) {
            setError('Error al cargar la información de tu barbería.');
        } finally {
            setIsLoading(false);
        }
    }, [reset]);

    useEffect(() => {
        fetchWorkplace();
    }, [fetchWorkplace]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploadingImage(true);
        try {
            const url = await uploadService.uploadFile(file);
            setValue('image', url);
        } catch (err: any) {
            setError('Error al subir la imagen principal.');
        } finally {
            setUploadingImage(false);
        }
    };

    const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploadingBanner(true);
        try {
            const url = await uploadService.uploadFile(file);
            setValue('banner', url);
        } catch (err: any) {
            setError('Error al subir el banner.');
        } finally {
            setUploadingBanner(false);
        }
    };

    const onSubmit = async (data: WorkplaceFormData) => {
        if (!workplace) return;
        try {
            setIsLoading(true);
            setError(null);
            await workplacesService.updateWorkplace(workplace.id, data as UpdateWorkplaceData);
            setSuccess('Perfil actualizado correctamente.');
            setTimeout(() => setSuccess(null), 3000);
            await fetchWorkplace();
        } catch (err: any) {
            setError('Error al guardar los cambios.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading && !workplace) {
        return <div className="p-8 text-center text-gray-500">Cargando...</div>;
    }

    if (error && !workplace) {
        return <div className="p-8 text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <Scissors className="w-8 h-8 text-indigo-600" />
                        Mi Barbería
                    </h1>
                    <p className="text-gray-600">Gestiona la información pública de tu negocio</p>
                </div>
            </div>

            {success && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded shadow-sm flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    {success}
                </div>
            )}

            {error && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded shadow-sm flex items-center gap-2">
                    <X className="w-5 h-5" />
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Banner Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="relative h-48 bg-gray-100">
                        {watchedBanner ? (
                            <img src={watchedBanner} alt="Banner" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <ImageIcon className="w-12 h-12" />
                            </div>
                        )}
                        <button
                            type="button"
                            onClick={() => bannerInputRef.current?.click()}
                            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-lg hover:bg-white transition"
                            disabled={uploadingBanner}
                        >
                            {uploadingBanner ? 'Subiendo...' : 'Cambiar Banner'}
                        </button>
                        <input
                            type="file"
                            ref={bannerInputRef}
                            onChange={handleBannerUpload}
                            className="hidden"
                            accept="image/*"
                        />
                    </div>

                    <div className="p-6 relative">
                        <div className="absolute -top-16 left-6">
                            <div className="relative w-32 h-32 rounded-xl border-4 border-white shadow-lg overflow-hidden bg-gray-50">
                                {watchedImage ? (
                                    <img src={watchedImage} alt="Logo" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <Scissors className="w-12 h-12" />
                                    </div>
                                )}
                                <button
                                    type="button"
                                    onClick={() => imageInputRef.current?.click()}
                                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition"
                                    disabled={uploadingImage}
                                >
                                    <Upload className="w-8 h-8 text-white" />
                                </button>
                            </div>
                            <input
                                type="file"
                                ref={imageInputRef}
                                onChange={handleImageUpload}
                                className="hidden"
                                accept="image/*"
                            />
                        </div>

                        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Comercial</label>
                                <input
                                    {...register('name')}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        Rating Actual
                                    </label>
                                    <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-bold">
                                        {workplace?.rating.toFixed(1)} ({workplace?.reviews} reviews)
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                                <textarea
                                    {...register('description')}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                                    placeholder="Cuéntale a tus clientes qué hace especial a tu barbería..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-indigo-600" />
                        Ubicación
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
                            <input
                                {...register('city')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Dirección Completa</label>
                            <input
                                {...register('address')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                    </div>
                    <div className="rounded-xl border border-gray-200 overflow-hidden">
                        <LocationPicker
                            latitude={watch('latitude')}
                            longitude={watch('longitude')}
                            onLocationChange={(lat, lng) => {
                                setValue('latitude', lat);
                                setValue('longitude', lng);
                            }}
                        />
                    </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Redes Sociales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 text-gray-400">Instagram</label>
                            <input
                                {...register('instagramUrl')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="https://instagram.com/tu_usuario"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 text-gray-400">TikTok</label>
                            <input
                                {...register('tiktokUrl')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="https://tiktok.com/@tu_usuario"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg active:scale-95 disabled:opacity-50"
                    >
                        {isLoading ? 'Guardando...' : 'Guardar Cambios'}
                    </button>
                </div>
            </form>
        </div>
    );
}
