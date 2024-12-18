'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Clientes = () => {
  const clientes = [
    "/clientes/1.jpg", 
    "/clientes/2.jpg", 
    "/clientes/3.jpg", 
    "/clientes/4.jpg", 
    "/clientes/5.png", 
    "/clientes/6.png",
    "/clientes/7.png",
    "/clientes/8.png",
    "/clientes/9.png",
    "/clientes/10.jpg"
  ];

  const containerRef = useRef(null);

  // Animación de carrusel infinito
  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft === maxScrollLeft) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1; 
        }
      }
    };

    const interval = setInterval(scroll, 10); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-10 mx-auto">
      <h1 className='font-bold text-2xl'>Nuestros Clientes:</h1>
      {/* Contenedor de las imágenes */}
      <div
        ref={containerRef}
        className="flex py-10 overflow-x-auto no-scrollbar"
        style={{ whiteSpace: "nowrap", overflowX: "hidden" }}  
      >
        {clientes.concat(clientes).map((cliente, index) => (
          <div key={index} className="w-1/5 flex-shrink-0 p-2 inline-block">
            <Image
              src={cliente}
              alt={`Cliente ${index + 1}`}
              width={200}  
              height={200}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientes;
