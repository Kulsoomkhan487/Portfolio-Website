"use client";
import Link from 'next/link'
import React,{useState} from 'react'
import NavLink from './NavLink';
import { title } from 'process'
import path from 'path/posix'
import { link } from 'fs'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';


const Navlink = 
  [
    {
      title: "About",
      path: "#about"
    },
    {
      title: "Projects",
      path: "#projects"
    },
    {
      title: "Contact",
      path: "#contact"
    }
  ];
  

const Navbar = () => {
  const [navbarOpen , setnavbarOpen] = useState(false);
  return (
   <nav className='fixed top-0 left-0 right-0 z-14 bg-[#121212] bg-opacity-100 min-h-[70px]'>
    <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
    <Link href={"/"} className=' text-2xl md:text-2xl text-white font-semibold'>
     Skill Spotlight
    </Link>
    <div className='mobile-menu block md:hidden'>
    {!navbarOpen ? (
    <button onClick={() => setnavbarOpen(true)}className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
      <Bars3Icon className='h-5 w-5'/>
    </button>
  ) : (
    <button onClick={() => setnavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
      <XMarkIcon className='h-5 w-5'/>
    </button>
  )
}

    </div>
    <div className='menu hidden md:block md:w-auto id="navbar'>
    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'> 
    {
      Navlink.map((link, index) => (
        <li key={index}>
        <NavLink href={link.path} title={link.title} ></NavLink>
        </li>
      ))
    }

     </ul>
    </div> 
    </div>
    {navbarOpen ? <MenuOverlay links={Navlink} /> : null}

    </nav>
  )
}
export default Navbar