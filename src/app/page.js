
import Blog from  "./components/Inicio/Blog"

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="my-28">
          <h1 className="text-3xl font-bold text-gray-700 ml-40">Nuestros servicios</h1>
            <Blog/>
        </div>
      </div>
    </>
  );
}
