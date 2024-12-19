'use client';
import Image from "next/image";

const Banner = () => {


  return (
    <div className="relative w-full h-[70vh]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/banner.png"
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 "></div>
      </div>

      </div>
  );
};

export default Banner;
