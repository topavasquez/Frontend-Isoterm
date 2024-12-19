import Image from 'next/image';

export default function Blog() {
  return (
    <div className="">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Primer artículo */}
          <article className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/1.jpg"
              alt="Boost your conversion rate"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                <a href="#">Instalación de Aires Acondicionados</a>
              </h3>
              <p className="mt-2 text-gray-600">Garantizamos una instalación profesional de aires acondicionados, asegurando un rendimiento óptimo y una eficiencia energética superior para tu hogar o empresa.</p>
            </div>
          </article>

          {/* Segundo artículo */}
          <article className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/2.jpg"
              alt="How to use SEO"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                <a href="#">Mantenimiento Aires Acondicionados</a>
              </h3>
              <p className="mt-2 text-gray-600">Ofrecemos servicios de mantenimiento preventivo para aires acondicionados, asegurando un funcionamiento eficiente y prolongando la vida útil de tus equipos.</p>
            </div>
          </article>

          {/* Tercer artículo */}
          <article className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/3.jpg"
              alt="Improve your customer experience"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                <a href="#">Instalación de Paneles Solares</a>
              </h3>
              <p className="mt-2 text-gray-600">Te ayudamos a reducir costos energéticos con la instalación de paneles solares, aprovechando la energía renovable para un hogar o negocio más sostenible y económico.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
