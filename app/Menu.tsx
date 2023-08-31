"use client"

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const Menu: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toMenu = (menu: string) => {
    document.querySelector(`#${menu}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="items-center hidden lg:flex text-white">
        <button name="menu-icon" onClick={() => setMenuOpen(!menuOpen)} className="text-2xl p-3">
          <FontAwesomeIcon icon={menuOpen ? faClose : faBars} />
        </button>
      </div>
      <div id="myLinks" className={`flex text-white items-center flex-initial lg:flex-[1_1_100%] lg:bg-brand-color lg:transition-all lg:absolute lg:top-full lg:overflow-hidden lg:w-full lg:left-0 ${menuOpen ? 'lg:h-52' : 'lg:h-0'} `}>
        <ul className="flex flex-wrap ml-12 lg:flex-col lg:w-full lg:ml-0">
          <li><button className='px-5 py-3 hover:cursor-pointer border-b-2 border-transparent hover:border-brand-color hover:text-brand-color lg:hover:bg-white lg:w-full lg:text-left' onClick={() => toMenu('home')}>Início</button></li>
          <li><button className='px-5 py-3 hover:cursor-pointer border-b-2 border-transparent hover:border-brand-color hover:text-brand-color lg:hover:bg-white lg:w-full lg:text-left' onClick={() => toMenu('results')}>Resultados</button></li>
          <li><button className='px-5 py-3 hover:cursor-pointer border-b-2 border-transparent hover:border-brand-color hover:text-brand-color lg:hover:bg-white lg:w-full lg:text-left' onClick={() => toMenu('depoiments')}>Depoimentos</button></li>
          <li><button className='px-5 py-3 hover:cursor-pointer border-b-2 border-transparent hover:border-brand-color hover:text-brand-color lg:hover:bg-white lg:w-full lg:text-left' onClick={() => toMenu('contact')}>Contato</button></li>
        </ul>
      </div>
    </>
  )
};

export default Menu;