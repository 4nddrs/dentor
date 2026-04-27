import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { KPICard } from './components/KPICard';
import { RevenueChart } from './components/RevenueChart';
import { ISO1087Table } from './components/ISO1087Table';
import { AIChat } from './components/AIChat';
import { DoctorPerformanceCard } from './components/DoctorPerformanceCard';
import { InventoryAlerts } from './components/InventoryAlerts';
import { InventoryPredictive } from './components/InventoryPredictive';
import { DoctorsPerformance } from './components/DoctorsPerformance';
import { DollarSign, TrendingUp, Calendar, Target } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)' }}>
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="md:ml-64 transition-all duration-300">
        <Header />

        <main className="p-4 md:p-6 animate-fadeIn">
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard Global</h1>
                <p className="text-sm text-gray-600 mt-1">Visión general del rendimiento - Abril 2026</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard
                  title="Ingresos Brutos Mes"
                  value="Bs. 185,500"
                  change="+15% vs abril"
                  icon={DollarSign}
                  trend="up"
                />
                <KPICard
                  title="Rentabilidad Real"
                  value="68.2%"
                  change="Costos optimizados"
                  icon={TrendingUp}
                  trend="up"
                />
                <KPICard
                  title="Ocupación de Sillones"
                  value="91.4%"
                  change="+3.2% vs marzo"
                  icon={Calendar}
                  trend="up"
                />
                <KPICard
                  title="Conversión Presupuestos"
                  value="71.3%"
                  change="+5.1% vs marzo"
                  icon={Target}
                  trend="up"
                />
              </div>

              <RevenueChart />

              <ISO1087Table />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DoctorPerformanceCard />
                <InventoryAlerts />
              </div>
            </div>
          )}

          {activeSection === 'inventory' && <InventoryPredictive />}

          {activeSection === 'doctors' && <DoctorsPerformance />}

          {activeSection === 'iso1087' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Análisis ISO 1087</h1>
                <p className="text-sm text-gray-600 mt-1">Análisis detallado del servicio de mayor rentabilidad</p>
              </div>
              <ISO1087Table />
            </div>
          )}

        </main>
      </div>

      <AIChat />
    </div>
  );
}