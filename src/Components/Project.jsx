import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronsRight, ArrowBigRight} from "lucide-react";

const Project = () => {
  return (
<div>
 <h3 className="text-center mb-10 text-[35px] font-bold text-gray-900 font-Space-grotesk underline underline-offset-6">
        Featured Projects</h3>  
<div className="flex flex-col md:flex-row gap-10 p-30 md:p-5">

  <div className="w-full flex flex-row rounded-2xl mt-2 items-top bg-blue-300 p-5 justify-center gap-10">
    <p className="font-Space-grotesk font-bold text-[24px]">Kuisine Website
      <span className="block mt-5"> <NavLink to="" className="flex border rounded-2xl p-2 font-medium text-[#116986ff] text-[18px] gap-3">check out the project <ArrowBigRight size={32} color="blue" className="border rounded-full border-[#27339b] bg-[#f3f7f8] p-1"/></NavLink>
    <p className="font-medium text-[18px] mt-5 mb-5 ">A responsive repair and maintenance website  i built for managing service request and connecting with clients .</p>
    <div className="flex mt-3 flex-row gap-3">
      <p className="border border-[#ffffff] text-[18px] p-3 rounded-2xl font-medium text-[#ffffff] bg-[#116986ff]">Html</p>
      <p className="border border-[#ffffff] text-[18px] p-3 rounded-2xl font-medium text-[#ffffff] bg-[#116986ff]">TailwindCss</p>
      <p className="border border-[#7796c5] text-[18px] p-3 rounded-2xl font-medium text-[#ffffff] bg-[#116986ff]">Javascript</p>
      </div></span>
    </p>
   {/*  <div><img src="/inlance.png" className=" rounded-3xl hover:scale-110"></img></div> */}
    
  </div>
  <div className="w-full flex flex-row rounded-2xl mt-2 items-top bg-blue-300 p-5 justify-center gap-10">
    <p className="font-Space-grotesk font-bold text-[24px]">Inlance Website
      <span className="block mt-5"> <NavLink to="" className="flex border rounded-2xl p-2 font-medium text-[#116986ff] text-[18px] gap-3">check out the project <ArrowBigRight size={32} color="blue" className="border rounded-full border-[#27339b] bg-[#f3f7f8] p-1"/></NavLink>
    <p className="font-medium text-[18px] mt-5 mb-5 ">A responsive repair and maintenance website  i built for managing service request and connecting with clients .</p>
    <div className="flex mt-3 flex-row gap-3">
      <p className="border border-[#ffffff] text-[18px] p-3 rounded-2xl font-medium text-[#ffffff] bg-[#116986ff]">Html</p>
      <p className="border border-[#ffffff] text-[18px] p-3 rounded-2xl font-medium text-[#ffffff] bg-[#116986ff]">TailwindCss</p>
      <p className="border border-[#7796c5] text-[18px] p-3 rounded-2xl font-medium text-[#ffffff] bg-[#116986ff]">Javascript</p>
      </div></span>
    </p>
   {/*  <div><img src="/inlance.png" className=" rounded-3xl hover:scale-110"></img></div> */}
    
  </div>
</div>
    <div className="ml-35" >
      <div className="p-3 flex flex-col md:flex-row mt-3 rounded-2xl items-center bg-[#aab6da] gap-20 px-2 w-[53%]">
      <p className="p-1 border-l-4 text-white border-l-[#116986ff] border-b-4 border-b-[#116986ff] rounded-md flex flex-row items-center gap-5 font-Space-grotesk font-bold text-[22px]">
        Projects<ChevronsRight size={22} color="white"/>
      </p>
      <div className="flex md:flex-row flex-col gap-10 ">
        <NavLink to="https://figma-six-eta.vercel.app/" target="blank" className="border border-[#116986ff] border-t-6 border-t-[#116986ff] p-3 font-Space-grotesk">www.techty.vercel</NavLink>
        <NavLink to="https://figma-six-eta.vercel.app/" target="blank" className="border border-[#116986ff] border-t-6 border-t-[#116986ff] p-3 font-Space-grotesk">www.inlance.vercel</NavLink>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Project;
