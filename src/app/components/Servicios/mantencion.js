'use client'; // Asegúrate de que el archivo sea ejecutado como cliente

import { FaExclamationCircle, FaTools, FaFan, FaRegSnowflake, FaBolt } from 'react-icons/fa';

export default function Mantencion() {
  // Problemas a mostrar
  const problemas = [
    { icon: <FaExclamationCircle />, descripcion: "Falta de enfriamiento" },
    { icon: <FaTools />, descripcion: "mantenimiento general" },
    { icon: <FaFan />, descripcion: "Falta de flujo de aire" },
    { icon: <FaRegSnowflake />, descripcion: "Congelamiento de la unidad" },
    { icon: <FaBolt />, descripcion: "Problemas con la electricidad" },
  ];

  return (
    <section id="mantencion" className="bg-white pb-20 pt-10">
      <div className="mx-auto max-w-[1000px] px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Posibles Problemas de los Equipos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {problemas.map((problema, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 rounded-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 bg-blue-500 flex items-center justify-center rounded-xl mb-4">
                <div className="text-4xl">{problema.icon}</div>
              </div>
              <p className="text-center">{problema.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
