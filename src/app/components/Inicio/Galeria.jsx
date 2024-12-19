'use client';
import Image from 'next/image';

const Galeria = () => {
  return (
<div className='container auto-mx'>
    <div className="flex flex-col md:flex-row items-center justify-between p-6 mb-12">
      {/* Información a la izquierda */}
      <div className="md:w-1/3 p-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Galería de Instalaciones de Aires Acondicionados</h2>
        <p className="text-lg text-gray-600 text-justify">
        Descubre cómo nuestros sistemas de aire acondicionado pueden transformar tu espacio. En nuestra galería, te mostramos una selección de nuestras instalaciones más recientes, diseñadas para ofrecer confort, eficiencia y estilo. Cada imagen refleja el compromiso que tenemos con la calidad y la satisfacción de nuestros clientes. ¡Explora y visualiza cómo podemos hacer tu hogar o negocio más cómodo durante todo el año!
        </p>
      </div>

      {/* Imágenes a la derecha */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-2/3">
        <div className="relative w-full h-48">
          <Image src="/galeria/1.jpeg" alt="Imagen 1" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-48">
          <Image src="/galeria/2.jpg" alt="Imagen 2" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-48">
          <Image src="/galeria/3.jpg" alt="Imagen 3" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-48">
          <Image src="/galeria/4.jpg" alt="Imagen 4" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-48">
          <Image src="/galeria/5.jpg" alt="Imagen 5" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-48">
          <Image src="/galeria/6..jpg" alt="Imagen 6" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Galeria;
