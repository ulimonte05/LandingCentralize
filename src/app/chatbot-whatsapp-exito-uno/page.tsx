import Link from 'next/link';
import Image from 'next/image'; // Importar el componente Image
import Script from 'next/script'; // Importar Script para el JSON-LD

export const metadata = {
  title: 'Caso de Éxito: Grupo Vento Vende Proyectos Enteros con IA, Tokko CRM y Adinco Net | Centralize', // Leve ajuste para sonar más natural
  description: 'Descubre cómo Grupo Vento transformó sus ventas inmobiliarias, vendiendo proyectos completos mediante la IA de Centralize integrada con Tokko CRM y el soporte de Adinco Net. ¡Resultados reales!',
  keywords: [
    'caso de éxito inmobiliario',
    'grupo vento',
    'ia para inmobiliarias',
    'tokko crm',
    'adinco net',
    'ventas proyectos inmobiliarios',
    'chatbot whatsapp inmobiliario',
    'crm inmobiliario con ia',
    'automatización marketing inmobiliario',
    'publicidad ia inmobiliaria',
    'tokko broker ingresar',
    'tokko ingreso',
    'métricas ia ventas',
    'soluciones ia para inmobiliarias', // Añadir un poco más de amplitud
    'ventas de propiedades con ia',
    'digitalización inmobiliaria',
    'centralize casos de exito' // Especificar el tipo de contenido y la marca
  ],
  // Opcional: Open Graph y Twitter Cards para mejorar la visibilidad en redes sociales
  openGraph: {
    title: 'Caso de Éxito: Grupo Vento Vende Proyectos Enteros con IA, Tokko CRM y Adinco Net | Centralize',
    description: 'Descubre cómo Grupo Vento transformó sus ventas inmobiliarias, vendiendo proyectos completos mediante la IA de Centralize integrada con Tokko CRM y el soporte de Adinco Net. ¡Resultados reales!',
    url: 'https://www.centralize.dev/casos-de-exito/grupo-vento', // **¡IMPORTANTE: Reemplazar con la URL canónica real de esta página!**
    siteName: 'Centralize',
    images: [
      {
        url: 'https://www.centralize.dev/clients/x.png', // **URL pública de la imagen principal del hero**
        width: 1200,
        height: 630,
        alt: 'Grupo Vento vendiendo proyectos inmobiliarios completos con Centralize IA y Tokko CRM',
      },
    ],
    locale: 'es_ES',
    type: 'article', // Tipo adecuado para un caso de éxito
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caso de Éxito: Grupo Vento Vende Proyectos Enteros con IA, Tokko CRM y Adinco Net | Centralize',
    description: 'Descubre cómo Grupo Vento transformó sus ventas inmobiliarias, vendiendo proyectos completos mediante la IA de Centralize integrada con Tokko CRM y el soporte de Adinco Net. ¡Resultados reales!',
    creator: '@CentralizeDev', // Si tienen un handle de Twitter
    images: ['https://www.centralize.dev/clients/x.png'], // Misma imagen que Open Graph
  },
  alternates: { // Añadir canonical URL
    canonical: 'https://www.centralize.dev/casos-de-exito/grupo-vento', // **URL canónica de esta página**
  },
};

