'use client'
import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
          
const Contador = () => {

      const [isClient, setIsClient] = useState(false);

        useEffect(() => {
          setIsClient(true);
        }, []);

      const countAnimation1 = useSpring({
        from: { number: 0 },
        number: isClient ? 1480 : 0,
        config: { duration: 1000 },
      });
    
      const countAnimation2 = useSpring({
        from: { number: 0 },
        number: isClient ? 8 : 0,
        config: { duration: 1000 },
      });
      const countAnimation3 = useSpring({
        from: { number: 0 },
        number: isClient ? 400 : 0,
        config: { duration: 1000 },
      });

    return (
        <div className="container auto-mx font-OswaldMedium mb-28">
              {/* Contadores  */}
              <div className="flex flex-col md:flex-row justify-center gap-60 mt-10">
              {/* Contador 1 */}
              <div className="flex flex-col items-center text-gray-700 gap-x-4">
                <animated.p className="text-5xl md:text-7xl font-bold">
                  {countAnimation1.number.to((n) => `+${n.toFixed(0)}`)}
                </animated.p>
                <p className="text-lg md:text-xl font-bold ">Clientes</p>
              </div>
    
              {/* Contador 2 */}
              <div className="flex flex-col items-center text-gray-700 gap-x-4">
                <animated.p className="text-5xl md:text-7xl font-bold">
                  {countAnimation2.number.to((n) => `+${n.toFixed(0)}`)}
                </animated.p>
                <p className="text-lg md:text-xl font-bold ">Años de Experiencia</p>
              </div>
              {/* Contador 3 */}
              <div className="flex flex-col items-center text-gray-700 gap-x-4">
                <animated.p className="text-5xl md:text-7xl font-bold">
                  {countAnimation3.number.to((n) => `+${n.toFixed(0)}`)}
                </animated.p>
                <p className="text-xl md:text-xl font-bold ">Ventas</p>
              </div>
            </div>
        </div>
    )
}

export default Contador;