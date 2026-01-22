import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
      <div>
    <div className='flex flex-col md:flex-row items-top gap-10 md:gap-44 bg-[#116986ff] mt-15'>
      <h3 className='font-Space-grotesk text-gray-400 font-medium text-[24px]'>Let's build something awesome</h3>
      <div className='flex flex-col items-center'>
        <h3 className='font-Space-grotesk text-[24px] font-bold '>Connect</h3>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="mailto:techieemmax@gmail.com">E-mail</NavLink>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="">LinkedIn</NavLink>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <h3 className='font-Space-grotesk text-[24px] font-bold '>Socials</h3>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="/">Home</NavLink>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="/about">About</NavLink>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="/project">Projects</NavLink>
        <NavLink className="text-white font-Space-grotesk text-[18px]" to="/Conntact">Contact</NavLink>
        </div>
      </div>
      <p className='text-center mt-1 font-regular font-Space-grotesk text-sm bg-[#116986ff] md:text-[18px] text-[#d5d8e2]'>Copyright © {new Date().getFullYear()} Techie-Emmax.
        All Rights Reserved</p>
      </div>
  )
}

export default Footer