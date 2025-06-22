'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Target, TrendingUp, Star } from "lucide-react"

export default function LandingPage() {
  const teamMembers = [
    {
      name: "Lorenzo Miranda",
      role: "Vicepresidente gremial de la Cámara Chilena de la Construcción",
      description:
        "'Al principio fue un proyecto mas de muchos en los que ya hemos tratado de innovar, luego se termino transformando en un proyecto con multiples desarrollos que terminaron transformando todo nuestro proceso de ventas. Estamos muy contentos con la forma de trabajar de Ulises y Tobias.'",
      image: "/clients/x.png",
    },
    {
      name: "Pedro Diacarma",
      role: "Ceo y cofundador en AtHome Grupo Inmobiliario",
      description: "'Siempre hemos sido entusiasta en la tecnologia pero la verdad que hoy si es rentable aplicarla. Claro que recomendaria y es porque las cuentas terminan cerrando🤪😂. Muy contentos con el trabajo y la atencion de los chicos'",
      image: "/clients/athome.png",
    },
    {
      name: "Jordi Martinez",
      role: "Ceo y fundador en Own Legacy",
      description: "'Si recomendaria porque es simple, estando de este lado, uno teme de conceptos tan alejados de su comprension, pero Ulises siempre nos hizo entender todo de forma facil. Una vez que instalamos el sistema fue cuestion de horas para comenzar a ver resultados, seguiremos innovando!🤖💪'",
      image: "/clients/own.png",
    },
    {
      name: "Bernardo Ramael",
      role: "Director general en Tibesa Real Estate",
      description: "'Si, gracias. Seguiremos trabajando si los resultados siguen siendo estos, trabajan muy bien y son profesionales. El ultimo mes fue el que mas agendas tuvimos y seria imposible sin un agente de IA'",
      image: "/clients/tibesa.png",
    },
     {
      name: "Jean Pierre Hidalgo",
      role: "Gerente General en Convive Grupo Inmobiliario",
      description: "'Trabajamos con ellos hace ya mas de un año y medio ,  era una necesidad para nosotros poder atender a los clientes a tiempo y el area de marketing no daba abasto. Julio (aqui Jean menciona el nombre de su agente) hoy se encarga de todo el proceso de calificacion y seguimientos y nunca mas volvimos a recbir quejas de clientes, ademas cada mes cumplimos con los objetivos de ventas, cosa que antes hubiera sido imposible.'",
      image: "/clients/convive.png",
    },
    {
      name: "Tadas Vaineikis",
      role: "Ceo y fundador en Marvic Properties",
      description: "'Recomiendo.  Estoy contento con los resultados en general, nunca pense ver los resultados que estamos teniendo sinceramente, no tenia expectativas pero si me sorprendi... Los seguimientos han sido clave y las metricas tambien.'",
      image: "/clients/marvic.png",
    },
  ]

  const partners = [
    { name: "Tibesa", logo: "/clients/tibesa.png" },
    { name: "X", logo: "/clients/x.png" },
    { name: "At Home", logo: "/clients/athome.png" },
    { name: "Own", logo: "/clients/own.png" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
            <Image src="/images/logo.png" alt="Centralize" width={100} height={100} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              COMO CUALQUIER PROYECTO INMOBILIARIO
              <br />
              <span className="text-red-400">PUEDE VENDER MÁS GASTANDO MENOS</span>
              <br />
              GRACIAS A LOS SISTEMAS CON IA
            </h1>

            <div className="relative max-w-4xl mx-auto mb-8 border-2 border-red-800 rounded-lg overflow-hidden rounded-xl">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/KPNEV6IR5EQ?si=s2-VAPi6hceonbtj" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4"
                onClick={() => window.open('https://calendly.com/holacentralize/30min', '_blank')}
              >
                QUIERO CONOCER EL SISTEMA DE IA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="servicios" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NUESTRO SISTEMA</h2>
            <p className="text-xl text-gray-300">Sistema de IA especializado para empresas inmobiliarias</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">AGENTE DE IA</h3>
                <p className="text-gray-300">
                  Desarrollamos un agente de IA entrenado como el mejor vendedor de tu empresa, basándonos en tus criterios. Hacemos que acceda a tu base de propiedades y calendario, para luego incorporarlo en tu WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">SEGUIMIENTOS CON IA</h3>
                <p className="text-gray-300">
                  Te brindamos una bonita interfaz donde puedes configurar seguimientos masivos o programar para cada lead. Cada seguimiento es personalizado y basado en la conversación con el usuario.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">MÉTRICAS CON IA</h3>
                <p className="text-gray-300">
                  Te brindamos métricas personalizadas con IA para que puedas optimizar el rendimiento. Podrás saber cuáles son los proyectos más consultados, las consultas más típicas, y cualquier métrica clave de tu empresa.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">CÓMO FUNCIONA NUESTRO SISTEMA</h3>
            <div className="space-y-4">
              {[
                "Análisis completo de las interacciones existentes con clientes y definición de comunicación del agente",
                "Definición de objetivos del agente y entendimiento del proceso de ventas",
                "Desarrollo de funciones como base de datos, calendario y deepresearch",
                "Implementación dentro de WhatsApp e inicio de sesión en Centralize",
                "Configuración de seguimientos automáticos para cada lead",
                "Desarrollo de métricas personalizadas",
                "Monitoreo y optimización continua para maximizar resultados",
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
              <div className="flex justify-center rounded-lg overflow-hidden">
                <Image className=" border-2 border-red-800" src="/images/centralize.png" alt="Dashboard" width={1000} height={1000} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonios de nuestros clientes</h2>
            <p className="text-xl text-gray-300">
            Empresas inmobiliarias con desarrollos inmobiliarios activos
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className="md:w-1/3 flex justify-center items-center">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="w-auto h-16 md:h-24 rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                      <p className="text-red-400 font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-300 leading-relaxed">{member.description}</p>
                      <div className="flex items-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-gray-400">Calificación 5.0</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section 
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">EMPRESAS QUE CONFÍAN EN NOSOTROS</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿LISTO PARA VENDER MÁS CON IA?</h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda una demo gratuita y descubre cómo nuestro sistema de IA puede revolucionar tus ventas inmobiliarias
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={() => window.open('https://calendly.com/holacentralize/30min', '_blank')}
          >
            AGENDAR DEMO GRATUITA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Centralize, LLC</li>
                <li>+54 (11) 5896-1046</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Centralize. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
