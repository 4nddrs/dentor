import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Clock, DollarSign, Users, TrendingUp, Calendar, Award } from 'lucide-react';

export function DoctorsPerformance() {
  const doctorData = [
    { name: 'Dr. Ruiz', ingresos: 52300, pacientes: 89, horas: 168, efficiency: 92, treatments: { iso1087: 12, limpieza: 35, ortodoncia: 18, endodoncia: 15, otros: 9 } },
    { name: 'Dra. Mendoza', ingresos: 48700, pacientes: 82, horas: 160, efficiency: 88, treatments: { iso1087: 10, limpieza: 32, ortodoncia: 16, endodoncia: 14, otros: 10 } },
    { name: 'Dr. Castro', ingresos: 41200, pacientes: 71, horas: 152, efficiency: 85, treatments: { iso1087: 8, limpieza: 28, ortodoncia: 14, endodoncia: 12, otros: 9 } },
    { name: 'Dra. López', ingresos: 38900, pacientes: 68, horas: 144, efficiency: 83, treatments: { iso1087: 7, limpieza: 26, ortodoncia: 13, endodoncia: 11, otros: 11 } },
  ];

  const weeklyPerformance = [
    { semana: 'S1', drRuiz: 12800, draMendoza: 11900, drCastro: 10200, draLopez: 9500 },
    { semana: 'S2', drRuiz: 13200, draMendoza: 12100, drCastro: 10500, draLopez: 9800 },
    { semana: 'S3', drRuiz: 12500, draMendoza: 12400, drCastro: 10100, draLopez: 9700 },
    { semana: 'S4', drRuiz: 13800, draMendoza: 12300, drCastro: 10400, draLopez: 9900 },
  ];

  const treatmentDistribution = [
    { name: 'ISO 1087', value: 37, color: '#0077B6' },
    { name: 'Limpieza', value: 121, color: '#80ED99' },
    { name: 'Ortodoncia', value: 61, color: '#9D4EDD' },
    { name: 'Endodoncia', value: 52, color: '#F72585' },
    { name: 'Otros', value: 39, color: '#FFB703' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Rendimiento de Doctores</h1>
        <p className="text-sm text-gray-600 mt-1">
          Análisis comparativo de productividad - Abril 2026
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {doctorData.slice(0, 1).map((doctor) => (
          <div
            key={doctor.name}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-100">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">Ingresos/Hora</span>
            </div>
            <p className="text-3xl font-semibold text-gray-900">
              Bs. {Math.round(doctor.ingresos / doctor.horas)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Top performer: {doctor.name}</p>
          </div>
        ))}

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-green-100">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Total Pacientes</span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">310</p>
          <p className="text-xs text-gray-500 mt-1">+12% vs marzo</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-purple-100">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Tiempo Muerto Prom.</span>
          </div>
          <p className="text-3xl font-semibold text-gray-900">18%</p>
          <p className="text-xs text-gray-500 mt-1">Optimizable</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Comparativa de Ingresos por Doctor
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={doctorData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="ingresos" fill="#0077B6" name="Ingresos (Bs.)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Detalle por Doctor
        </h3>
        <div className="space-y-4">
          {doctorData.map((doctor) => (
            <div
              key={doctor.name}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
                <span className="text-sm text-blue-700 font-semibold">
                  Bs. {doctor.ingresos.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Pacientes</p>
                  <p className="font-medium text-gray-900">{doctor.pacientes}</p>
                </div>
                <div>
                  <p className="text-gray-500">Horas trabajadas</p>
                  <p className="font-medium text-gray-900">{doctor.horas}h</p>
                </div>
                <div>
                  <p className="text-gray-500">Bs./Paciente</p>
                  <p className="font-medium text-gray-900">
                    {Math.round(doctor.ingresos / doctor.pacientes)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Evolución Semanal de Ingresos
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={weeklyPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="semana" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="drRuiz" stroke="#0077B6" strokeWidth={2} name="Dr. Ruiz" />
              <Line type="monotone" dataKey="draMendoza" stroke="#80ED99" strokeWidth={2} name="Dra. Mendoza" />
              <Line type="monotone" dataKey="drCastro" stroke="#9D4EDD" strokeWidth={2} name="Dr. Castro" />
              <Line type="monotone" dataKey="draLopez" stroke="#F72585" strokeWidth={2} name="Dra. López" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Distribución de Tratamientos (Total)
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={treatmentDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {treatmentDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-yellow-100">
              <Award className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Top Performer</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">Dr. Ruiz</p>
          <p className="text-xs text-gray-500 mt-1">Bs. 311/hora</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-green-100">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Eficiencia Promedio</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">87%</p>
          <p className="text-xs text-gray-500 mt-1">+4% vs marzo</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-blue-100">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Citas Completadas</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">310</p>
          <p className="text-xs text-gray-500 mt-1">97.2% asistencia</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-red-100">
              <Clock className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Tiempo Muerto</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">18%</p>
          <p className="text-xs text-gray-500 mt-1">Optimizable</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
        <h4 className="font-semibold text-purple-900 mb-2">🎯 Recomendación IA</h4>
        <p className="text-sm text-gray-700 mb-3">
          El Dr. Ruiz tiene los martes con 35% de tiempo muerto. Sugerencia: agrupar las
          limpiezas dentales (20 min c/u) en las mañanas de martes y reservar las tardes para
          tratamientos ISO 1087 (90 min, mayor margen). Esto aumentaría su rentabilidad por hora
          sillón en 18%.
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Oportunidad adicional:</span> La Dra. Mendoza tiene la segunda mayor eficiencia pero menor cantidad de tratamientos ISO 1087. Capacitarla en este servicio podría aumentar los ingresos mensuales de la clínica en Bs. 8,400.
        </p>
      </div>
    </div>
  );
}
