import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  const clients = [
    {
      name: "Galas Estudio",
      image: "/new-images/Todos Nuestros Clientes (12).png",
      instagram: "https://www.instagram.com/estudiogalas/"
    },
    {
      name: "Tricapitals",
      image: "/new-images/Todos Nuestros Clientes.png",
      instagram: "https://www.instagram.com/tricapitals/"
    },
    {
      name: "Metra",
      image: "/new-images/images.png",
      instagram: "https://www.instagram.com/metrainmobiliaria/"
    },
    {
      name: "Marceca",
      image: "/new-images/marceca.png",
      instagram: "https://www.instagram.com/marceca.bienesraices/"
    },
    {
      name: "Brick",
      image: "/new-images/Todos Nuestros Clientes (8).png",
      instagram: "https://www.instagram.com/inmobiliariabrick/"
    },
    {
      name: "Maquieira",
      image: "/new-images/maquieria.png",
      instagram: "https://www.instagram.com/maquieiraestudioinmobiliario/"
    },
    {
      name: "Fundo Volcanes",
      image: "/new-images/Todos Nuestros Clientes (6).png",
      instagram: "https://www.instagram.com/fundovolcanescl/"
    },
    {
      name: "Ilumina",
      image: "/new-images/Todos Nuestros Clientes (7).png",
      instagram: "https://www.instagram.com/iluminainmobiliaria/"
    },
    {
      name: "Parque Chucao",
      image: "/new-images/Todos Nuestros Clientes (3).png",
      instagram: "https://www.instagram.com/parquechucaoptovaras/"
    },
    {
      name: "Casa Rainmann",
      image: "/new-images/Todos Nuestros Clientes (2).png",
      instagram: "https://www.instagram.com/casarainmannptovaras/"
    },
    {
      name: "Vistas de Godoy",
      image: "/new-images/Todos Nuestros Clientes (4).png",
      instagram: "https://www.instagram.com/vistasdegodoy/"
    },
    {
      name: "Paseo Alto",
      image: "/new-images/paseo alto.png",
      instagram: "https://www.instagram.com/paseoalto.sv/"
    },
    {
      name: "Punta Tenglo",
      image: "/new-images/Todos Nuestros Clientes (1).png",
      instagram: "https://www.instagram.com/punta_tenglo/"
    },
    {
      name: "Grupo Vento",
      image: "/new-images/grupo vento.png",
      instagram: "https://www.instagram.com/vento.propiedades/"
    },
    {
      name: "Refugio Rio Puelo",
      image: "/new-images/Todos Nuestros Clientes (5).png",
      instagram: "https://www.instagram.com/refugioriopuelo/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-semibold text-[#000000]">Centralize</div>
        <a 
          href="https://tally.so/r/wQGYEg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#000000] text-[#ffffff] hover:bg-gray-800 px-6 py-2 rounded-md inline-block"
        >
          Agendar una demo
        </a>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-[#000000] mb-6 text-balance">
          Agentes de IA para Tokko, KiteProp, Xintel y mas!
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Centralize es el primer software proveedor oficial de agentes de inteligencia artificial de los principales
          CRMs inmobiliarios.
        </p>
        <a 
          href="https://tally.so/r/wQGYEg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#000000] text-[#ffffff] hover:bg-gray-800 px-8 py-3 text-lg rounded-md inline-block"
        >
          Quiero mi Agente de IA HOY!
        </a>
      </section>

      {/* AI Agents Cards */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-white border border-gray-200 flex flex-col items-center justify-center rounded-lg">
            <div className="mb-4">
              <Image
                src="/new-images/xintel.png"
                alt="xintel.png"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#000000]">Asesor Xintel AI</h3>
          </Card>

          <Card className="p-6 text-center bg-white border border-gray-200 flex flex-col items-center justify-center rounded-lg">
            <div className="mb-4">
              <Image
                src="/new-images/tokko.png"
                alt="tokko.png"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#000000]">Asesor Tokko AI</h3>
          </Card>

          <Card className="p-6 text-center bg-white border border-gray-200 flex flex-col items-center justify-center rounded-lg">
            <div className="mb-4">
              <Image
                src="/new-images/kiteprop.png"
                alt="kite.png"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#000000]">Asesor Kiteprop AI</h3>
          </Card>
        </div>
      </section>

      {/* How AI Helps Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4 text-balance">
          ¿Como un Asesor de IA Ayuda a mi Inmobiliaria?
        </h2>
        <p className="text-xl text-gray-600 mb-8">(Descubrilo con un caso de exito tan bueno, que hoy es socio)</p>
        <div className="rounded-lg overflow-hidden">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_aJLReUJ_Nk?si=soCmXSzkjYRyIjWx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
      </section>

      {/* Partners Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#000000] mb-8">Centralize, Aliado con...</h3>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <img src="/new-images/image copy 2.png" alt="Avantar" className="h-32" />
          <img src="/new-images/image copy 3.png" alt="Meta" className="h-32" />
          <img src="/new-images/image copy 4.png" alt="WhatsApp" className="h-32" />
          <img src="/new-images/image copy 5.png" alt="Tokko" className="h-32" />
          <img src="/new-images/image copy 6.png" alt="Kiteprop" className="h-32" />
        </div>
      </section>

      {/* Clients Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-[#000000] mb-12 text-center">Algunos de Nuestros Clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img 
                src={client.image} 
                alt={client.name} 
                className={`text-white font-bold text-sm ${
                  client.name === "Metra" ? "w-80 h-80 p-20 object-contain filter-none" : "w-80 h-80 object-contain"
                }`}
                style={client.name === "Metra" ? { imageRendering: 'auto' } : {}}
              />
              <a 
                href={client.instagram} 
                className="text-sm font-bold text-center mt-2 hover:text-blue-600 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {client.instagram}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-[#000000] mb-4 text-center">¿Y Quienes Crearon Centralize?</h3>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Desde hace 2 años, dos amigos argentinos, desde la casa de la abuela, comenzaron a ofrecer servicios de
          inteligencia artificial a inmobiliarias, y así comenzó la historia del primer software en integrar esta nueva
          herramienta en los principales CRMs...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Ulises */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-[#000000] mb-4">Ulises</h4>
            <div className="mb-6">
              <img
                src="/new-images/uli.png"
                alt="Ulises"
                className="w-64 h-80 object-cover rounded-lg mx-auto"
              />
            </div>
            <div className="text-base text-gray-600 text-left space-y-2">
            <p>
              <strong>Cofundador de Centralize y Dédalo</strong>, Startup Proptech que recientemente obtuvo financiamiento.
            </p>
            <p>
              Actualmente cursa la <strong>Licenciatura y Maestría en Ciencias de la Computación</strong> en la UBA.
            </p>
            <p>
              Participó en programas internacionales de formación y liderazgo como:
              <ul className="list-disc list-inside ml-4">
                <li>ML4Good en Colombia</li>
                <li>Makers con Andrés Bilbao (cofundador de Rappi)</li>
                <li>Emprelatam con Recluty.ai</li>
                <li>Silicon Valley Fellowship</li>
              </ul>
            </p>
            <p>
              Ha trabajado en tecnología, operaciones y datos en empresas como:
              <ul className="list-disc list-inside ml-4">
                <li>Roxom</li>
                <li>Singulate</li>
                <li>Recluty.ai</li>
                <li>Chatty Analytics</li>
              </ul>
            </p>
            <p>
              Además, participó en conferencias internacionales como <strong>EA Global</strong> y <strong>EAGx São Paulo</strong>.
            </p>
            </div>
          </div>

          {/* Tobias */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-[#000000] mb-4">Tobias</h4>
            <div className="mb-6">
              <img
                src="/new-images/tobi.png"
                alt="Tobias"
                className="w-64 h-80 object-cover rounded-lg mx-auto"
              />
            </div>
            <div className="text-base text-gray-600 text-left space-y-2">
            <p>
              <strong>Cofundador de Centralize y Dédalo</strong>, Startup Proptech que recientemente obtuvo financiamiento.
            </p>
            <p>
              Desarrolló con éxito más de <strong>12 proyectos de IA</strong> para empresas individuales.
            </p>
            <p>
              Creador de un canal de YouTube con más de <strong>1.900 suscriptores</strong>, enfocado en la divulgación de IA aplicada al real estate, con más de dos años de trayectoria.
            </p>
            <p>
              Ha brindado consultorías a empresas como:
              <ul className="list-disc list-inside ml-4">
                <li>Grupo BC</li>
                <li>Principales firmas de gestión de cobranzas y recuperación crediticia en México</li>
              </ul>
            </p>
            <p>
              Lidera una comunidad de más de <strong>400 desarrolladores</strong> especializados en IA y ha formado a más de <strong>15 personas</strong> a través de clases y coaching.
            </p>

            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#000000] mb-8">¡Quiero mi Asistente de IA</h3>
        <a 
          href="https://tally.so/r/wQGYEg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#000000] text-[#ffffff] hover:bg-gray-800 px-8 py-3 text-lg rounded-md"
        >
          Hablemos y crea tu Asistente
        </a>
      </section>
    </div>
  )
}