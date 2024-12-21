import { FcRules, FcSearch, FcRightUp, FcAddressBook, FcCancel, FcConferenceCall, FcExpired, FcAssistant } from "react-icons/fc";

export default function Politica() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
            <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-5xl relative">
                {/* Fondo de textura de papel */}
                <div className="absolute inset-0 bg-cover bg-no-repeat opacity-10" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)' }}></div>
                
                {/* Título principal */}
                <h1 className="text-center text-3xl my-5 font-bold text-blue-600">
                    Términos y Condiciones
                </h1>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcSearch className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Uso del Sitio Web
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            El uso de esta página está destinado exclusivamente para:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Obtener información sobre los productos y servicios de venta y mantención de aires acondicionados.</li>
                            <li>Contactarnos a través del formulario para consultas o solicitudes.</li>
                        </ul>
                        <p>El acceso al sitio web no otorga ningún derecho de propiedad sobre sus contenidos.</p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcRules className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Servicios Ofrecidos
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            Ofrecemos servicios de:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Venta de aires acondicionados.</li>
                            <li>Instalación, mantenimiento y reparación de aires acondicionados.</li>
                        </ul>
                        <p className="pt-3">
                            Toda la información proporcionada en el sitio web es de carácter informativo y puede ser modificada sin previo aviso.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcRightUp className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Enlaces a Terceros
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, políticas o prácticas de estos sitios y te recomendamos leer sus términos y condiciones antes de interactuar con ellos.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcAddressBook className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Proceso de Contacto
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                                El formulario de contacto tiene como único propósito facilitar la comunicación entre el cliente y nuestro equipo. Al enviar una solicitud:
                            </p>
                        <ul className="list-disc pl-5">
                            <li>Te comprometes a proporcionar información veraz y actualizada.</li>
                            <li>Nos autorizas a contactarte a través de los datos que proporciones.</li>
                        </ul>
                        
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcCancel className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Limitación de Responsabilidad
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            No nos hacemos responsables por:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Daños directos, indirectos o incidentales derivados del uso de este sitio web.</li>
                            <li>Errores técnicos o interrupciones en el funcionamiento del sitio.</li>
                        </ul>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcConferenceCall className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Propiedad Intelectual
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            Todos los contenidos de este sitio web, incluidos textos, imágenes, logotipos y diseños, son propiedad de [Nombre de la Página o Empresa] o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcExpired className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Modificaciones a los Términos y Condiciones
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                        Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos a partir de su publicación en esta página.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcAssistant className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Contacto
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            Si tienes preguntas o inquietudes sobre nuestros términos y condiciones, no dudes en contactarnos a isotermtesting@gmail.com.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
