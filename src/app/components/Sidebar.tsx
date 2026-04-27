import { useState } from 'react';
import { Home, Package, Users, FileText, Settings, ChevronLeft, ChevronRight, Activity, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard Global', icon: Home },
    { id: 'inventory', label: 'Inventario Predictivo', icon: Package },
    { id: 'doctors', label: 'Rendimiento Doctores', icon: Users },
    { id: 'iso1087', label: 'Análisis ISO 1087', icon: FileText },
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMobileOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {isMobileOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <div
        className={`h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col fixed left-0 top-0 z-40 ${
          isCollapsed ? 'w-16' : 'w-64'
        } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6" style={{ color: '#0077B6' }} />
            <span className="font-semibold text-gray-800">ClínicaBI Pro</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:block p-1.5 rounded-lg hover:bg-gray-100 transition-colors ml-auto"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-3 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all mb-1 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm truncate">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>
      </div>
    </>
  );
}
