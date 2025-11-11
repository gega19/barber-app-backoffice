'use client';

import { useRouter, usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Scissors, 
  Calendar,
  Tag,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  CreditCard,
  FolderOpen,
  ShieldCheck,
  Award,
  Bell
} from 'lucide-react';
import { useState } from 'react';
import { authService } from '@/lib/auth';

interface NavSubItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  name: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: NavSubItem[];
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Usuarios', href: '/dashboard/users', icon: Users },
  { name: 'Barberías', href: '/dashboard/barbershops', icon: Scissors },
  { name: 'Citas', href: '/dashboard/appointments', icon: Calendar },
  { name: 'Promociones', href: '/dashboard/promotions', icon: Tag },
  { name: 'Especialidades', href: '/dashboard/specialties', icon: Award },
  { name: 'Notificaciones', href: '/dashboard/notifications', icon: Bell },
  { 
    name: 'General', 
    icon: FolderOpen,
    subItems: [
      { name: 'Métodos de Pago', href: '/dashboard/general/payment-methods', icon: CreditCard },
    ]
  },
  { 
    name: 'Pago', 
    icon: CreditCard,
    subItems: [
      { name: 'Verificar Pagos', href: '/dashboard/payment/verification', icon: ShieldCheck },
    ]
  },
  { name: 'Configuración', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Auto-expand items that contain the current path
  const getInitialExpandedItems = (): string[] => {
    const expanded: string[] = [];
    navigation.forEach(item => {
      if (item.subItems) {
        const hasActiveSubItem = item.subItems.some(subItem => pathname === subItem.href);
        if (hasActiveSubItem) {
          expanded.push(item.name);
        }
      }
    });
    return expanded;
  };
  
  const [expandedItems, setExpandedItems] = useState<string[]>(getInitialExpandedItems());

  const handleLogout = () => {
    authService.logout();
    router.push('/login');
  };

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isItemActive = (item: NavItem): boolean => {
    if (item.href) {
      return pathname === item.href;
    }
    if (item.subItems) {
      return item.subItems.some(subItem => pathname === subItem.href);
    }
    return false;
  };

  const isSubItemActive = (subItem: NavSubItem): boolean => {
    return pathname === subItem.href;
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen transition-transform
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          w-64 bg-white border-r border-gray-200
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Barber App</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = isItemActive(item);
              const isExpanded = expandedItems.includes(item.name);
              const hasSubItems = item.subItems && item.subItems.length > 0;
              
              return (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (hasSubItems) {
                        toggleExpanded(item.name);
                      } else if (item.href) {
                        router.push(item.href);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`
                      w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg
                      transition-colors
                      ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} />
                      <span>{item.name}</span>
                    </div>
                    {hasSubItems && (
                      isExpanded ? (
                        <ChevronDown className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} />
                      ) : (
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} />
                      )
                    )}
                  </button>
                  
                  {hasSubItems && isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems!.map((subItem) => {
                        const SubIcon = subItem.icon;
                        const isSubActive = isSubItemActive(subItem);
                        
                        return (
                          <button
                            key={subItem.name}
                            onClick={() => {
                              router.push(subItem.href);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`
                              w-full flex items-center gap-3 px-4 py-2 rounded-lg
                              transition-colors text-sm
                              ${
                                isSubActive
                                  ? 'bg-indigo-50 text-indigo-700 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }
                            `}
                          >
                            <SubIcon className={`w-4 h-4 ${isSubActive ? 'text-indigo-600' : 'text-gray-400'}`} />
                            <span>{subItem.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Logout button */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

