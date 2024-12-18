import { useSpring, animated } from "@react-spring/web";
          
const Contador = () => {
      const countAnimation1 = useSpring({
        from: { number: 0 },
        number: isClient ? 200 : 0,
        config: { duration: 1000 },
      });
    
      const countAnimation2 = useSpring({
        from: { number: 0 },
        number: isClient ? 7 : 0,
        config: { duration: 1000 },
      });

    return (
        <div className="container auto-mx">
              {/* Contadores  */}
              <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
              {/* Contador 1 */}
              <div className="flex flex-col items-center text-white">
                <animated.p className="text-5xl md:text-7xl font-bold">
                  {countAnimation1.number.to((n) => `+${n.toFixed(0)}`)}
                </animated.p>
                <p className="text-2xl md:text-3xl font-bold mt-4">Clientes</p>
              </div>
    
              {/* Contador 2 */}
              <div className="flex flex-col items-center text-white">
                <animated.p className="text-5xl md:text-7xl font-bold">
                  {countAnimation2.number.to((n) => `+${n.toFixed(0)}`)}
                </animated.p>
                <p className="text-2xl md:text-3xl font-bold mt-4">Años de Experiencia</p>
              </div>
            </div>
        </div>
    )
}

export default Contador;