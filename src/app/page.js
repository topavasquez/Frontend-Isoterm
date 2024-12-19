
import Blog from  "./components/Inicio/Blog"
import Contador from "./components/Inicio/Contador"
import Banner from "./components/Inicio/Banner"
import Galeria from "./components/Inicio/Galeria"
import Clientes from "./components/Inicio/Clientes"

export default function Home() {
  return (
    <>
    <Banner/>
      <div className="container mx-auto">
        <div className="my-28">
          <h1 className="text-3xl font-bold text-gray-700 ml-8">Nuestros servicios</h1>
            <Blog/>
        </div>
        <div>
          <Contador/>
          <Galeria/>
          <Clientes/>
        </div>
      </div>
    </>
  );
}