export default function CasoExitoGrupoVentoPage() {

  // JSON-LD Schema Markup para un Artículo/Caso de Éxito
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article", // O "WebPage" si es muy general, pero "Article" es bueno para casos de éxito
    "headline": "Caso de Éxito: Grupo Vento Vende Proyectos Enteros con IA, Tokko CRM y Adinco Net",
    "description": "Descubre cómo Grupo Vento transformó sus ventas inmobiliarias, vendiendo proyectos completos mediante la IA de Centralize integrada con Tokko CRM y el soporte de Adinco Net. ¡Resultados reales!",
    "image": [
      "https://www.centralize.dev/images/x.png", // Imagen principal del artículo
      "https://www.centralize.dev/images/centralize.png" // Diagrama de sinergia
    ],
    "datePublished": "2025-05-29T09:00:00+00:00", // **¡IMPORTANTE: Cambiar a la fecha de publicación real!**
    "dateModified": "2025-05-29T09:00:00+00:00", // **¡IMPORTANTE: Cambiar a la fecha de última modificación real!**
    "author": {
      "@type": "Organization",
      "name": "Centralize",
      "url": "https://www.centralize.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Centralize",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.centralize.dev/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.centralize.dev/chatbot-whatsapp-exito-uno" // **URL canónica de esta página**
    },
    // Añadir entidades mencionadas para mayor contexto y SEO semántico
    "mentions": [
      { "@type": "Organization", "name": "Grupo Vento", "url": "https://www.grupovento.cl/" }, // Si tienen una URL
      { "@type": "SoftwareApplication", "name": "Tokko Broker", "url": "https://www.tokkobroker.com/" }, // Si tienen una URL
      { "@type": "SoftwareApplication", "name": "Adinco Net", "url": "https://www.adinco.net/" } // Si tienen una URL
    ]
  };

  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden">
      {/* JSON-LD Script para el Schema Markup */}
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section Adaptado para Caso de Éxito */}
      <div className="w-full bg-gray-950 relative pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
        <nav className={`flex items-center justify-between py-8 mb-8 md:mb-12 transition-all duration-1000 ease-out `}>
          <Link href="/" legacyBehavior>
            <a>
              {/* Usar componente Image de Next.js para el logo */}
              <Image 
                className="w-16 h-16 md:w-24 md:h-24 cursor-pointer" 
                src="/images/logo.png" 
                alt="Logo de Centralize - Soluciones de Inteligencia Artificial para el sector Inmobiliario" 
                width={96} // Ancho en píxeles para md:w-24
                height={96} // Alto en píxeles para md:h-24
                priority // Carga prioritaria para LCP
              />
            </a>
          </Link>
          <button className="px-7 py-3 bg-white rounded-full text-lg font-semibold">
            <a href="https://platform.centralize.dev/dashboard" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Acceder a Plataforma Centralize</a>
          </button>
        </nav>
        <div className={`max-w-5xl mx-auto text-center flex flex-col items-center transition-all duration-1000 ease-out `}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            <span className="block">ÉXITO TOTAL: Grupo Vento Vende Proyectos Inmobiliarios Completos con</span> <span className="bg-gradient-to-r from-blue-500 to-gray-400 text-transparent bg-clip-text">IA Avanzada, Tokko CRM y el Soporte de Adinco Net</span>
          </h1>
          <p className={`mt-6 text-base md:text-lg lg:text-xl text-white opacity-90 transition-all duration-1000 ease-out `}>
            Descubre cómo el gigante inmobiliario <span className="font-bold text-blue-400">Grupo Vento</span> revolucionó su estrategia de ventas, logrando la comercialización total de complejos residenciales gracias a la sinergia entre la <span className="font-bold">Inteligencia Artificial de Centralize</span>, la robustez de <span className="font-bold">Tokko CRM</span> y la infraestructura de <span className="font-bold">Adinco Net</span>.
          </p>
          {/* ¡NUEVA IMAGEN EN HERO! Es crucial para un caso de éxito */}
          <div className="mt-10 md:mt-16 relative">
            <Image
              src="/clients/x.png" // **¡Asegúrate de tener esta imagen visualmente impactante!**
              alt="Representación visual de la exitosa colaboración entre Centralize IA, Tokko CRM y Adinco Net para Grupo Vento en el sector inmobiliario"
              width={400} // Ancho adecuado para el max-w-5xl
              height={563} // Alto adecuado (ej. 16:9 ratio)
              priority // Carga prioritaria para LCP
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Contenido del Caso de Éxito */}
      <article className={`py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50 transition-all duration-1000 ease-out `}>
        <div className="max-w-4xl mx-auto prose lg:prose-xl prose-slate">
          
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">El Gigante Inmobiliario <span className="text-blue-600">Grupo Vento</span> y su Desafío Monumental</h2>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Grupo Vento</span>, un nombre consolidado en el desarrollo de proyectos inmobiliarios de gran envergadura, se enfrentaba al colosal reto de comercializar desarrollos completos de cientos de unidades. La gestión tradicional de leads, la atención al cliente y el seguimiento a través de su <span className="font-semibold text-blue-600">CRM Inmobiliario Tokko</span>, aunque eficientes, necesitaban un impulso tecnológico para escalar al ritmo de sus ambiciones. Los principales obstáculos para este gigante del sector inmobiliario incluían:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4 pl-4">
              <li>Generación masiva y constante de leads cualificados para diversos perfiles de compradores y tipos de unidades, optimizando la publicidad IA inmobiliaria.</li>
              <li>Capacidad de respuesta inmediata y personalizada 24/7 a través de múltiples canales, especialmente <span className="font-semibold">WhatsApp</span>, mediante un <Link href="/chatbot-whatsapp" className="text-blue-600 hover:underline" >chatbot WhatsApp inmobiliario</Link>.</li>
              <li>Calificación precisa y ágil de prospectos para optimizar el tiempo del equipo de ventas y la <span className="font-semibold">automatización de marketing inmobiliario</span>.</li>
              <li>Coordinación eficiente del agendamiento de visitas a showrooms y propiedades modelo, sincronizado con <span className="font-semibold text-blue-600">Tokko CRM</span>.</li>
              <li>Optimización de la inversión en <span className="font-semibold">publicidad inmobiliaria</span> para maximizar el ROI.</li>
              <li>Asegurar una infraestructura tecnológica robusta, donde <span className="font-semibold text-blue-600">Adinco Net</span> juega un papel clave, para soportar operaciones de IA a gran escala.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">La Solución Integral Centralize: IA, <span className="text-blue-600">Tokko CRM</span> y <span className="text-blue-600">Adinco Net</span> en Sinergia</h2>
            <p className="text-lg text-gray-700">
              Grupo Vento eligió <Link href="/" className="text-blue-600 hover:underline" >Centralize</Link> para orquestar una transformación digital completa. La solución de <Link href="/" className="text-blue-600 hover:underline" >IA para inmobiliarias</Link> se centró en tres pilares fundamentales:
            </p>
            {/* ¡NUEVA IMAGEN! Ilustración de la sinergia */}
            <div className="my-8 text-center">
              <Image
                src="/images/centralize.png" // **¡Imagen de diagrama o infografía aquí!**
                alt="Diagrama mostrando la sinergia entre la Inteligencia Artificial de Centralize, Tokko CRM y Adinco Net en un proceso de ventas inmobiliarias"
                width={800}
                height={450}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">1. Plataforma Centralize con Inteligencia Artificial Avanzada para Inmobiliarias</h3>
                <p className="text-gray-600">Se implementó un ecosistema de <span className="font-semibold">IA para inmobiliarias</span> diseñado para:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2 pl-4">
                  <li><span className="font-semibold text-blue-600">Chatbot WhatsApp Inmobiliario Inteligente:</span> Capaz de atender miles de consultas simultáneas, responder FAQs complejas sobre los proyectos, pre-calificar leads según criterios definidos por Grupo Vento, y derivar prospectos calientes al equipo comercial. <Link href="/chatbot-whatsapp" className="text-blue-600 hover:underline" >Más sobre nuestro chatbot de WhatsApp.</Link></li>
                  <li><span className="font-semibold">Motor de IA para Publicidad Inmobiliaria:</span> Optimización dinámica de campañas en Google Ads y Meta, ajustando presupuestos y segmentaciones en tiempo real para atraer leads de alta calidad a un costo óptimo. <Link href="/chatbot-whatsapp" className="text-blue-600 hover:underline" >Descubre cómo la IA revoluciona la publicidad.</Link></li>
                  <li><span className="font-semibold">Sistema de Agendamiento IA:</span> Integrado al <span className="font-semibold text-blue-600">chatbot WhatsApp</span> y a los calendarios del equipo de ventas, permitiendo a los prospectos agendar visitas automáticamente, mejorando la eficiencia.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">2. Integración Profunda con <span className="text-blue-600">Tokko CRM</span></h3>
                <p className="text-gray-600">La clave fue una integración bidireccional sin fisuras con <span className="font-semibold text-blue-600">Tokko CRM</span>, el corazón de las operaciones de Grupo Vento. Esta robusta integración de Centralize con Tokko CRM permitió:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2 pl-4">
                  <li>Creación y actualización automática de prospectos y clientes en <span className="font-semibold text-blue-600">Tokko</span> (accesible vía `tokko broker ingresar` o `tokko ingreso` por el equipo).</li>
                  <li>Registro de todas las interacciones del <span className="font-semibold text-blue-600">chatbot WhatsApp</span> y la IA en la ficha del cliente en <span className="font-semibold text-blue-600">Tokko</span>, creando un <span className="font-semibold">CRM inmobiliario con IA</span>.</li>
                  <li>Automatización de tareas de seguimiento basadas en el estado del lead en <span className="font-semibold text-blue-600">Tokko CRM</span>.</li>
                  <li>Generación de <span className="font-semibold">métricas con IA</span> sobre el rendimiento del embudo de ventas directamente desde los datos consolidados para optimizar la toma de decisiones.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">3. Infraestructura Confiable y Escalable con <span className="text-blue-600">Adinco Net</span></h3>
                <p className="text-gray-600">Para asegurar la máxima disponibilidad y rendimiento de las soluciones de IA, la infraestructura proporcionada o gestionada a través de <span className="font-semibold text-blue-600">Adinco Net</span> garantizó la conectividad, seguridad y capacidad de procesamiento necesarias para manejar el alto volumen de datos e interacciones generadas por las campañas y el <span className="font-semibold text-blue-600">chatbot inmobiliario</span> de Grupo Vento, asegurando la escalabilidad de nuestras <Link href="/" className="text-blue-600 hover:underline" >soluciones de IA</Link>.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Resultados Concretos: Proyectos Vendidos y ROI Disparado para <span className="text-blue-600">Grupo Vento</span></h2>
            {/* ¡NUEVA IMAGEN! Gráfico de resultados o KPI destacados */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">"Torres del Sol": 100% Vendido en 8 Meses</h4>
                <p className="text-gray-600">Un proyecto de 250 unidades de lujo, comercializado en tiempo récord gracias a la segmentación precisa de la <span className="font-semibold">publicidad IA</span> y la eficiencia del <span className="font-semibold text-blue-600">chatbot WhatsApp</span> de Centralize.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">"Villas del Parque": Lista de Espera</h4>
                <p className="text-gray-600">Para su más reciente lanzamiento de 150 casas, la <span className="font-semibold">IA de Centralize</span> generó tal demanda que se alcanzó el cupo de preventa en semanas, creando una lista de espera gestionada por el <span className="font-semibold text-blue-600">chatbot</span> y <span className="font-semibold text-blue-600">Tokko CRM</span>, lo que demuestra la potencia de nuestra <Link href="/" className="text-blue-600 hover:underline" >automatización de ventas</Link>.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-4">Otros resultados clave incluyen:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4 pl-4">
              <li><strong className="text-green-600">Incremento del 300%</strong> en leads cualificados generados mensualmente, optimizando el embudo de ventas.</li>
              <li><strong className="text-green-600">Reducción del 40%</strong> en el Costo por Lead (CPL) gracias a la optimización de <span className="font-semibold">publicidad IA</span> y la gestión inteligente de campañas.</li>
              <li><strong className="text-green-600">Aumento del 75%</strong> en la tasa de agendamiento de visitas efectivas, directamente coordinado por el chatbot.</li>
              <li>Tiempo promedio de primera respuesta reducido a <strong className="text-green-600">menos de 1 minuto</strong>, 24/7, garantizando atención constante.</li>
              <li>Visibilidad total del pipeline de ventas y <span className="font-semibold">métricas con IA</span> en tiempo real, facilitando la toma de decisiones estratégicas para <span className="font-semibold text-blue-600">Grupo Vento</span> y la optimización de sus <span className="font-semibold">ventas de propiedades</span>.</li>
            </ul>
          </section>

          <section className="my-12 p-8 bg-blue-600 text-white rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-4 text-center">Testimonio de <span className="text-blue-200">Grupo Vento</span> sobre Centralize</h3>
            <blockquote className="text-xl italic text-center">
              <p>"Centralize no solo nos proporcionó herramientas de IA; nos dio una nueva forma de vender. La integración con nuestro <span className="font-semibold text-blue-200">Tokko CRM</span> y el soporte de <span className="font-semibold text-blue-200">Adinco Net</span> fueron cruciales. Ver proyectos enteros venderse tan eficientemente ha superado todas nuestras expectativas. Ahora, la <span className="font-semibold">IA para inmobiliarias</span> es parte fundamental de nuestra estrategia de crecimiento."</p>
              <footer className="mt-4 text-lg not-italic">- CEO, Grupo Vento</footer>
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Las Claves del Triunfo de <span className="text-blue-600">Grupo Vento</span> con Centralize en el Sector Inmobiliario</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4 pl-4 text-lg">
              <li>Una <span className="font-semibold">visión estratégica</span> clara por parte de Grupo Vento y su disposición a adoptar tecnologías disruptivas en el <span className="font-semibold">mercado inmobiliario</span>.</li>
              <li>El poder de la <span className="font-semibold text-blue-600">Inteligencia Artificial de Centralize</span> para automatizar, personalizar y optimizar a una escala sin precedentes en el sector <span className="font-semibold">inmobiliario</span>.</li>
              <li>La centralización de datos y la gestión eficiente de relaciones con clientes a través de una integración robusta con <span className="font-semibold text-blue-600">Tokko CRM</span>, potenciando el <span className="font-semibold">CRM inmobiliario con IA</span>.</li>
              <li>Una <span className="font-semibold">infraestructura tecnológica confiable y escalable</span>, donde la colaboración con <span className="font-semibold text-blue-600">Adinco Net</span> fue fundamental para el rendimiento de las <span className="font-semibold">soluciones de IA</span>.</li>
              <li>Un enfoque en <span className="font-semibold">métricas con IA</span> para la mejora continua y la toma de decisiones basada en datos, crucial para <span className="font-semibold">ventas de proyectos inmobiliarios</span>.</li>
            </ul>
          </section>

          <section className="text-center py-10 bg-gray-100 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Transforma tus Ventas Inmobiliarias como <span className="text-blue-600">Grupo Vento</span> con Centralize</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              ¿Estás listo para llevar tus ventas de proyectos inmobiliarios al siguiente nivel? Descubre cómo la <Link href="/chatbot-whatsapp" className="text-blue-600 hover:underline" >IA de Centralize</Link>, integrada con tu CRM (como <span className="font-semibold text-blue-600">Tokko</span>) y apoyada por una infraestructura sólida, puede ayudarte a alcanzar resultados extraordinarios en la <span className="font-semibold">comercialización de propiedades</span>.
            </p>
            <a 
              href="https://cal.com/umontenegro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="no-underline inline-block px-10 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Agenda una Consultoría Estratégica GRATUITA de IA Inmobiliaria
            </a>
          </section>
        </div>
      </article>

      {/* Footer consistente con la página principal */}
      <footer className={`bg-gray-950 py-16 md:py-24 px-4 transition-all duration-1000 ease-out `}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-10 md:mb-12">
            ¿Listo para replicar el éxito de <span className="text-blue-500">Grupo Vento</span> con <span className="text-blue-500">IA Inmobiliaria</span> y <span className="text-blue-500">Tokko CRM</span>?
          </h2>
          <button className="px-7 py-3 sm:px-8 sm:py-4 bg-white rounded-full text-base sm:text-lg md:text-xl font-bold mb-12 md:mb-16">
            <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Habla con un Experto de Centralize Hoy</a>
          </button>
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9.5rem] font-medium text-white leading-none">Centralize<b className="text-gray-700">.dev</b></p>
        </div>
      </footer>
    </div>
  );
}