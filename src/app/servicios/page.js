import Venta from "../components/Servicios/Venta"
import Mantencion from "../components/Servicios/mantencion"

export default function Servicios() {
    return (
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              { title: "Instalación", image: "servicios/instalacion.png", link:"#instalacion"},
              { title: "Mantención", image: "servicios/mantencion.jpg", link:"#mantencion"},
              { title: "Reparaciones", image: "servicios/reparacion.jpg",link:"#reparaciones" },
              { title: "Venta", image: "servicios/venta.jpg" ,link:"#venta"},
            ].map((service, index) => (
              <a
                key={index}
                href = {service.link} 
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
              </a>
            ))}
          </div>
        </div>
        <Venta/>
        <Mantencion/>
      </section>
    );
  }
  