'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head'; // Importar Head para manejar el <head>
import Image from 'next/image'; // Importar Image para optimización de imágenes
import Script from 'next/script'; // Importar Script para el JSON-LD
import Link from 'next/link';

export default function LandingPagePrincipal() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Pequeño retraso para asegurar que los estilos iniciales se apliquen antes de la transición
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // JSON-LD Schema Markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Centralize",
    "url": "https://www.centralize.dev", // **¡IMPORTANTE: URL de tu sitio!**
    "logo": "https://www.centralize.dev/images/logo.png", // **URL absoluta de tu logo**
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+541158961046", // Tu número de contacto principal
      "contactType": "Sales",
      "areaServed": ["AR", "CL", "MX", "CO", "ES", "UY", "PE", "EC", "PA", "CR"], // Países donde ofreces servicio
      "availableLanguage": ["es", "en"]
    },
    "sameAs": [
      "https://www.facebook.com/CentralizeDev", // Reemplaza con tus redes sociales
      "https://www.linkedin.com/company/centralize-dev",
      "https://www.instagram.com/centralize.dev/"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Agentes de IA Humanizados para Ventas y CRM - Centralize",
    "description": "Centralize ofrece agentes de inteligencia artificial humanizados que automatizan ventas, asesoramiento, seguimientos y gestión de CRM, disponibles en WhatsApp, Instagram, Facebook y Telegram para escalar tus operaciones.",
    "brand": {
      "@type": "Brand",
      "name": "Centralize"
    },
    "url": "https://www.centralize.dev/", // **¡IMPORTANTE: URL canónica de esta landing page!**
    "image": "https://www.centralize.dev/images/centralize-platform-overview.png", // **URL de una imagen representativa del producto/plataforma**
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Consultar", // O un precio inicial si tienes uno
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "url": "https://cal.com/umontenegro" // URL para agendar demo/venta
    }
    // Si tienes reseñas o ratings, podrías añadir:
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.9",
    //   "reviewCount": "50"
    // }
  };

  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden">
      {/* next/head para SEO en el cliente (como alternativa a metadata) */}
      <Head>
        <title>Centralize: Agentes de IA Humanizados para Ventas, CRM y Automatización Total</title>
        <meta name="description" content="Potencia tus ventas y asesora a tus clientes con agentes de IA humanizados de Centralize. Automatiza conversaciones en WhatsApp, Instagram, Facebook, Telegram y lleva tu CRM al siguiente nivel. ¡Escala tu negocio!" />
        <meta name="keywords" content="agentes de ia, ia humanizada, chatbot ia, ia para ventas, crm con ia, automatización de ventas, chatbot whatsapp, ia para instagram, ia para facebook, ia para telegram, métricas ia, centralize, inteligencia artificial para negocios, lead qualification ia" />
        <link rel="canonical" href="https://www.centralize.dev/" /> {/* **¡IMPORTANTE: URL canónica de esta página!** */}

        {/* Open Graph Tags */}
        <meta property="og:title" content="Centralize: Agentes de IA Humanizados para Ventas, CRM y Automatización Total" />
        <meta property="og:description" content="Potencia tus ventas y asesora a tus clientes con agentes de IA humanizados de Centralize. Automatiza conversaciones en WhatsApp, Instagram, Facebook, Telegram y lleva tu CRM al siguiente nivel. ¡Escala tu negocio!" />
        <meta property="og:url" content="https://www.centralize.dev/" /> {/* **¡IMPORTANTE: URL de tu sitio!** */}
        <meta property="og:site_name" content="Centralize" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.centralize.dev/images/centralize-platform-overview.png" /> {/* **URL de imagen principal** */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CentralizeDev" /> {/* Si tienes un handle de Twitter */}
        <meta name="twitter:title" content="Centralize: Agentes de IA Humanizados para Ventas, CRM y Automatización Total" />
        <meta name="twitter:description" content="Potencia tus ventas y asesora a tus clientes con agentes de IA humanizados de Centralize. Automatiza conversaciones en WhatsApp, Instagram, Facebook, Telegram y lleva tu CRM al siguiente nivel. ¡Escala tu negocio!" />
        <meta name="twitter:image" content="https://www.centralize.dev/images/centralize-platform-overview.png" /> {/* Misma imagen que Open Graph */}
      </Head>

      {/* JSON-LD Scripts para datos estructurados */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <div className="w-full min-h-screen bg-gray-950 relative pb-32 sm:pb-40 md:pb-48 lg:pb-60 xl:pb-72 px-4 md:px-8 lg:px-16">
        <nav className={`flex items-center justify-between py-8 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          <Link href="/" legacyBehavior>
              <Image className="w-16 h-16 md:w-24 md:h-24" src="/images/logo.png" alt="Logo de Centralize - Soluciones de Agentes de IA humanizados" width={96} height={96} priority />
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#solutions" className="hover:opacity-80">Nuestras Soluciones IA</a> {/* Actualizado a "solutions" */}
            <a href="#pricing" className="hover:opacity-80">Precios y Planes</a> {/* Actualizado a "Precios y Planes" */}
            <a href="#blog" className="hover:opacity-80">Nuestros Blogs</a> {/* Nuevo enlace a la sección de blogs */}
          </div>

          <button className="px-7 py-3 bg-white rounded-full text-lg font-semibold">
            <a href="https://platform.centralize.dev/dashboard" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Ingresar a la Plataforma</a> {/* CTA más descriptiva */}
          </button>
        </nav>

        <div className={`max-w-6xl mx-auto text-center mt-12 md:mt-16 lg:mt-24 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: isMounted ? '150ms' : '0ms' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-gray-400 text-transparent bg-clip-text">Agentes de IA Humanizados</span>
            <span className="text-white"> para Vender, Asesorar y Potenciar tu</span>
            <span className="bg-gradient-to-r from-blue-500 to-gray-400 text-transparent bg-clip-text"> CRM</span>
            <span className="text-white">.</span>
          </h1>

          <p className={`mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-white opacity-80 max-w-xl md:max-w-2xl mx-auto transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: isMounted ? '300ms' : '0ms' }}>
            <span>Implementa <span className="font-extrabold">agentes de IA</span> casi humanos, automatiza seguimientos y campañas masivas, genera <span className="font-extrabold">métricas personalizadas</span> y optimiza tu <span className="font-extrabold">CRM</span> para un crecimiento exponencial.</span>
          </p>

          <p className={`mt-4 text-base md:text-lg lg:text-xl text-white opacity-80 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: isMounted ? '450ms' : '0ms' }}>
            Disponibles 24/7 en <span className="font-black">WhatsApp</span>, Instagram, Facebook, Telegram y más, para atender a tus clientes en cualquier canal.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 mt-8 md:mt-12 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: isMounted ? '600ms' : '0ms' }}>
            <button className="w-full sm:w-auto px-6 py-3 md:px-7 md:py-3 bg-white rounded-full text-base md:text-lg font-semibold">
              <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Agendar Demo Gratuita de Centralize</a> {/* CTA más descriptiva */}
            </button>
            <button className="w-full sm:w-auto px-6 py-3 md:px-7 md:py-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base md:text-lg font-medium">
              <a href="https://wa.me/541158961046?text=Hola%2C%20quiero%20conocer%20mas%20sobre%20los%20agentes%20de%20IA%20de%20Centralize." target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Habla con Juancito IA en WhatsApp</a> {/* CTA más descriptiva y con un texto predefinido */}
            </button>
          </div>
        </div>

        <Image 
            className={`w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl left-1/2 transform -translate-x-1/2 mx-auto absolute rounded-[40px] shadow-2xl -bottom-32 sm:-bottom-40 md:-bottom-60 lg:-bottom-72 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: isMounted ? '350ms' : '0ms' }}
            src="/images/centralize.png" // **¡IMAGEN PRINCIPAL RELEVANTE!**
            alt="Interfaz de la plataforma Centralize mostrando agentes de IA gestionando conversaciones y CRM"
            width={1200} // Ancho en píxeles de la imagen original
            height={675} // Alto en píxeles de la imagen original (ej. 16:9 ratio)
            priority // Carga prioritaria para LCP
        />
      </div>

      {/* Clients Section */}
      <div className={`py-16 md:py-24 mt-32 sm:mt-40 md:mt-60 lg:mt-72  transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '200ms' : '0ms' }}>
        <h2 className="text-center text-white text-xl sm:text-2xl font-medium mb-10 md:mb-12" >
          Confían en nuestra tecnología de <span className="font-bold">IA para ventas</span>:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-4">
          <Image className="w-24 h-auto sm:w-28 md:w-32 lg:w-36" src="/images/google.png" alt="Logo de Google, socio estratégico de Centralize en IA" width={144} height={144} />
          <Image className=" " src="/images/microsoft.png" alt="Logo de Microsoft, tecnología base para Centralize" width={144} height={60} />
          <Image className="w-24 h-auto sm:w-28 md:w-32 lg:w-36" src="/images/whatsapp.png" alt="Logo de WhatsApp, plataforma integrada con Centralize IA" width={144} height={144} />
          <Image className="w-24 h-auto sm:w-28 md:w-32 lg:w-36" src="/images/meta.png" alt="Logo de Meta (Facebook, Instagram), con quien Centralize se integra" width={144} height={144} />
        </div>
      </div>

      {/* Features/Solutions Section */}
      <div id="solutions" className={`w-full bg-gray-950 py-16 md:py-24 px-4 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '300ms' : '0ms' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
            Transforma tu Negocio: <br/>
            Agentes de <span className="text-blue-600">IA Centralize</span> en Cada Proceso.
          </h2>

          <p className="text-base md:text-lg text-white opacity-80 mb-10 md:mb-12">
            Configura tu <span className="font-bold">agente de IA humanizado</span> en minutos y prepárate para escalar tus operaciones de ventas y atención al cliente.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-10 md:space-y-12">
              <div className={`flex gap-4 sm:gap-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isMounted ? '400ms' : '0ms' }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">1</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Implementación Rápida y Sencilla</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    Crea tu cuenta, configura tu agente de IA personalizado y conecta tus canales favoritos (WhatsApp, Instagram, etc.). ¡Listo en 1 minuto!
                  </p>
                </div>
              </div>

              <div className={`flex gap-4 sm:gap-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isMounted ? '550ms' : '0ms' }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Activación de Módulos de IA Avanzada</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    Activa funcionalidades de IA como generación de métricas, automatización de seguimientos, gestión de <span className="font-semibold">CRM con IA</span> y calificación de leads. Empieza a ver resultados en 1 minuto.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80 mt-2">
                    <Link href="/chatbot-whatsapp-exito-uno" className="text-blue-400 hover:underline">Descubre más sobre IA para Ventas.</Link>
                  </p>
                </div>
              </div>

              <div className={`flex gap-4 sm:gap-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isMounted ? '700ms' : '0ms' }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-800">3</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Escala tu Negocio Automáticamente</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80">
                    Dirige tráfico a tus canales y observa cómo tu agente de IA maneja las interacciones, califica prospectos y potencia tus ventas. Tu negocio listo para escalar en 1 minuto.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80 mt-2">
                    <Link href="/chatbot-whatsapp-exito-uno" className="text-blue-400 hover:underline">Ver soluciones de automatización de marketing.</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className={`hidden md:block transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
              <Image 
                className="w-full rounded-[40px] shadow-lg" 
                src="/images/messi.png" // **¡IMAGEN RELEVANTE DEL FLUJO DE TRABAJO!**
                alt="Flujo de trabajo de Centralize mostrando la creación de cuenta, activación de productos y escala de operaciones con IA"
                width={800} // Ancho en píxeles de la imagen original
                height={600} // Alto en píxeles de la imagen original
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className={`py-16 md:py-24 px-4 bg-white transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '400ms' : '0ms' }}>
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 md:mb-16 text-gray-900">
                Planes de <span className="text-blue-600">Agentes de IA Centralize</span> para tu Negocio
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className={`bg-gradient-to-br from-black to-neutral-500 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">Plan Autonomo: Tu Agente de IA para escalar</h3>
                <div className="space-y-6 md:space-y-8 flex-grow">
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Sin límite de equipo</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Métricas de rendimiento a medida con IA.</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Seguimientos Autonomos de leads con IA.</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Conexión directa a Instagram, Facebook y WhatsApp.</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Soporte técnico 24/7.</span>
                </div>
                </div>
                <div className="mt-12 md:mt-16">
                <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base sm:text-lg md:text-xl font-medium">
                    <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Hablemos para tu Plan Autónomo</a> {/* CTA más descriptiva */}
                </button>
                </div>
            </div>

            <div className={`bg-gradient-to-br from-black to-neutral-500 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '650ms' : '0ms' }}>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">Servicio Completo: Solución IA Enterprise a medida</h3>
                <div className="space-y-6 md:space-y-8 flex-grow">
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Todo el servicio de Autonomo más:</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Redes y números de contacto ilimitados.</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Desarrolladores dedicados para integración y personalización.</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Agente de IA Enterprise con funcionalidades avanzadas.</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Funcionalidades y módulos de IA completamente a medida.</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg text-white">Soporte prioritario 24/7.</span>
                </div>
                </div>
                <div className="mt-12 md:mt-16">
                <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white text-base sm:text-lg md:text-xl font-medium">
                    <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-white">Consultar por Servicio Completo</a> {/* CTA más descriptiva */}
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Blog/Casos de Éxito Section */}
      <div id="blog" className={`py-16 md:py-24 px-4 bg-gray-950 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
          <div className="max-w-6xl mx-auto">
              <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-12 md:mb-16">
                  Descubre Historias de Éxito y Consejos de <span className="text-blue-500">IA para tu Negocio</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* Blog Post 1: Caso de Éxito Grupo Vento */}
                  <Link href="/chatbot-whatsapp-exito-uno" legacyBehavior>
                  <a className="block bg-gradient-to-br from-neutral-800 to-gray-700 rounded-3xl p-8 sm:p-10 md:p-12 text-white hover:shadow-xl hover:scale-105 transform transition-all duration-300">                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Caso de Éxito: Grupo Vento Vende Proyectos Enteros con IA, Tokko CRM y Adinco Net</h3>
                            <p className="text-base sm:text-lg opacity-90 mb-6">
                                Explora cómo Grupo Vento revolucionó sus ventas inmobiliarias y vendió proyectos completos gracias a la IA de Centralize, integrada con Tokko CRM y el soporte de Adinco Net. ¡Resultados reales y sorprendentes!
                            </p>
                            <span className="inline-block px-6 py-2 bg-blue-600 rounded-full text-sm font-semibold">Leer Caso de Éxito</span>
                        </a>

                  </Link>

                  {/* Blog Post 2: Chatbot para WhatsApp */}
                  <Link href="/chatbot-whatsapp" legacyBehavior> 
                      <a className="block bg-gradient-to-br from-neutral-800 to-gray-700 rounded-3xl p-8 sm:p-10 md:p-12 text-white hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Chatbot para WhatsApp con IA: Aumenta tus Ventas Automatizando Conversaciones</h3>
                          <p className="text-base sm:text-lg opacity-90 mb-6">
                              Descubre el poder de un chatbot para WhatsApp con IA para automatizar tus conversaciones 24/7, calificar leads y disparar tus ventas. ¡Implementa tu bot WhatsApp fácilmente con Centralize!
                          </p>
                          <span className="inline-block px-6 py-2 bg-blue-600 rounded-full text-sm font-semibold">Ver Solución IA</span>
                      </a>
                  </Link>
              </div>
              <div className="text-center mt-12">
                  <Link href="#blog" className="inline-block px-8 py-3 bg-white rounded-full text-lg font-semibold text-gray-900 hover:bg-gray-200 transition-colors">
                    Ver todos los Blogs y Casos de Éxito
                  </Link>
              </div>
          </div>
      </div>

      {/* Footer */}
      <footer className={`bg-gray-950 py-16 md:py-24 px-4 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-10 md:mb-12">
            Estamos para ayudar a tu negocio a escalar con <span className="text-blue-500">IA</span>.
          </h2>

          <button className="px-7 py-3 sm:px-8 sm:py-4 bg-white rounded-full text-base sm:text-lg md:text-xl font-bold mb-12 md:mb-16">
            <a href="https://cal.com/umontenegro" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Agendar una Consultoría Gratuita de IA</a>
          </button>

          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9.5rem] font-medium text-white leading-none">Centralize<b className="text-gray-700">.dev</b></p>
        </div>
      </footer>
    </div>
  );
}