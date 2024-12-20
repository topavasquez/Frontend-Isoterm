export default function Servicios() {
    return (
      <section className="bg-gray-100 py-32">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              { title: "Instalación", image: "servicios/instalacion.png" },
              { title: "Mantención", image: "servicios/mantencion.jpg" },
              { title: "Reparaciones", image: "servicios/reparacion.jpg" },
              { title: "Venta", image: "servicios/venta.jpg" },
            ].map((service, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-sm shadow-lg w-full h-80 mx-auto"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center transition-opacity duration-500 group-hover:bg-opacity-0">
                  <span className="text-white text-3xl font-semibold group-hover:text-black group-hover:hidden">
                    {service.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  