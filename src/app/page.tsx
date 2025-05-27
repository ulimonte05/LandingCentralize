'use client'

import { useState, useEffect } from 'react';

export default function Ej() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Pequeño retraso para asegurar que los estilos iniciales se apliquen antes de la transición
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-gray-950 relative pb-32 sm:pb-40 md:pb-48 lg:pb-60 xl:pb-72 px-4 md:px-8 lg:px-16">
        <nav className={`flex items-center justify-between py-8 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          <img className="w-16 h-16 md:w-24 md:h-24" src="./images/logo.png" alt="Logo" />
          
          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#" className="hover:opacity-80">Producto</a>
            <a href="#" className="hover:opacity-80">Solucion</a>
            <a href="#" className="hover:opacity-80">Clientes</a>
            <a href="#" className="hover:opacity-80">Precios</a>
            <a href="#" className="hover:opacity-80">Nosotros</a>
          </div>

          <button className="px-7 py-3 bg-white rounded-full text-lg font-semibold">
            <a href="https://platform.centralize.dev/dashboard" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Ingresar</a>
          </button>
        </nav>

        <div className={`max-w-6xl mx-auto text-center mt-12 md:mt-16 lg:mt-24 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: isMounted ? '150ms' : '0ms' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-gray-400 text-transparent bg-clip-text">Agentes de IA</span>
            <span className="text-white"> humanizados para vender, asesorar y llevar tu</span>
            <span className="bg-gradient-to-r from-blue-500 to-gray-400 text-transparent bg-clip-text"> CRM</span>
            <span className="text-white">.</span>
          </h1>

          <p className={`mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-white opacity-80 max-w-xl md:max-w-2xl mx-auto transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: isMounted ? '300ms' : '0ms' }}>
            <span>Agentes de IA (</span>
            <span className="font-extrabold">practicamente humanos</span>
            <span>), seguimientos, campañas masivas, </span>
            <span className="font-extrabold">métricas personalizadas</span>
            <span>, CRM y más.</span>
          </p>

          <p className={`mt-4 text-base md:text-lg lg:text-xl text-white opacity-80 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: isMounted ? '450ms' : '0ms' }}>
            En <span className="font-black">Whatsapp</span>, Instagram, Facebook, Telegram, etc.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 mt-8 md:mt-12 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: isMounted ? '600ms' : '0ms' }}>
            <button className="w-full sm:w-auto px-6 py-3 md:px-7 md:py-3 bg-white rounded-full text-base md:text-lg font-semibold">
              <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Agendar Demo</a>
            </button>
            <button className="w-full sm:w-auto px-6 py-3 md:px-7 md:py-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base md:text-lg font-medium">
              <a href="wa.me/541158961046" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Habla con Juancito IA</a>
            </button>
          </div>
        </div>

        <img 
            className={`w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl left-1/2 transform -translate-x-1/2 mx-auto absolute rounded-[40px] shadow-2xl -bottom-32 sm:-bottom-40 md:-bottom-60 lg:-bottom-72 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: isMounted ? '350ms' : '0ms' }}
            src="./images/centralize.png" 
            alt="Platform Preview"
        />
      </div>

      {/* Clients Section */}
      <div className={`py-16 md:py-24 mt-32 sm:mt-40 md:mt-60 lg:mt-72 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '200ms' : '0ms' }}>
        <h2 className="text-center text-xl sm:text-2xl font-medium mb-10 md:mb-12">
          Confian en nuestra tecnologia:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-4">
          <img className="w-24 h-24 sm:w-28 md:w-32 lg:w-36" src="./images/google.png" alt="Client" />
          <img className="h-12 sm:h-14 md:h-16 lg:h-20" src="./images/microsoft.png" alt="Client" />
          <img className="w-24 h-24 sm:w-28 md:w-32 lg:w-36" src="./images/whatsapp.png" alt="Client" />
          <img className="w-24 h-24 sm:w-28 md:w-32 lg:w-36" src="./images/meta.png" alt="Client" />
        </div>
      </div>

      {/* Features Section */}
      <div className={`w-full bg-gray-950 py-16 md:py-24 px-4 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '300ms' : '0ms' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
            Trabaja Inteligente.<br/>
            Usa <span className="text-blue-600">Centralize</span> en cada proceso.
          </h2>

          <p className="text-base md:text-lg text-white opacity-80 mb-10 md:mb-12">
            En 3 minutos podes tener tu agente funcionando.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-10 md:space-y-12">
              <div className={`flex gap-4 sm:gap-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isMounted ? '400ms' : '0ms' }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">1</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Crea tu cuenta.</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    Inicia sesion, rellena el onboarding y conecta tu red favorita.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80 mt-2">1 min.</p>
                </div>
              </div>

              <div className={`flex gap-4 sm:gap-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isMounted ? '550ms' : '0ms' }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Activa productos.</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    Activá tu empleado de IA: generá métricas, seguimientos y mucho más.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80 mt-2">1 min.</p>
                </div>
              </div>

              <div className={`flex gap-4 sm:gap-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isMounted ? '700ms' : '0ms' }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">3</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Espera</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    Lleva trafico y preparate para escalar tus operaciones.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80 mt-2">1 min.</p>
                </div>
              </div>
            </div>

            <div className={`hidden md:block transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
              <img 
                className="w-[80%] rounded-[40px]" 
                src="./images/messi.png"
                alt="Features"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className={`py-16 md:py-24 px-4 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '400ms' : '0ms' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <div className={`bg-gradient-to-br from-black to-neutral-500 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">Servicio Autonomo</h3>
            <div className="space-y-6 md:space-y-8 flex-grow">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Sin limite de equipo</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Metricas a medida.</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Seguimientos Autonomos con IA.</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Conexión a Instagram, Facebook, whatsapp.</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Soporte 24/7.</span>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base sm:text-lg md:text-xl font-medium">
                <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Hablemos!</a>
              </button>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-black to-neutral-500 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '650ms' : '0ms' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">Servicio Completo</h3>
            <div className="space-y-6 md:space-y-8 flex-grow">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Todo el servicio de Autonomo mas:</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Redes y numeros infinitos.</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Desarrolladores dedicados.</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Agente de IA enterprise.</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Funcionalidades a medida.</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base md:text-lg text-white">Soporte 24/7.</span>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base sm:text-lg md:text-xl font-medium">
                <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Hablemos!</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`bg-gray-950 py-16 md:py-24 px-4 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-10 md:mb-12">
            Estamos para ayudar a tu negocio.
          </h2>

          <button className="px-7 py-3 sm:px-8 sm:py-4 bg-white rounded-full text-base sm:text-lg md:text-xl font-bold mb-12 md:mb-16">
            <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Agendar Demo</a>
          </button>

          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9.5rem] font-medium text-white leading-none">Centralize<b className="text-gray-700">.dev</b></p>
        </div>
      </footer>
    </div>
  );
}

