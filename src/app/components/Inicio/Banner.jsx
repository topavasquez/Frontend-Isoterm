'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';  

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [intervalId, setIntervalId] = useState(null); 
  const images = ["/baner1.png", "/banner2.png"];


  const startInterval = () => {
    const id = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000); 
    setIntervalId(id); 
  };

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (currentImage === 0) {
      const timer = setTimeout(() => {
        setShowButton(true); 
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [currentImage]);

  const handlePrev = () => {
    clearInterval(intervalId); 
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); 
    startInterval(); 
  };

  const handleNext = () => {
    clearInterval(intervalId); 
    setCurrentImage((prev) => (prev + 1) % images.length); 
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Contenedor de imágenes con animación de desplazamiento */}
      <div className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out"
           style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        <div className="relative w-full h-full flex-shrink-0">
          <Image
            src={images[0]}
            alt="Banner Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative w-full h-full flex-shrink-0">
          <Image
            src={images[1]}
            alt="Calidad"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Flechas de navegación */}
      <div 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={handlePrev}
      >
        <FaArrowLeft size={40} color="white" />
      </div>
      <div 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={handleNext}
      >
        <FaArrowRight size={40} color="white" />
      </div>
    </div>
  );
};

export default Banner;
