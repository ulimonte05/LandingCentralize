import Image from "next/image"; // Importar el componente Image de Next.js
import Script from 'next/script'; // Importar Script para el JSON-LD
import Link from 'next/link';

export const metadata = {
  title: 'Chatbot para WhatsApp con IA: Aumenta tus Ventas Automatizando Conversaciones | Centralize',
  description: 'Descubre cómo un chatbot para WhatsApp con IA puede automatizar tus conversaciones 24/7, calificar leads y aumentar tus ventas. Implementa tu bot WhatsApp fácilmente con Centralize.',
  keywords: ['chatbot whatsapp', 'bot whatsapp', 'whatsapp bot', 'bot para whatsapp', 'ia para whatsapp', 'automatización whatsapp', 'ventas por whatsapp', 'chatbot de ventas', 'inteligencia artificial whatsapp', 'centralize chatbot'], // Añadido "centralize chatbot" y otras variantes
  // Opcional: Open Graph y Twitter Cards para redes sociales (aunque no impactan directamente el SEO de rastreo)
  openGraph: {
    title: 'Chatbot para WhatsApp con IA: Aumenta tus Ventas Automatizando Conversaciones | Centralize',
    description: 'Descubre cómo un chatbot para WhatsApp con IA puede automatizar tus conversaciones 24/7, calificar leads y aumentar tus ventas. Implementa tu bot WhatsApp fácilmente con Centralize.',
    url: 'https://www.centralize.dev/chatbot-whatsapp', // Reemplaza con la URL real de la página
    siteName: 'Centralize',
    images: [
      {
        url: 'https://www.centralize.dev/images/centralize-whatsapp-bot-interface.png', // URL de la imagen principal del hero, debe ser pública
        width: 1200,
        height: 630,
        alt: 'Plataforma de chatbot para WhatsApp con IA de Centralize',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatbot para WhatsApp con IA: Aumenta tus Ventas Automatizando Conversaciones | Centralize',
    description: 'Descubre cómo un chatbot para WhatsApp con IA puede automatizar tus conversaciones 24/7, calificar leads y aumentar tus ventas. Implementa tu bot WhatsApp fácilmente con Centralize.',
    creator: '@CentralizeDev', // Si tienen un handle de Twitter
    images: ['https://www.centralize.dev/images/centralize.png'], // Misma imagen que Open Graph
  },
  alternates: { // Añadir canonical URL
    canonical: 'https://www.centralize.dev/chatbot-whatsapp', // URL canónica de esta página
  },
};

export default function ChatbotWhatsappPage() {

  // JSON-LD Schema Markup para el servicio
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chatbot para WhatsApp con IA de Centralize",
    "description": "Automatiza la comunicación, califica leads y aumenta tus ventas 24/7 con nuestro chatbot de WhatsApp impulsado por inteligencia artificial.",
    "serviceType": "Chatbot de IA para Negocios",
    "provider": {
      "@type": "Organization",
      "name": "Centralize",
      "url": "https://www.centralize.dev",
      "logo": "https://www.centralize.dev/images/logo.png", // URL absoluta del logo
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+541158961046", // Número de WhatsApp, o un número de contacto general
        "contactType": "Ventas",
        "areaServed": ["AR", "CL", "MX", "CO", "ES", "UY", "PE", "EC", "PA", "CR"], // Países donde ofrecen servicio
        "availableLanguage": ["es"]
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planes de Chatbot para WhatsApp",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Plan WhatsApp Bot Esencial",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Conexión a 1 número de WhatsApp",
                "description": "Flujos de conversación básicos con soporte estándar."
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Plan WhatsApp Bot PRO con IA",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Chatbot con Inteligencia Artificial Avanzada",
                "description": "Todo del plan Esencial más IA avanzada, integración CRM, métricas y reportes detallados, y soporte prioritario."
              }
            }
          ]
        }
      ]
    },
    // Si tuvieras un AggregateRating (estrellas de reseñas)
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.9",
    //   "reviewCount": "25"
    // },
    "url": "https://www.centralize.dev/chatbot-whatsapp", // URL canónica de esta página
  };

  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden">
      {/* JSON-LD Script */}
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <div className="w-full min-h-screen bg-gray-950 relative pb-32 sm:pb-40 md:pb-48 lg:pb-60 xl:pb-72 px-4 md:px-8 lg:px-16">
        <nav className={`flex items-center justify-between py-8 transition-all duration-1000 ease-out`}>
          {/* Usar Image de Next.js para el logo */}

          <Link href="/">
            <Image
              className="w-16 h-16 md:w-24 md:h-24"
              src="/images/logo.png"
              alt="Logo de Centralize, empresa líder en chatbot para WhatsApp con IA"
              width={96} // Ancho en px (md:w-24 -> 96px)
              height={96} // Alto en px (md:h-24 -> 96px)
            priority // Carga prioritaria para LCP
          />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#features" className="hover:opacity-80">Beneficios del Bot</a>
            <a href="#pricing" className="hover:opacity-80">Planes WhatsApp Bot</a>
          </div>

          <button className="px-7 py-3 bg-white rounded-full text-lg font-semibold">
            <a href="https://platform.centralize.dev/dashboard" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Ingresar a Centralize</a>
          </button>
        </nav>

        <div className={`max-w-6xl mx-auto text-center mt-12 md:mt-16 lg:mt-24 `}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-gray-400 text-transparent bg-clip-text">Chatbot para WhatsApp con IA</span>
            <span className="text-white">: Automatiza Conversaciones y</span>
            <span className="bg-gradient-to-r from-blue-500 to-gray-400 text-transparent bg-clip-text"> Aumenta tus Ventas</span>
            <span className="text-white">.</span>
          </h1>

          <p className={`mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-white opacity-80 max-w-xl md:max-w-2xl mx-auto`}>
            <span>Implementa un <span className="font-extrabold">bot para WhatsApp</span> inteligente que gestiona consultas, califica leads y cierra ventas 24/7. Descubre el poder del <span className="font-extrabold">chatbot WhatsApp</span> con IA para transformar la comunicación con tus clientes.</span>
          </p>

          <p className={`mt-4 text-base md:text-lg lg:text-xl text-white opacity-80`}>
            Disponible en <span className="font-black">WhatsApp Business API</span> y adaptable a tus necesidades de negocio.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 mt-8 md:mt-12`}>
            <button className="w-full sm:w-auto px-6 py-3 md:px-7 md:py-3 bg-white rounded-full text-base md:text-lg font-semibold">
              <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Solicitar Demo Gratuita del Bot WhatsApp</a>
            </button>
            <button className="w-full sm:w-auto px-6 py-3 md:px-7 md:py-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base md:text-lg font-medium">
              <a href="https://wa.me/541158961046?text=Hola%2C%20quiero%20probar%20el%20chatbot%20para%20WhatsApp" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Prueba Nuestro Chatbot para WhatsApp</a>
            </button>
          </div>
        </div>

        {/* Usar Image de Next.js para la imagen principal */}
        <Image
            className={`w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl left-1/2 transform -translate-x-1/2 mx-auto absolute rounded-[40px] shadow-2xl -bottom-32 sm:-bottom-40 md:-bottom-60 lg:-bottom-72`}
            src="/images/centralize.png" // **¡IMPORTANTE: Asegúrate de que esta imagen exista y sea relevante!**
            alt="Captura de pantalla de la interfaz de la plataforma Centralize con un chatbot de IA conversando en WhatsApp"
            width={1200} // Ancho original de la imagen
            height={800} // Alto original de la imagen
            priority // Carga prioritaria
        />
      </div>

      {/* Clients Section */}
      <div className={`py-16 md:py-24 mt-32 sm:mt-40 md:mt-60 lg:mt-72 bg-black`}>
        <h2 className="text-center text-white text-xl sm:text-2xl font-medium mb-10 md:mb-12 " >
          Empresas que ya venden más con nuestro <span className="font-bold">bot para WhatsApp</span>:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-4">
          {/* Usar Image de Next.js para logos de clientes */}
          <Image className="w-24 h-auto sm:w-28 md:w-32 lg:w-36" src="/clients/x.png" alt="Logo de Grupo Vento, cliente de chatbot WhatsApp de Centralize" width={144} height={144} />
          <Image className="h-12 sm:h-14 md:h-16 lg:h-20" src="/clients/athome.png" alt="Logo de Athome Inmobiliaria, usuario del bot de WhatsApp de Centralize" width={80} height={80} />
          <Image className="w-24 h-auto sm:w-28 md:w-32 lg:w-36" src="/clients/own.png" alt="Logo de Own Inmobiliaria, que usa el chatbot de WhatsApp de Centralize" width={144} height={144} />
          <Image className="w-24 h-auto sm:w-28 md:w-32 lg:w-36" src="/clients/tibesa.png" alt="Logo de Tibesa Inmobiliaria, optimizando ventas con el chatbot de Centralize" width={144} height={144} />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className={`w-full bg-gray-950 py-16 md:py-24 px-4`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
            Beneficios Clave de tu <span className="text-blue-600">WhatsApp Bot</span> con IA.
          </h2>
          <p className="text-base md:text-lg text-white opacity-80 mb-10 md:mb-12">
            Configura tu <span className="font-bold">chatbot WhatsApp</span> en minutos y empieza a ver resultados en la automatización de tus ventas.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-10 md:space-y-12">
              <div className={`flex gap-4 sm:gap-6  `}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">1</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Atención Inmediata 24/7</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    Tu <span className="font-bold">bot WhatsApp</span> responde al instante, a cualquier hora y día, mejorando la satisfacción del cliente y la conversión de leads.
                  </p>
                </div>
              </div>
              <div className={`flex gap-4 sm:gap-6  `}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">2</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Calificación de Leads Avanzada</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    El <span className="font-bold">chatbot WhatsApp</span> filtra y califica prospectos de forma inteligente, enviando solo los contactos más interesados a tu equipo de ventas para un cierre más rápido.
                  </p>
                </div>
              </div>
              <div className={`flex gap-4 sm:gap-6  `}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">3</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Aumento Sostenido de Ventas</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    Automatiza seguimientos, recordatorios y procesos de venta completos directamente en WhatsApp, impulsando tus conversiones y la eficiencia comercial.
                  </p>
                </div>
              </div>
            </div>
            <div className={`hidden md:block `}>
              {/* Usar Image de Next.js y un alt mejorado */}
              <Image 
                className="w-full rounded-[40px]" // Ajustado a w-full para mejor flexibilidad con el padre
                src="/images/messi.png" // **¡REEMPLAZA ESTA IMAGEN!** Debe ser una ilustración relevante del chatbot o IA.
                alt="Ilustración conceptual de un robot o asistente digital con inteligencia artificial, simbolizando el chatbot de WhatsApp de Centralize"
                width={800} // Ancho original de la imagen (ejemplo)
                height={600} // Alto original de la imagen (ejemplo)
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className={`py-16 md:py-24 px-4 `}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 md:mb-16">Planes Flexibles para tu <span className="text-blue-600">Chatbot WhatsApp</span></h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className={`bg-gradient-to-br from-black to-neutral-500 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col `}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">Plan WhatsApp Bot Esencial</h3>
              <div className="space-y-6 md:space-y-8 flex-grow">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg text-white">Conexión a 1 número de WhatsApp</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg text-white">Flujos de conversación básicos y personalizados</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg text-white">Soporte técnico estándar</span>
                </div>
              </div>
              <div className="mt-12 md:mt-16">
                <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base sm:text-lg md:text-xl font-medium">
                  <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Empezar con WhatsApp Bot Esencial</a>
                </button>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-black to-neutral-500 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col `}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">Plan WhatsApp Bot PRO con IA</h3>
              <div className="space-y-6 md:space-y-8 flex-grow">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg text-white">Todo del plan Esencial más:</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg text-white">Inteligencia Artificial Avanzada para conversaciones dinámicas</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg text-white">Integración nativa con CRM (ej. Salesforce, HubSpot, Tokko)</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg text-white">Métricas y reportes detallados para optimización de ventas</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg text-white">Soporte prioritario y consultoría estratégica</span>
                </div>
              </div>
              <div className="mt-12 md:mt-16">
                <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base sm:text-lg md:text-xl font-medium">
                  <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Obtener WhatsApp Bot PRO con IA</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`bg-gray-950 py-16 md:py-24 px-4 `}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-10 md:mb-12">
            Listo para potenciar tus ventas con un <span className="text-blue-500">chatbot WhatsApp</span>?
          </h2>
          <button className="px-7 py-3 sm:px-8 sm:py-4 bg-white rounded-full text-base sm:text-lg md:text-xl font-bold mb-12 md:mb-16">
            <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Agenda una Consultoría Gratuita de Chatbot IA</a>
          </button>
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9.5rem] font-medium text-white leading-none">Centralize<b className="text-gray-700">.dev</b></p>
        </div>
      </footer>
    </div>
  );
}