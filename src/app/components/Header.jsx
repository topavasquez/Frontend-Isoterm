import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navbarItems = [
    { ref: "/", label: "Inicio" },
    { ref: "/sobrenosotros", label: "Sobre Nosotros" },
    { ref: "/producto", label: "Productos" },
    { ref: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="w-full my-6 px-2 sm:px-8">
      <div className="flex sm:px-6 sm:px-14 sm:items-center sm:gap-4">
        <h2 className="flex-1">
          <Link
            href="/"
            className="flex sm:flex-row items-center gap-2 sm:gap-6"
          >
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <div>
              <span className="font-bold text-2xl sm:text-1xl text-blue-500">
                Isoterm
              </span>
              <span className="font-bold text-2xl sm:text-1xl text-white">
                Chile
              </span>
            </div>
          </Link>
        </h2>
        <ul className="flex flex-col items-center md:flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-end text-sm md:text-[15px] leading-[22px]">
          {navbarItems.map(({ ref, label }) => (
            <li key={ref} className="relative">
              <Link href={ref}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
