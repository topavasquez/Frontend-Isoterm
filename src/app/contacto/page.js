"use client"

import { useForm } from "react-hook-form"
import Image from "next/image";

export default function Contacto() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:4000/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error en el servidor:', errorData);
                throw new Error(errorData.error || 'Error desconocido');
            }

            const result = await response.json();
            console.log('Registro creado con éxito:', result);

            const emailResponse = await fetch('http://localhost:4000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!emailResponse.ok) {
                const errorData = await emailResponse.json();
                console.error('Error en el servidor al enviar el correo: ', errorData);
                throw new Error(errorData.error || 'Error desconocido');
            }

            const emailResult = await emailResponse.json();
            console.log('Correo enviado correctamente: ', emailResult);
            reset();
            alert("Solicitud de contacto enviada.");
        } catch (error) {
            console.error('Error al enviar la solicitud:', error.message);
        }
    };

    return (
        <div className=" min-h-screen rounded-lg">
            <div className="relative w-full h-[550px] ">
                <Image
                    src='/banner-contacto.jpg'
                    alt="Climatización"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                />
            </div>

            <div className="max-w-7xl mx-auto relative bg-white px-8 sm:px-20 pb-10">
                <h1 className="text-center font-bold text-3xl py-8 text-blue-600">Contacto</h1>
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-site text-xl my-3 text-blue-600">Contactar al personal</h3>
                    <form className="border-2 border-blue-400 p-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col sm:gap-6">

                            <label className="text-sm text-blue-600" htmlFor="name">
                                Nombre
                            </label>
                            <input
                                {...register("name", { required: true })}
                                id="name"
                                className="input border-2 border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <label className="text-sm text-blue-600" htmlFor="lastname">
                                Apellido
                            </label>
                            <input
                                {...register("lastname", { required: true })}
                                id="lastname"
                                className="input border-2 border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <label className="text-sm text-blue-600" htmlFor="email">
                                Correo electronico
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                id="email"
                                className="input border-2 border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <label className="text-sm text-blue-600" htmlFor="title">
                                Nombre solicitud
                            </label>
                            <input
                                {...register("title", { required: true })}
                                id="title"
                                className="input border-2 border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <label className="text-sm text-blue-600" htmlFor="description">
                                Descripcion solicitud
                            </label>
                            <textarea
                                {...register("description", { required: true })}
                                id="description"
                                className="input border-2 border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                style={{
                                    height: '150px',
                                    resize: 'none',
                                }}
                            />

                            <label className="text-sm text-blue-600" htmlFor="number">
                                Numero telefónico
                            </label>
                            <textarea
                                {...register("number", { required: true })}
                                id="number"
                                className="input border-2 border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                style={{
                                    height: '45px',
                                    resize: 'none',
                                }}
                            />

                        </div>
                        <button className="mt-6 text-xl text-white block mx-auto bg-blue-500 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition" type="submit">
                            Enviar
                        </button>
                    </form>
                    <div className="mt-16">
                    </div>
                </div>
            </div>
        </div>
    )
}