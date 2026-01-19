import React, { useState } from "react";
import {  Facebook,Instagram,Linkedin,Github,ChevronsRight,} from "lucide-react";
import { NavLink } from "react-router-dom";

const Socials = () => {
  const [first, setIsFirst] = useState([]);
   const [second, setIsSecond] = useState([]);

  return (
    <div className="p-3 flex flex-row mt-3 rounded-2xl items-center bg-[#aab6da] gap-20 px-2">
      <p className="p-1 border-l-4 border-l-[#116986ff] border-b-4 border-b-[#116986ff] text-white rounded-md flex flex-row items-center gap-5 font-Space-grotesk font-bold text-[22px]">
        Socials <ChevronsRight size={22} color="white"/>
      </p>
      <marquee>
        <div className="flex flex-row gap-30 ml-3 md:ml-20 mr-2 md:mr-40">
          <NavLink to="">
            <Linkedin
              size={48}
               color="white"
              className="relative border border-r-6 border-b-6 border-[#116986ff] p-2 rounded-2xl"
              onMouseEnter={() => setIsFirst(true)}
              onMouseLeave={() => setIsFirst(false)}
            />
            {first && <p>LinkedIn</p>}
          </NavLink>
          <NavLink to="">
            <Github
              size={48}
               color="white"
              className="relative border border-r-6 border-b-6 border-[#116986ff] p-2 rounded-2xl"
               onMouseEnter={() => setIsSecond(true)}
              onMouseLeave={() => setIsSecond(false)}
            />
             {second && <p>GitHub</p>}
          </NavLink>
          <NavLink to="">
            <Instagram
              size={48}
              color="white"
              
              className="border border-r-6 border-b-6 border-[#116986ff] p-2 rounded-2xl"
            />
          </NavLink>
          <NavLink to="">
            <Facebook
              size={48}
               color="white"
              className="border border-r-6 border-b-6 border-[#116986ff] p-2 rounded-2xl"
            />
          </NavLink>
        </div>
      </marquee>
    </div>
  );
};

export default Socials;
