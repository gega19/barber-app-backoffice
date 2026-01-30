'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth';
import api from '@/lib/api';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface BarberProfile {
    id: string;
    name: string;
    email: string;
    slug: string | null;
    image: string;
    specialty: string;
    rating: number;
}

export default function ProfilePage() {
    const router = useRouter();
    const [profile, setProfile] = useState<BarberProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // 1. Check Auth
        if (!authService.isAuthenticated()) {
            router.push('/login');
            return;
        }

        // 2. Fetch Profile
        loadProfile();
    }, [router]);

    const loadProfile = async () => {
        try {
            // Get current user to check role
            const user = await authService.getCurrentUser();
            if (user.role !== 'BARBER') {
                // If not barber, maybe redirect or show different view?
                // For now, assume this page is for barbers.
                // alert('Esta página es solo para barberos');
                // router.push('/dashboard');
            }

            const response = await api.get<{ success: boolean; data: BarberProfile }>('/barbers/me');
            if (response.data.success) {
                setProfile(response.data.data);
            }
        } catch (error) {
            console.error('Error loading profile:', error);
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (!profile?.slug) return;
        const url = `https://barber.corporacionceg.com/barber/${profile.slug}`;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="p-8 text-center text-gray-500">
                No se pudo cargar el perfil. Asegúrate de estar registrado como barbero.
            </div>
        );
    }

    const profileUrl = `https://barber.corporacionceg.com/barber/${profile.slug || profile.id}`;

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">Mi Perfil Profesional</h1>
                    <button
                        onClick={() => router.push('/dashboard')}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                        &larr; Volver al Dashboard
                    </button>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <img
                                src={profile.image || 'https://via.placeholder.com/150'}
                                alt={profile.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-50"
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                                <p className="text-gray-500">{profile.email}</p>
                                <div className="mt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                                        {profile.specialty}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium flex items-center gap-1">
                                        ★ {profile.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Share Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Compartir Perfil</h3>
                    <p className="text-gray-600 mb-4">
                        Comparte este enlace con tus clientes para que puedan reservar citas contigo directamente.
                    </p>

                    <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 truncate">
                            {profileUrl}
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 px-4"
                        >
                            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            <span className="hidden sm:inline">{copied ? 'Copiado' : 'Copiar'}</span>
                        </button>
                        <a
                            href={profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition px-4"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>

                    {!profile.slug && (
                        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
                            Tu perfil aún no tiene un "slug" personalizado (enlace corto). Contacta al administrador para configurarlo.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
