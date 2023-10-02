"use client";

import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Menu: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="items-center hidden lg:flex text-white">
        <button
          name="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl p-3"
        >
          <FontAwesomeIcon icon={menuOpen ? faClose : faBars} />
        </button>
      </div>
      <div
        id="myLinks"
        className={`flex text-white items-center flex-initial lg:flex-[1_1_100%] lg:bg-brand-color lg:transition-all lg:absolute lg:top-full lg:overflow-hidden lg:w-full lg:left-0 ${
          menuOpen ? "lg:h-52" : "lg:h-0"
        } `}
      >
        <ul className="flex flex-wrap ml-12 lg:flex-col lg:w-full lg:ml-0">
          <li className="flex justify-center">
            <Link
              href="/"
              onClick={toMenu}
              className="px-5 py-3 hover:cursor-pointer border-b-2 border-transparent hover:border-brand-color hover:text-brand-color lg:hover:bg-white lg:w-full lg:text-left"
            >
              Início
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              href="/treino-de-leoa"
              onClick={toMenu}
              className="px-5 py-3 hover:cursor-pointer border-b-2 border-transparent hover:border-brand-color hover:text-brand-color lg:hover:bg-white lg:w-full lg:text-left"
            >
              Treino de leoa
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              href="/treino-de-leoa#depoiments"
              onClick={toMenu}
              className="px-5 py-3 hover:cursor-pointer border-b-2 border-transparent hover:border-brand-color hover:text-brand-color lg:hover:bg-white lg:w-full lg:text-left"
            >
              Depoimentos
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              href="/treino-de-leoa#contact"
              onClick={toMenu}
              className="px-5 py-3 hover:cursor-pointer border-b-2 border-transparent hover:border-brand-color hover:text-brand-color lg:hover:bg-white lg:w-full lg:text-left"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;