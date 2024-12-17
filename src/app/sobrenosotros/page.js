import Image from "next/image";
import { HiCog, HiHome } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";

export default function SobreNosotros() {
    return (
        <div className="bg-blue-50 min-h-screen rounded-lg">
            {/* Título principal */}
            <header className="py-5 text-center">
                <h1 className="font-bold text-4xl">Sobre Nosotros</h1>
                <p className="text-lg mt-2">Expertos en soluciones de climatización en Chile</p>
            </header>

            {/* Imagen destacada */}
            <div className="relative w-full h-[550px] mt-6">
                <Image
                    src="/aireacondicionados.png"
                    alt="Climatización"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Sección de información */}
            <section className="py-12 px-6 sm:px-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                        ¿Quiénes Somos?
                    </h2>
                    <p className="text-gray-700 leading-7 text-justify">
                        En <span className="font-bold text-blue-500">IsotermChile</span>, nos dedicamos a la venta, instalación y mantenimiento de sistemas de aire acondicionado, ofreciendo soluciones integrales para hogares, oficinas y empresas. Nuestro compromiso es brindar un servicio de alta calidad, adaptado a las necesidades de nuestros clientes y siempre priorizando la eficiencia energética y el confort.
                    </p>
                    <p className="text-gray-700 leading-7 mt-4 text-justify">
                        Con más de <span className="font-bold">X años de experiencia</span> en el mercado, hemos trabajado con clientes de diferentes sectores, garantizando productos de primera calidad y un servicio técnico especializado.
                    </p>
                </div>
            </section>

            {/* Sección de valores */}
            <section className="bg-blue-50 py-12">
                <div className="max-w-4xl mx-auto px-6 sm:px-20">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Nuestros Valores
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <li className="flex items-center gap-4">
                            <HiHome className="w-20 h-20" />
                            <p className="text-gray-700">
                                <span className="font-bold">Calidad:</span> Productos y servicios que cumplen con los más altos estándares.
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <MdAccessTimeFilled className="w-20 h-20" />
                            <p className="text-gray-700">
                                <span className="font-bold">Eficiencia:</span> Soluciones rápidas y optimizadas para nuestros clientes.
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <HiCog className="w-20 h-20" />
                            <p className="text-gray-700">
                                <span className="font-bold">Soporte:</span> Atención personalizada antes, durante y después del servicio.
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaLeaf className="w-20 h-20" />
                            <p className="text-gray-700">
                                <span className="font-bold">Sostenibilidad:</span> Promovemos el uso responsable de la energía.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Llamado a la acción */}
            <section className="py-12 px-6 sm:px-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="text-gray-700 leading-7">
                        En IsotermChile, nuestro objetivo es tu comodidad y tranquilidad. ¡Contáctanos hoy y deja que el clima perfecto sea nuestra responsabilidad!
                    </p>
                    <a
                        href="/contacto"
                        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-110 transition"
                    >
                        Contáctanos
                    </a>
                </div>
            </section>
        </div>
    );
}
