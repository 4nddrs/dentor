import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

export function KPICard({ title, value, change, icon: Icon, trend }: KPICardProps) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
          <Icon className="w-5 h-5" style={{ color: '#0077B6' }} />
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            trend === 'up'
              ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-700'
              : 'bg-gradient-to-r from-red-100 to-red-200 text-red-700'
          }`}
        >
          {change}
        </span>
      </div>
      <h3 className="text-sm text-gray-600 mb-1.5">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
