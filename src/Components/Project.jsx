import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronsRight} from "lucide-react";

const Project = () => {
  return (
<div>
 
<div>
  <div className="flex flex-row">
    <p>Inlance Website</p>
    <p></p>
    <img></img>
  </div>
</div>
    <div>
      <p className="text-center mb-10 text-[35px] font-bold text-gray-900 font-Space-grotesk underline underline-offset-6">
        Featured Projects</p>  <div className="p-3 flex flex-row mt-3 rounded-2xl items-center bg-[#aab6da] gap-20 px-2 w-[53%]">
      <p className="p-1 border-l-4 text-white border-l-[#116986ff] border-b-4 border-b-[#116986ff] rounded-md flex flex-row items-center gap-5 font-Space-grotesk font-bold text-[22px]">
        Projects<ChevronsRight size={22} color="white"/>
      </p>
      <div className="flex flex-row gap-10">
        <NavLink to="https://figma-six-eta.vercel.app/" target="blank" className="border border-[#116986ff] border-t-6 border-t-[#116986ff] p-3 font-Space-grotesk">www.techty.vercel</NavLink>
        <NavLink to="https://figma-six-eta.vercel.app/" target="blank" className="border border-[#116986ff] border-t-6 border-t-[#116986ff] p-3 font-Space-grotesk">www.inlance.vercel</NavLink>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Project;
