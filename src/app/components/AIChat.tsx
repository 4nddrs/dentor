import { useState, useEffect } from 'react';
import { Bot, X, Maximize2, Send } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const suggestedQuestions = [
    '¿Cómo optimizar la agenda del Dr. Ruiz?',
    '¿Qué insumos debo ordenar esta semana?',
    '¿Cuál es mi tratamiento más rentable?',
    'Proyección de ingresos para mayo',
  ];

  const responses: { [key: string]: string } = {
    '¿Cómo optimizar la agenda del Dr. Ruiz?':
      'Basado en el análisis de los últimos 3 meses, el Dr. Ruiz tiene un 35% de tiempo muerto los martes. Recomiendo:\n\n1. Agrupar limpiezas dentales (20 min c/u) en las mañanas\n2. Reservar las tardes para tratamientos ISO 1087 (90 min, mayor margen del 62%)\n3. Implementar un sistema de confirmación automática 48h antes\n\nEsto incrementaría su rentabilidad por hora sillón en un 18%, generando Bs. 9,400 adicionales al mes.',

    '¿Qué insumos debo ordenar esta semana?':
      'Análisis de inventario predictivo - Urgente esta semana:\n\n🔴 CRÍTICO:\n• Anestesia local: 3 unidades (agotamiento en 2 días) - Ordenar 25 unidades\n\n🟡 IMPORTANTE:\n• Guantes nitrilo (M): 12 unidades (4 días) - Ordenar 30 unidades\n• Composite dental A2: 8 unidades (5 días) - Ordenar 20 unidades\n\nTip: Consolidar estas órdenes con el proveedor principal puede generar un descuento del 12%, ahorrando Bs. 276.',

    '¿Cuál es mi tratamiento más rentable?':
      'El servicio ISO 1087 es el más rentable:\n\n💰 Margen de beneficio: 62%\n• Precio: Bs. 2,800\n• Costo: Bs. 1,064\n• Ganancia: Bs. 1,736\n\nComparación con otros servicios:\n• Limpieza dental: 51.3% margen\n• Ortodoncia: 43.8% margen\n• Endodoncia: 40% margen\n\nRecomendación: Aumentar la capacidad de ISO 1087 en un 25% podría incrementar los ingresos mensuales en Bs. 16,200.',

    'Proyección de ingresos para mayo':
      'Proyección de ingresos para Mayo 2026:\n\n📈 Ingresos estimados: Bs. 198,400\n• Crecimiento vs Abril: +7.0% (Bs. 12,900)\n• Tendencia: Crecimiento sostenido\n\nFactores clave:\n• 18 tratamientos ISO 1087 programados (+6 vs abril)\n• Optimización de agenda Dr. Ruiz implementada\n• 5 pacientes nuevos de ortodoncia confirmados\n\nRiesgos:\n• Posible desabastecimiento de anestesia si no se ordena esta semana\n• Dr. Castro tiene 3 días de vacaciones (impacto: -Bs. 3,100)',
  };

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
      const initialMessage: Message = {
        type: 'bot',
        content: 'Hola, soy tu asistente de datos. He detectado que la agenda del Dr. Ruiz tiene un 35% de tiempos muertos los martes. Sugiero agrupar las limpiezas por la mañana y mover los tratamientos largos (ISO 1087) a la tarde. Esto incrementaría la rentabilidad por \'hora sillón\' en un 18%.',
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }, 2000);

    return () => clearTimeout(typingTimer);
  }, []);

  const handleSuggestionClick = (question: string) => {
    const userMessage: Message = {
      type: 'user',
      content: question,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setShowSuggestions(false);
    setInputValue('');

    setTimeout(() => {
      setIsTyping(true);
    }, 300);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        type: 'bot',
        content: responses[question] || 'Entiendo tu consulta. Estoy analizando los datos para darte la mejor respuesta...',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setShowSuggestions(true);
    }, 2500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowSuggestions(false);

    setTimeout(() => {
      setIsTyping(true);
    }, 300);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        type: 'bot',
        content: 'Entiendo tu consulta. En la versión completa del sistema, podré analizar cualquier pregunta sobre tus datos clínicos, inventario y rendimiento en tiempo real.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setShowSuggestions(true);
    }, 2000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <Bot className="w-6 h-6 text-white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Consultor de IA Estratégico</h3>
            <p className="text-blue-100 text-xs">Activo 24/7</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-white/10 rounded transition-colors">
            <Maximize2 className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="p-4 max-h-96 overflow-y-auto space-y-3">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`animate-fadeIn ${
              message.type === 'user' ? 'flex justify-end' : ''
            }`}
          >
            {message.type === 'bot' ? (
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 max-w-[90%]">
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                  {message.content}
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-3 max-w-[85%]">
                <p className="text-sm text-white leading-relaxed">
                  {message.content}
                </p>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2 items-center bg-gray-100 rounded-lg p-3 w-fit">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}

        {showSuggestions && !isTyping && (
          <div className="space-y-2 pt-2">
            <p className="text-xs text-gray-500 font-medium">Preguntas sugeridas:</p>
            {suggestedQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(question)}
                className="w-full text-left px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-xs text-gray-700"
              >
                {question}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escribe tu consulta..."
            className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
