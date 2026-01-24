import React from "react";
import Header from "../Components/Header";
import About from "../Pages/About";
import { Download, Instagram, Github, Linkedin, Eclipse ,ArrowBigRight , Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import Service from "../Pages/Service";

const Home = () => {
  return (
    <div className="bg-full w-full">
      <div className="flex flex-col gap-[30%] pt-20 md:pt-40 justify-center bg-[#9ba1b3] bg-full w-full items-center">
        <div className="border border-[#116986ff] hover:animate-bounce p-8 border-b-7 border-b-[#116986ff] border-r-10 border-r-[#116986ff] rounded-md">
          <p className="text-3xl md:text-7xl font-Space-grotesk text-[#116986ff] p-5 shadow-amber-300 font-medium shadow-lg">
            Hi I'm Techie Emmax.
            <br />
            Front End Developer
            <span className="block font-light text-4xl text-black"></span>
          </p>
        </div>
        <p className="text-black mt-3 font-medium font-Space-grotesk p-3 md:p-0 hover:animate-pulse text-xl text-center">
          Specialize in building high performance end user interface,that are
          intuitive and fully responsive.
          <br /> Turning complex design concepts into seamless engaging user
          experience is my core focus.
        </p>

        <div className="mb-10 md:mb-36 mt-5">
          <div className="flex flex-row gap-[10%]">
            <span className="flex animate-pulse flex-row gap-10 p-5 md:p-2 rounded-2xl">
              <div className="flex border rounded-4xl p-5 flex-col gap-3 text-white font-Space-grotesk">
                <NavLink
                  to="https://github.com/techie-emmax"
                  className="text-white"
                >
                  <Github />
                </NavLink>
              </div>
              <div className="flex border rounded-4xl p-5 flex-col text-white gap-3 font-Space-grotesk">
                <NavLink to="" className="text-white">
                  <Linkedin />
                </NavLink>
              </div>
              <div className="flex border rounded-4xl p-5 flex-col text-white gap-3 font-Space-grotesk">
                <NavLink to="" >
                  <Instagram />
                </NavLink>
              </div>
              <div className="flex border rounded-4xl p-5 flex-col text-white gap-3 font-Space-grotesk">
                <NavLink className="text-white" >
                  <Mail />
                  </NavLink>
              </div>
              
            </span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white pt-6 pb-6">
        <h2 className="text-center mt-13 mb-13 text-3xl font-Space-grotesk">
          Delivering high-quality digital experiences for startups and
          businesses worldwide.
        </h2>
        <span className="flex flex-col md:flex-row md:justify-center items-center space-y-5 md:space-x-28">
          <p className="border border-b-3 rounded-b-2xl p-3 text-center font-Space-grotesk font-bold">
            2+
            <br />
            Years of experience
          </p>
          <p className="border border-b-3 rounded-b-2xl p-3 text-center font-Space-grotesk font-bold">
            4.8★
            <br />
            Client Satisfaction Rating
          </p>
          <p className="border border-b-3 rounded-b-2xl p-3 text-center font-Space-grotesk font-bold">
            30+
            <br />
            Web Projects Delivered
          </p>
        </span>
        <button className="border bg-[#116986ff] text-white mt-15 p-4 rounded-3xl font-medium ">
          Start a Project
        </button>
      </div>

      <Service/>
      <NavLink to="/project" className="flex flex-row text-center ml-15 text-2xl text-[#116986ff]  p-4 font-medium gap-4">Projects <ArrowBigRight size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1.5  mb-5"/></NavLink>
    </div>
  );
};

export default Home;
