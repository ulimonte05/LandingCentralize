import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Target, TrendingUp, Star } from "lucide-react"

export default function LandingPage() {
  const teamMembers = [
    {
      name: "Alejandro Navarro",
      role: "CEO & Fundador",
      description:
        "Más de 15 años de experiencia en consultoría empresarial y desarrollo de estrategias de crecimiento.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Evelyn García",
      role: "Directora de Operaciones",
      description: "Especialista en optimización de procesos y gestión de equipos de alto rendimiento.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Carolina Serrano",
      role: "Consultora Senior",
      description: "Experta en transformación digital y estrategias de marketing para empresas B2B.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Andrés Durán",
      role: "Analista Financiero",
      description: "Especializado en análisis de inversiones y planificación financiera estratégica.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Santiago Padilla",
      role: "Consultor de Tecnología",
      description: "Líder en implementación de soluciones tecnológicas y automatización de procesos.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Julián Rodríguez",
      role: "Director de Ventas",
      description: "Experto en desarrollo de canales de venta y estrategias de crecimiento comercial.",
      image: "/placeholder.svg?height=200&width=200",
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
      {/* Header */}
      <header className="border-b border-gray-800">
         {/*<div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded"></div>
            <span className="text-xl font-bold">YAX</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-red-400 transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-red-400 transition-colors">
              Servicios
            </a>
            <a href="#equipo" className="hover:text-red-400 transition-colors">
              Equipo
            </a>
            <a href="#contacto" className="hover:text-red-400 transition-colors">
              Contacto
            </a>
          </nav>
        </div>*/}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              CÓMO CUALQUIER ASESOR O DESARROLLADOR
              <br />
              <span className="text-red-400">PUEDE HACER CRECER SU NEGOCIO</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              ¿SIN VOLVER A PERDER EL TIEMPO EN CURSOS Y
              <br />
              SEAS RENTABLE?
            </p>

            <div className="relative max-w-2xl mx-auto mb-8 border-2 border-red-800 rounded-lg overflow-hidden rounded-xl">
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
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
                QUIERO CONOCER NUESTRA METODOLOGÍA
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4"
              >
                RESULTADOS REALES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="servicios" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NUESTRA SOLUCIÓN</h2>
            <p className="text-xl text-gray-300">Metodología probada para escalar tu negocio de consultoría</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">ESTRATEGIA PERSONALIZADA</h3>
                <p className="text-gray-300">
                  Desarrollamos una estrategia única para tu negocio basada en tu experiencia y mercado objetivo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">CRECIMIENTO ESCALABLE</h3>
                <p className="text-gray-300">
                  Implementamos sistemas y procesos que te permiten crecer sin depender únicamente de tu tiempo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">ACOMPAÑAMIENTO CONTINUO</h3>
                <p className="text-gray-300">
                  Te acompañamos en cada paso del proceso con mentorías personalizadas y soporte constante.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">PROCESO COMPROBADO PASO A PASO</h3>
            <div className="space-y-4">
              {[
                "Análisis completo de tu situación actual y definición de objetivos claros",
                "Desarrollo de tu propuesta de valor única y posicionamiento en el mercado",
                "Creación de sistemas de captación de clientes automatizados",
                "Implementación de procesos de venta y cierre efectivos",
                "Escalamiento del negocio con equipos y sistemas optimizados",
                "Monitoreo y optimización continua para maximizar resultados",
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NUESTRO EQUIPO DE EXPERTOS</h2>
            <p className="text-xl text-gray-300">
              Profesionales con experiencia comprobada en el crecimiento de negocios
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className="md:w-1/3">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-64 md:h-full object-cover"
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

      {/* Partners Section */}
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
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿LISTO PARA TRANSFORMAR TU NEGOCIO?</h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            AGENDAR CONSULTA GRATUITA
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
