export function DoctorPerformanceCard() {
  const doctors = [
    { name: 'Dr. Ruiz', revenue: 52300, treatments: 89, efficiency: 92 },
    { name: 'Dra. Mendoza', revenue: 48700, treatments: 82, efficiency: 88 },
    { name: 'Dr. Castro', revenue: 41200, treatments: 71, efficiency: 85 },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Doctores Top Performance</h3>
      <div className="space-y-3">
        {doctors.map((doctor, idx) => (
          <div key={idx} className="group hover:scale-[1.02] transition-transform">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 group-hover:border-blue-200 group-hover:shadow-sm transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="font-semibold text-blue-700">{idx + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{doctor.name}</p>
                  <p className="text-xs text-gray-600">{doctor.treatments} tratamientos</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-blue-700">Bs. {doctor.revenue.toLocaleString()}</p>
                <p className="text-xs text-gray-600">Eficiencia: {doctor.efficiency}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
