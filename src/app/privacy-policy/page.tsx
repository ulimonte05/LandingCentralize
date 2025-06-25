'use client'

import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { useState, useEffect } from "react"

export default function PrivacyPolicyPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <Head>
        <meta property="fb:app_id" content="9374616242616417" />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">

        <nav className={`flex items-center justify-between py-8 px-8 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          <Link href="/" legacyBehavior>
              <Image className="w-16 h-16 md:w-24 md:h-24" src="/images/logo.png" alt="Logo de Centralize - Soluciones de Agentes de IA humanizados" width={96} height={96} priority />
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#solutions" className="hover:opacity-80">Nuestras Soluciones IA</a> {/* Actualizado a "solutions" */}
            <a href="#pricing" className="hover:opacity-80">Precios y Planes</a> {/* Actualizado a "Precios y Planes" */}
            <a href="#blog" className="hover:opacity-80">Nuestros Blogs</a> {/* Nuevo enlace a la sección de blogs */}
          </div>

          <button className="px-7 py-3 bg-white rounded-full text-lg font-semibold">
            <a href="https://accounts.platform.centralize.dev/sign-in?redirect_url=https%3A%2F%2Fdev.platform.centralize.dev%2Fonboarding" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-black">Ingresar a la Plataforma</a> {/* CTA más descriptiva */}
          </button>
        </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Términos y Condiciones */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-white">TÉRMINOS Y CONDICIONES DE USO</h1>
          <p className="text-gray-300 mb-8">
            <strong>Última actualización:</strong> 25 de junio de 2025<br />
            <strong>Nombre de la empresa responsable:</strong> Blackmount Technologies LLC<br />
            <strong>Producto:</strong> Centralize (https://centralize.dev)
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Aceptación de los Términos</h2>
              <p className="text-gray-300">
                Al acceder o utilizar los servicios de Centralize, usted acepta quedar obligado por estos Términos y Condiciones y nuestra Política de Privacidad. Si no está de acuerdo, no debe utilizar nuestra plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Descripción del Servicio</h2>
              <p className="text-gray-300">
                Centralize es una plataforma de mensajería omnicanal con funcionalidades de inteligencia artificial. Permite a empresas integrarse con servicios de comunicación de terceros como WhatsApp Business API, Messenger API, Instagram Messaging API y llamadas de voz, con el objetivo de gestionar y automatizar interacciones con clientes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Requisitos del Usuario</h2>
              <p className="text-gray-300 mb-4">Para usar nuestros servicios, el usuario debe:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Tener al menos 18 años.</li>
                <li>Estar legalmente autorizado a operar en nombre de una empresa, emprendimiento o marca registrada.</li>
                <li>Contar con acceso legítimo a las APIs de Meta a través de una cuenta verificada en Meta for Developers.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Licencia de Uso</h2>
              <p className="text-gray-300">
                Centralize otorga al usuario una licencia limitada, no exclusiva e intransferible para utilizar su plataforma conforme a estos términos. No se permite copiar, modificar, distribuir, vender o arrendar ninguna parte del software o los servicios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Integración con Meta Platforms</h2>
              <p className="text-gray-300 mb-4">Usted comprende y acepta que al utilizar Centralize:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Está sujeto a las Políticas para Desarrolladores de Meta.</li>
                <li>Solo podrá usar los datos obtenidos de Meta para brindar soporte directo al usuario que inició la conversación.</li>
                <li>No podrá almacenar ni reutilizar información personal de usuarios más allá del tiempo estrictamente necesario para fines operativos.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Responsabilidad y Uso Aceptable</h2>
              <p className="text-gray-300 mb-4">Queda expresamente prohibido:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Enviar mensajes no solicitados (spam) o automatizados sin consentimiento.</li>
                <li>Usar la plataforma para actividades ilegales, fraudulentas o engañosas.</li>
                <li>Suplantar la identidad de otra empresa o individuo.</li>
                <li>Realizar scraping o ingeniería inversa sobre los servicios de Meta.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Privacidad de Datos</h2>
              <p className="text-gray-300">
                Centralize cumple con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la Ley de Privacidad del Consumidor de California (CCPA), entre otras normativas. Para más detalles, consulte nuestra Política de Privacidad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Suspensión y Terminación</h2>
              <p className="text-gray-300">
                Nos reservamos el derecho de suspender o cancelar el acceso a nuestros servicios si detectamos violaciones a estos Términos o a las Políticas de Meta.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">9. Limitación de Responsabilidad</h2>
              <p className="text-gray-300 mb-4">Centralize no será responsable por:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Fallos en los servicios de terceros (Meta, Telnyx, Twilio, etc.).</li>
                <li>Daños indirectos, incidentales o punitivos derivados del uso de la plataforma.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">10. Legislación y Jurisdicción</h2>
              <p className="text-gray-300">
                Estos Términos se rigen por las leyes del Estado de Delaware, EE.UU., sin perjuicio del lugar desde el que acceda el usuario.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">11. Contacto</h2>
              <p className="text-gray-300">
                Para cualquier consulta:<br />
                📧 ulinicolasmonte@gmail.com
              </p>
            </div>
          </div>
        </section>

        {/* Política de Privacidad */}
        <section>
          <h1 className="text-4xl font-bold mb-6 text-white">POLÍTICA DE PRIVACIDAD</h1>
          <p className="text-gray-300 mb-8">
            <strong>Última actualización:</strong> 25 de junio de 2025
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Información que recopilamos</h2>
              <p className="text-gray-300 mb-4">Podemos recopilar los siguientes tipos de datos:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Datos de contacto (nombre, correo electrónico, teléfono).</li>
                <li>Mensajes enviados y recibidos a través de las APIs de Meta.</li>
                <li>Datos técnicos (IP, tipo de navegador, dispositivo, logs).</li>
                <li>Información de uso de la plataforma.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Finalidad de la recopilación</h2>
              <p className="text-gray-300 mb-4">Los datos son utilizados para:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Brindar el servicio contratado.</li>
                <li>Generar estadísticas de uso y mejorar la experiencia del usuario.</li>
                <li>Proveer soporte técnico.</li>
                <li>Cumplir con regulaciones y requerimientos legales.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Compartición de datos</h2>
              <p className="text-gray-300 mb-4">Centralize no vende ni alquila datos personales. Solo compartimos información con terceros si:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Es necesario para el funcionamiento del servicio (por ejemplo, proveedores como Meta, Telnyx, AWS).</li>
                <li>Es requerido por ley o autoridad competente.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Seguridad</h2>
              <p className="text-gray-300">
                Implementamos medidas técnicas y organizativas adecuadas para proteger los datos contra pérdida, uso indebido y acceso no autorizado. Esto incluye encriptación, autenticación por tokens y monitoreo de accesos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Conservación de los datos</h2>
              <p className="text-gray-300">
                Los datos se conservarán mientras exista una relación contractual o hasta que se solicite su eliminación. Los mensajes se almacenan solo por el tiempo necesario para procesarlos o generar respuestas, salvo requerimientos legales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Derechos del usuario</h2>
              <p className="text-gray-300 mb-4">Usted puede:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Solicitar acceso a sus datos personales.</li>
                <li>Solicitar la rectificación o eliminación de los datos.</li>
                <li>Oponerse al tratamiento o solicitar la portabilidad.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Para ejercer estos derechos, escriba a: legal@centralize.dev
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Jurisdicción</h2>
              <p className="text-gray-300">
                Esta política se rige por las leyes del Estado de Delaware, EE.UU.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Cambios</h2>
              <p className="text-gray-300">
                Centralize se reserva el derecho de modificar esta política en cualquier momento. Los cambios serán notificados mediante nuestro sitio web.
              </p>
            </div>
          </div>
        </section>

        {/* Botón de regreso */}
        <div className="text-center mt-16">
          <a 
            href="/" 
            className="inline-block bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            ← Volver al inicio
          </a>
        </div>
              </div>
      </div>
    </>
  )
} 