'use client';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Contenido del banner */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="mt-96 mr-96 pr-28 pt-24">
        <a
          aria-label="Cotizar ahora" 
          href="/contacto"
          className="bg-blue-600 hover:bg-blue-400 text-blue-800 font-bold py-5 px-24 rounded mt-96 mr-96 transition-transform transform hover:scale-125"
        >
          COTIZA AHORA!
        </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
