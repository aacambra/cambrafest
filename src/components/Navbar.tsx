"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleTCclick = () => {
    const fileName = "TERMOS E CONDIÇÕES GERAIS DE ENTRADA.pdf";

    const link = document.createElement("a");
    link.href = fileName;
    link.download = fileName;
    link.click();

    setNavbar(!navbar);
  };

  return (
    <nav className="w-full lg:bg-[#362E59] bg-[#131E50]">
      <div className="justify-center lg:bg-[#362E59] bg-[#131E50]  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineCloseCircle size={"1.5rem"} color="#FDFAFA" />
                ) : (
                  <GiHamburgerMenu size={"1.5rem"} color="#FDFAFA" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex">
              <li className="pb-6 text-xl text-[#FDFAFA] py-2 px-6 text-center  border-b-2 md:border-b-0 hover:text-[1.5rem]  hover:bg-[#EF8F1E]  border-[#EF8F1E]   md:hover:text-[#EF8F1E] md:hover:bg-transparent">
                <Link href={"/"} onClick={() => setNavbar(!navbar)}>
                  Início
                </Link>
              </li>
              <li className="pb-6 text-xl text-[#039B7D] font-bold py-2 px-6 text-center  border-b-2 md:border-b-0 hover:text-[1.5rem]  hover:bg-[#EF8F1E]  border-[#EF8F1E]   md:hover:text-[#EF8F1E] md:hover:bg-transparent">
                <a
                  href="https://cambrafest.bol.pt"
                  target="_blank"
                  onClick={() => setNavbar(!navbar)}
                >
                  BILHETES
                </a>
              </li>
              <li className="pb-6 text-xl text-[#FDFAFA] py-2 px-6 text-center  border-b-2 md:border-b-0 hover:text-[1.5rem]  hover:bg-[#EF8F1E]  border-[#EF8F1E]   md:hover:text-[#EF8F1E] md:hover:bg-transparent">
                <Link href={"/faq"} onClick={() => setNavbar(!navbar)}>
                  F.A.Q.
                </Link>
              </li>
              <li className="pb-6 text-xl text-[#FDFAFA] py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[1.5rem]  hover:bg-[#EF8F1E]  border-[#EF8F1E]   md:hover:text-[#EF8F1E] md:hover:bg-transparent">
                <a
                  href="https://linktr.ee/cambrafest"
                  target="_blank"
                  onClick={() => setNavbar(!navbar)}
                >
                  Mais Informações
                </a>
              </li>
              <li className="pb-6 text-xl text-[#FDFAFA] py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[1.5rem]  hover:bg-[#EF8F1E]  border-[#EF8F1E]   md:hover:text-[#EF8F1E]  md:hover:bg-transparent">
                <button onClick={handleTCclick}>Termos & Condições</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
