import React from 'react'
import { NavLink } from 'react-router-dom'
import {CornerRightDown} from "lucide-react";
const Footer = () => {
  return (
      <div className='w-full'>
    <div className='flex flex-col md:flex-row items-top gap-4 md:gap-44 bg-[#116986ff] mt-15'>
      <h3 className='p-3 font-Space-grotesk text-cyan-200 font-medium text-[24px]'>Let's build something awesome <CornerRightDown size={24}/></h3>
        <div className='flex flex-col items-center gap-3'>
        <h3 className='font-Space-grotesk text-[24px] font-bold text-cyan-200'>Connect</h3>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="/">Home</NavLink>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="/about">About</NavLink>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="/project">Projects</NavLink>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="/Conntact">Contact</NavLink>
        </div>
      <div className='flex flex-col gap-3 items-center'>
        <h3 className='font-Space-grotesk text-[24px] font-bold text-cyan-200'>Socials</h3>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="mailto:techieemmax@gmail.com">E-mail</NavLink>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="">LinkedIn</NavLink>
      </div>
    
      </div>
      <p className='text-center mt-1 pt-3 pb-3 font-regular font-Space-grotesk text-sm bg-[#116986ff] md:text-[18px] text-[#d5d8e2]'>Copyright © {new Date().getFullYear()} Techie-Emmax.
        All Rights Reserved</p>
      </div>
  )
}

export default Footer