export function ISO1087Table() {
  const services = [
    {
      servicio: 'ISO 1087',
      precio: 2800,
      costo: 1064,
      margen: '62%',
      highlight: true,
    },
    {
      servicio: 'Limpieza dental',
      precio: 380,
      costo: 185,
      margen: '51.3%',
      highlight: false,
    },
    {
      servicio: 'Ortodoncia (mensual)',
      precio: 850,
      costo: 478,
      margen: '43.8%',
      highlight: false,
    },
    {
      servicio: 'Endodoncia',
      precio: 1200,
      costo: 720,
      margen: '40%',
      highlight: false,
    },
    {
      servicio: 'Extracción',
      precio: 450,
      costo: 298,
      margen: '33.8%',
      highlight: false,
    },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Análisis de Rentabilidad por Servicio</h3>
        <p className="text-sm text-gray-600 mt-1">
          Comparativa ISO 1087 vs otros tratamientos
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Servicio</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Precio (Bs.)</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Costo (Bs.)</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Margen</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-100 transition-colors ${
                  service.highlight
                    ? 'bg-gradient-to-r from-green-50 to-green-100'
                    : 'hover:bg-gray-50'
                }`}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {service.highlight && (
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    )}
                    <span className={`text-sm ${service.highlight ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                      {service.servicio}
                    </span>
                  </div>
                </td>
                <td className="text-right py-3 px-4 text-sm text-gray-700">
                  {service.precio.toLocaleString()}
                </td>
                <td className="text-right py-3 px-4 text-sm text-gray-700">
                  {service.costo.toLocaleString()}
                </td>
                <td className="text-right py-3 px-4">
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      service.highlight
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {service.margen}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-blue-700">Insight clave:</span> El servicio ISO 1087 optimiza el uso de insumos compartidos, reduciendo costos operativos en un 28% comparado con el promedio de otros servicios.
        </p>
      </div>
    </div>
  );
}
