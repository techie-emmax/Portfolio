import React, { useState, useEffect, useRef } from "react"; 
import { NavLink } from "react-router-dom";
import {
  House,
  UserRound,
  Contact,
  GalleryHorizontalEnd,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isMenuButton, setIsMenuButton] = useState(false);
  const [open, setOpen] = useState(false);

 
  const navRef = useRef(null);

  useEffect(() => {
    document.title = `Techie-Emmax-Portfolio`;

   
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuButton(false);
      }
    };

  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
   
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setIsMenuButton(false);

  return (
 
    <div ref={navRef} className="sticky top-0 flex flex-row items-center justify-center bg-linear-to-r from-[#d8d5d5] to-gray-250 backdrop-blur-lg p-8 md:p-5 gap-[60%] z-30 md:gap-[28%] w-full">
      <img
        src="emerald creative logo.png"
        className="w-35 md:w-40 "
        alt="Logo"
      />
      
    
      <div className="hidden md:flex md:flex-row ml-15 md:ml-0 md:gap-20 bg-amber-50 p-15 md:p-7 border border-gray-100 rounded-4xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-[#313851] text-2xl font-Space-grotesk mt-4 ${
              isActive
                ? "font-bold underline hover:scale-110"
                : "hover:font-bold hover:text-[#116986ff] hover:underline hover:scale-110"
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
                  <p className="font-Space-grotesk text-[18px] text-[#313851]">
                    Home
                  </p>
                )}
              </div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-[#313851] text-2xl font-Space-grotesk mt-4 ${
              isActive
                ? "font-bold underline"
                : "hover:font-bold hover:text-[#313851] hover:underline hover:scale-110"
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
                  <p className="font-Space-grotesk text-[18px] text-[#313851]">
                    About
                  </p>
                )}
              </div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-[#313851] text-2xl font-Space-grotesk mt-4 ${
              isActive
                ? "font-bold underline"
                : "hover:text-[#116986ff] hover:font-bold hover:underline hover:scale-110"
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
                  <p className="font-Space-grotesk text-[18px] text-[#116986ff]">
                    Project
                  </p>
                )}
              </div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-[#313851] text-2xl font-Space-grotesk mt-4 ${
              isActive
                ? "font-bold underline"
                : "hover:text-[#313851] hover:font-bold hover:underline hover:scale-110"
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
                  <p className="font-Space-grotesk text-[18px] text-[#313851]">
                    Contact
                  </p>
                )}
              </div>
            </>
          )}
        </NavLink>
      </div>

      <div className="hidden  md:flex ">
        <button
          className="relative p-5 font-Space-grotesk border text-[18px] border-[#313851]  rounded-2xl"
          onClick={() => setOpen(true)}
          onDoubleClick={() => setOpen(false)}
        >
          Hire me
        </button>
      </div>

      
      <div
        className="flex items-center md:hidden cursor-pointer"
        onClick={(e) => {
            e.stopPropagation(); 
            setIsMenuButton(!isMenuButton);
        }}
      >
        {isMenuButton ? (
          <X
            size={40}
            color="#333333"
            className="border p-1 border-[#ffffff] rounded-2xl bg-[#ffffff]"
          />
        ) : (
          <Menu
            size={40}
            color="#333333"
            className="border p-1 border-[#ffffff] rounded-2xl bg-[#ffffff]"
          />
        )}
      </div>

     
      {isMenuButton && (
        <div className="z-40 absolute bg-white flex flex-col w-2/2 top-30 right-0 ml-5 shadow-lg">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-xl font-semibold border-b-4 border-b-white hover:bg-[#116986ff] hover:text-white p-4"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className="text-xl font-semibold border-b-4 border-b-white hover:bg-[#116986ff] hover:text-white p-4"
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            onClick={closeMenu}
            className="text-xl font-semibold border-b-4 border-b-white hover:bg-[#116986ff] hover:text-white p-4"
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="text-xl font-semibold border-b-4 border-b-white hover:bg-[#116986ff] hover:text-white p-4"
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;