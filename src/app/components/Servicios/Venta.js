
export default function Venta() {
    const products = [
      {
        btu: "9,000 BTU",
        image: "/servicios/khone1.jpg",
      },
      {
        btu: "12,000 BTU",
        image: "/servicios/khone1.jpg",
      },
      {
        btu: "18,000 BTU",
        image: "/servicios/khone1.jpg",
      },
    ];
  
    return (
      <section id="venta" className="bg-white py-20">
        <div className="mx-auto max-w-[1000px] px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Aires Acondicionados en Venta</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={`Imagen de ${product.btu}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  {/* Logotipos */}
                  <div className="flex justify-center space-x-4 mb-2">
                    <img
                      src="/servicios/daitsu.jpg"
                      alt="Logo 1"
                      className="w-16 h-auto"
                    />
                    <img
                      src="/servicios/khone.png"
                      alt="Logo 2"
                      className="w-16 h-auto"
                    />
                  </div>
                  {/* Detalles del producto */}
                  <p className="text-gray-700 font-bold">{product.btu}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 " href="/contacto">
                    Cotizar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  