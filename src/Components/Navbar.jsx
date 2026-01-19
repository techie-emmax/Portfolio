import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {  House, UserRound, Contact, GalleryHorizontalEnd, Menu } from "lucide-react";

const Navbar = () => {
  
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [menubutton, setMenubutton] = useState(false);
  const [open,setOpen] = useState(false);
  return (
    <div className="sticky top-0 flex flex-row justify-center bg-linear-to-r from-[#d8d5d5] to-gray-250 backdrop-blur-lg p-6 md:p-5 gap-[60%] md:gap-[28%] w-[100%]">
      <img src="emerald creative logo.png" className="w-40 " alt="Logo" />
      <div className="hidden md:flex md:flex-row ml-5 md:gap-20 bg-amber-50 px-15 border border-gray-100 rounded-4xl">
    
        <NavLink
          to="/"
         
          className={({ isActive }) =>
            `relative flex flex-col items-center text-[#313851] text-2xl font-Space-grotesk mt-4 ${
              isActive ? "font-bold underline hover:scale-110" : "hover:font-bold hover:text-[#116986ff] hover:underline hover:scale-110"
            }`
          }
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
        >
          {({ isActive }) => (
            <>
              <House />
              <div className="absolute top-5 font-Space-grotesk">
                {(isActive || isHomeHovered) && (
                  <p className="font-Space-grotesk text-[18px] text-[#313851]">Home</p>
                )}
              </div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-[#313851] text-2xl font-Space-grotesk mt-4 ${
              isActive ? "font-bold underline" : "hover:font-bold hover:text-[#313851] hover:underline hover:scale-110"
            }`
          }
          onMouseEnter={() => setIsAboutHovered(true)}
          onMouseLeave={() => setIsAboutHovered(false)}
        >
          {({ isActive }) => (
            <>
              <UserRound />
              <div className="absolute top-5 font-Space-grotesk">
                {(isActive || isAboutHovered) && (
                  <p className="font-Space-grotesk text-[18px] text-[#313851]">About</p>
                )}
              </div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-[#313851] text-2xl font-Space-grotesk mt-4 ${
              isActive ? "font-bold underline" : "hover:text-[#116986ff] hover:font-bold hover:underline hover:scale-110"
            }`
          }
          onMouseEnter={() => setIsPortfolioHovered(true)}
          onMouseLeave={() => setIsPortfolioHovered(false)}
        >
          {({ isActive }) => (
            <>
              <GalleryHorizontalEnd />
              <div className="absolute top-5 font-Space-grotesk">
                {(isActive || isPortfolioHovered) && (
                  <p className="font-Space-grotesk text-[18px] text-[#116986ff]">Project</p>
                )}
              </div>
            </>
          )}
        </NavLink>

        
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-[#313851] text-2xl font-Space-grotesk mt-4 ${
              isActive ? "font-bold underline" : "hover:text-[#313851] hover:font-bold hover:underline hover:scale-110"
            }`
          }
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
        >
          {({ isActive }) => (
            <>
              <Contact />
              <div className="absolute top-5 font-Space-grotesk">
                {(isActive || isContactHovered) && (
                  <p className="font-Space-grotesk text-[18px] text-[#313851]">Contact</p>
                )}
              </div>
            </>
          )}
        </NavLink>
      </div>
      <div className="hidden md:flex "><button className="relative p-5 font-Space-grotesk border text-[18px] border-[#313851] border-b-4 border-r-6 rounded-2xl" onClick={()=>setOpen(true)} onDoubleClick={()=>setOpen(false)}>Hire me</button>
      {open &&(
        <div className="absolute right-[0%] top-[200%]">
        <div className="z-20 p-5 md:p-0">  
          
                </div>
          </div>
      )}
      </div>
   <div className="flex items-center md:hidden"
        onClick={() => setMenubutton(!menubutton)}
      >
        <Menu size={40} color="#333333" />
      </div>

      {menubutton && (
        <div className="z-40 absolute bg-white flex flex-col w-1/2 top-20 right-0 ml-5">
          <NavLink
            to="/"
            className="text-xl font-semibold border-b-4 border-b-gray-100 p-4"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl font-semibold border-b-4 border-b-gray-100 p-4"
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className="text-xl font-semibold border-b-4 border-b-gray-100 p-4"
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            className="text-xl font-semibold p-4"
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;