import { Package, TrendingDown, TrendingUp, ShoppingCart, Calendar, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export function InventoryPredictive() {
  const predictions = [
    {
      item: 'Anestesia local',
      current: 3,
      predictedRunout: '2 días',
      recommended: 25,
      trend: 'critical',
      avgConsumption: 3.5,
      costPerUnit: 85,
    },
    {
      item: 'Composite dental A2',
      current: 8,
      predictedRunout: '5 días',
      recommended: 20,
      trend: 'warning',
      avgConsumption: 2.1,
      costPerUnit: 120,
    },
    {
      item: 'Brackets metálicos',
      current: 45,
      predictedRunout: '18 días',
      recommended: 50,
      trend: 'good',
      avgConsumption: 2.8,
      costPerUnit: 45,
    },
    {
      item: 'Guantes nitrilo (M)',
      current: 12,
      predictedRunout: '4 días',
      recommended: 30,
      trend: 'warning',
      avgConsumption: 4.2,
      costPerUnit: 12,
    },
    {
      item: 'Resina composite B1',
      current: 15,
      predictedRunout: '7 días',
      recommended: 25,
      trend: 'warning',
      avgConsumption: 2.5,
      costPerUnit: 110,
    },
    {
      item: 'Jeringas desechables',
      current: 38,
      predictedRunout: '12 días',
      recommended: 50,
      trend: 'good',
      avgConsumption: 3.8,
      costPerUnit: 8,
    },
  ];

  const consumptionHistory = [
    { mes: 'Nov', consumo: 78, costo: 8400 },
    { mes: 'Dic', consumo: 82, costo: 8950 },
    { mes: 'Ene', consumo: 85, costo: 9200 },
    { mes: 'Feb', consumo: 91, costo: 9850 },
    { mes: 'Mar', consumo: 88, costo: 9500 },
    { mes: 'Abr', consumo: 95, costo: 10200 },
  ];

  const topSupplies = [
    { name: 'Anestesia', percentage: 22 },
    { name: 'Composite', percentage: 18 },
    { name: 'Brackets', percentage: 15 },
    { name: 'Guantes', percentage: 12 },
    { name: 'Otros', percentage: 33 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Inventario Predictivo con IA</h1>
        <p className="text-sm text-gray-600 mt-1">
          Predicciones basadas en patrones de consumo histórico
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-red-100">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Stock Crítico</span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">1</p>
          <p className="text-xs text-gray-500 mt-1">Requiere orden inmediata</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-yellow-100">
              <Package className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">En Alerta</span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">2</p>
          <p className="text-xs text-gray-500 mt-1">Ordenar en 3-5 días</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-green-100">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Stock Saludable</span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">1</p>
          <p className="text-xs text-gray-500 mt-1">Nivel óptimo</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Predicciones de Agotamiento
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Insumo
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                  Stock Actual
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                  Agotamiento Estimado
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                  Cant. Recomendada
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.trend === 'critical'
                            ? 'bg-red-500'
                            : item.trend === 'warning'
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                        }`}
                      ></span>
                      <span className="text-sm text-gray-700">{item.item}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4 text-sm text-gray-700">
                    {item.current}
                  </td>
                  <td className="text-center py-3 px-4">
                    <span
                      className={`text-sm font-medium ${
                        item.trend === 'critical'
                          ? 'text-red-600'
                          : item.trend === 'warning'
                          ? 'text-yellow-600'
                          : 'text-green-600'
                      }`}
                    >
                      {item.predictedRunout}
                    </span>
                  </td>
                  <td className="text-center py-3 px-4 text-sm text-gray-700">
                    {item.recommended} unidades
                  </td>
                  <td className="text-center py-3 px-4">
                    <button className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Generar Orden
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Historial de Consumo y Costos
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={consumptionHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="mes" stroke="#6b7280" />
              <YAxis yAxisId="left" stroke="#0077B6" />
              <YAxis yAxisId="right" orientation="right" stroke="#80ED99" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="consumo"
                stroke="#0077B6"
                strokeWidth={3}
                dot={{ fill: '#0077B6', r: 4 }}
                name="Unidades Consumidas"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="costo"
                stroke="#80ED99"
                strokeWidth={3}
                dot={{ fill: '#80ED99', r: 4 }}
                name="Costo Total (Bs.)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Distribución de Gasto por Categoría
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topSupplies} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="name" type="category" stroke="#6b7280" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="percentage" fill="#0077B6" radius={[0, 8, 8, 0]} name="% del Gasto" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-purple-100">
              <ShoppingCart className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Órdenes Pendientes</span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">3</p>
          <p className="text-xs text-gray-500 mt-1">Total: Bs. 4,580</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-blue-100">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Próxima Entrega</span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">30 Abr</p>
          <p className="text-xs text-gray-500 mt-1">Composite + Brackets</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-green-100">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Ahorro Optimización</span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">Bs. 1,240</p>
          <p className="text-xs text-gray-500 mt-1">vs mes anterior</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">💡 Insight del Agente IA</h4>
        <p className="text-sm text-gray-700 mb-3">
          Basado en el consumo de los últimos 3 meses, se recomienda establecer un punto de
          reorden automático para la anestesia local en 15 unidades. Esto evitará
          desabastecimientos y reducirá el costo de envíos express en un 23%.
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Recomendación adicional:</span> Consolidar las órdenes de composite dental (A2 y B1) con el proveedor principal puede generar un descuento por volumen del 12%, ahorrando Bs. 276 mensuales.
        </p>
      </div>
    </div>
  );
}
