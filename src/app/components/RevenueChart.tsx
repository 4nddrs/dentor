import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { mes: 'Nov', pacientes: 245, ingresos: 142500 },
  { mes: 'Dic', pacientes: 268, ingresos: 156800 },
  { mes: 'Ene', pacientes: 289, ingresos: 167200 },
  { mes: 'Feb', pacientes: 312, ingresos: 175600 },
  { mes: 'Mar', pacientes: 298, ingresos: 168300 },
  { mes: 'Abr', pacientes: 335, ingresos: 185500 },
];

export function RevenueChart() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Proyección de Crecimiento</h3>
        <span className="text-xs text-gray-500">Últimos 6 meses</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="mes" stroke="#6b7280" />
          <YAxis yAxisId="left" stroke="#0077B6" />
          <YAxis yAxisId="right" orientation="right" stroke="#80ED99" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="pacientes"
            stroke="#0077B6"
            strokeWidth={3}
            dot={{ fill: '#0077B6', r: 5 }}
            name="Pacientes Atendidos"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="ingresos"
            stroke="#80ED99"
            strokeWidth={3}
            dot={{ fill: '#80ED99', r: 5 }}
            name="Ingresos (Bs.)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
