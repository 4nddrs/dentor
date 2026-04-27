import { AlertTriangle, AlertCircle } from 'lucide-react';

export function InventoryAlerts() {
  const alerts = [
    { item: 'Anestesia local', stock: 3, status: 'critical' as const, reorderPoint: 15 },
    { item: 'Guantes nitrilo (M)', stock: 12, status: 'warning' as const, reorderPoint: 25 },
    { item: 'Composite dental A2', stock: 8, status: 'warning' as const, reorderPoint: 20 },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventario - Alertas</h3>
      <div className="space-y-3">
        {alerts.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
              item.status === 'critical'
                ? 'bg-red-50 border-red-200'
                : 'bg-yellow-50 border-yellow-200'
            }`}
          >
            <div className="flex items-center gap-3">
              {item.status === 'critical' ? (
                <AlertTriangle className="w-5 h-5 text-red-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-600" />
              )}
              <div>
                <p className="font-medium text-gray-900">{item.item}</p>
                <p className="text-xs text-gray-600">
                  {item.stock} unidades • Punto de reorden: {item.reorderPoint}
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition-all text-sm font-medium">
              Ordenar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
