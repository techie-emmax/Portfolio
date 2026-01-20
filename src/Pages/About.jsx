import React from "react";
import { MoveRight, File } from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full mt-5 bg-white">
      <h1 className="text-center text-gray-900 font-bold font-Space-grotesk underline underline-offset-5 text-[35px]">
        About
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[20%] md:gap-[10%] mt-10 w-full p-5">
        <img
          src="my  school passport.jpg"
          className="w-[20%] hover:animate- rounded-[50%] placeholder-red-300"
        />
        <h1 className="text-4xl text-[#696767] font-medium font-Space-grotesk hover:underline-offset-5 underline-black">
         
          <span className="pb-15">
            
            <p className="text-[20px] hover:text-gray-800 hover:scale-100 md:hover:scale-110 hover:mb-5 hover:mt-5 leading-tight mt-3">
              Frontend Developer | Crafting Intuitive Web Experiences
              <br />
              <br/>
              Hello, I'm Techie-Emmax, a results-driven frontend developer with a strong passion<br /> 
              for designing and developing responsive, user-centric web applications.With 2 years<br /> 
              of experience in the industry, I've developed a strong expertise in HTML, CSS, <br />
              JavaScript,and React. I've successfully delivered numerous projects,ranging from <br />
              complex web applications to sleek marketing websites, and have a keen eye for <br />
              UI/UX best practices.<br />
              <br/>
              I'm driven by a passion for creating web experiences that are not only visually <br />
              stunning but also accessible, performant, and scalable. I believe that great code <br />
              should be readable, maintainable,and efficient. My approach is centered around the user.
              <br /> I take the time to understand their needs, pain points, and goals, and craft solutions<br/> 
              that meet their objectives and exceed their expectations. Outside of coding, I enjoy exploring<br/>
              new technologies, trying out new recipes,and geeking out over the latest web trends.
            </p>
            <p className="text-sm hover:text-gray-800 hover:scale-100 md:hover:scale-110 text-[20px] hover:mt-5">
              If you're looking for a dedicated and passionate frontend developer to help bring your project to life, <br />
              I'd love to hear from you. Let's collaborate to create something amazing. Feel free to customize it<br/> to fit your style and
              experience!
            </p>
             <button to="/My Resume.pdf" target="blank" className="bg-green-200 flex gap-5 rounded-b-2xl border-gray-800 text-[#116986ff] mt-3 p-3 font-Space-grotesk text-[24px]">View Resume <File className="animate-bounce"/></button>
          </span>
        </h1>
        
       
       
      </div>
      <div className="p-10 flex gap-20">
      <div>
        <h1 className="mt-6 bg-[#116986ff] text-xl md:text-4xl p-2 text-[#f0f0f0] font-medium font-Space-grotesk text-center">
        Skills
        </h1>
        <div className="bg-blue-50 w-[90%] ml-4 md:ml-30 mt-5">
          <marquee>
            <div className="flex flex-row gap-20 mt-5 w-80%">
              <p className="border-b-5 border-b-[#6F7681] border-r-5 border-r-[#7aa2e2] rounded-2xl p-4 font-Space-grotesk">
                HTML
              </p>
              <p className="border-b-5 border-b-[#6F7681] border-r-5 border-r-[#7aa2e2] rounded-2xl p-4 font-Space-grotesk">
                CSS
              </p>
              <p className="border-b-5 border-b-[#6F7681] border-r-5 border-r-[#7aa2e2] rounded-2xl p-4 font-Space-grotesk">
                Tailwind CSS
              </p>
              <p className="border-b-5 border-b-[#6F7681] border-r-5 border-r-[#7aa2e2] rounded-2xl p-4 font-Space-grotesk">
                BOOTSTRAP
              </p>
              <p className="border-b-5 border-b-[#6F7681] border-r-5 border-r-[#7aa2e2] rounded-2xl p-4 font-Space-grotesk">
                JAVASCRIPT
              </p>
              <p className="border-b-5 border-b-[#6F7681] border-r-5 border-r-[#7aa2e2] rounded-2xl p-4 font-Space-grotesk">
                REACT JS
              </p>
            </div>
          </marquee>
        </div>
      </div>
      
      </div>
      </div>
   
  );
};

export default About;
