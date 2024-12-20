import { FcRules, FcSearch, FcAcceptDatabase, FcShare, FcPrivacy, FcConferenceCall, FcExpired, FcAssistant } from "react-icons/fc";

export default function Politica() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-200 py-10">
            <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-5xl relative">
                {/* Fondo de textura de papel */}
                <div className="absolute inset-0 bg-cover bg-no-repeat opacity-10" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)' }}></div>
                
                {/* Título principal */}
                <h1 className="text-center text-3xl my-5 font-bold text-blue-600">
                    Políticas y Privacidad
                </h1>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcSearch className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Recopilación de Información
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            Nuestra página no recopila ni almacena información personal de manera automática. La única información que solicitamos es aquella que tú decides proporcionar voluntariamente al completar el formulario de contacto para que podamos responder a tu solicitud.
                            Los datos solicitados en el formulario incluyen:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Nombre</li>
                            <li>Número de teléfono</li>
                        </ul>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcRules className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Uso de la Información
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            La información proporcionada será utilizada exclusivamente para:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Atender tu solicitud de contacto.</li>
                            <li>Proporcionar información relacionada con tus consultas.</li>
                        </ul>
                        <p className="pt-3">
                            Para ejercer estos derechos, puedes contactarnos en isotermtesting@gmail.com.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcAcceptDatabase className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Almacenamiento de Datos
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            La información que compartas a través del formulario de contacto será tratada de forma segura y confidencial. Solo se conservará el tiempo necesario para procesar tu solicitud y no será almacenada en bases de datos una vez cumplido su propósito.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcShare className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Compartición de Datos con Terceros
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            No compartimos, vendemos ni transferimos tu información a terceros, salvo que sea requerido por ley o con tu consentimiento expreso.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcPrivacy className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Seguridad de la Información
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            Tomamos las medidas razonables para proteger la información que nos proporcionas, pero recuerda que ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcConferenceCall className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Derechos del Usuario
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            Tienes derecho a:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>
                                Solicitar información sobre cómo utilizamos tus datos.
                            </li>
                            <li>
                                Pedir que eliminemos tus datos una vez cumplido su propósito.
                            </li>
                        </ul>
                        <p>
                            Para ejercer estos derechos, puedes contactarnos en isotermtesting@gmail.com.
                        </p>
                    </div>
                </section>

                <section className="py-5 px-6 sm:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <FcExpired className="text-3xl mr-2" />
                            <h2 className="text-3xl font-semibold text-gray-800">
                                Cambios a esta Política de Privacidad
                            </h2>
                        </div>
                        <p className="leading-7 text-justify">
                            Nos reservamos el derecho de actualizar esta política en cualquier momento. Cualquier cambio será publicado en esta página y tendrá efecto inmediato desde su publicación.
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
                            Si tienes preguntas o inquietudes sobre nuestra política de privacidad, no dudes en contactarnos a isotermtesting@gmail.com
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
