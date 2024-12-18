import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Nuestros servicios</h1>
         <p>El contenedor está centrado y ajusta su ancho automáticamente según el tamaño de la pantalla.</p>
      </div>
    </>
  );
}
