import React from "react";
import { ArrowBigRight } from "lucide-react";

const projectsData = [
  {
    title: "Kuisine Website",
    link: "#",
    description:
      "Designed and developed a responsive Kuisine website showcasing recipes, food photography and a blog for food enthusiasts.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Photography Website",
    link: "https://photography-lemon.vercel.app",
    description:
      "Where code meets frame, I blend pixels and light building responsive galleries and capturing moments.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Inlance Website",
    link: "https://copy-3-pi.vercel.app",
    description:
      "A responsive repair and maintenance website built for managing service requests and connecting with clients.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Techty Website",
    link: "https://figma-six-eta.vercel.app",
    description:
      "A responsive repair and maintenance website built for managing service requests and connecting with clients.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
];

const Project = () => {
  return (
    <div className="w-full">
      <h3 className="text-center mb-5 text-[35px] font-bold text-gray-900 font-Space-grotesk mt-5">
        Featured Projects
      </h3>

      <div className="flex flex-row gap-8 p-15 md:p-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="w-full shadow-md shadow-gray-400 flex flex-col rounded-2xl bg-blue-300 p-6 justify-between"
          >
            <div>
              <h4 className="font-Space-grotesk font-bold text-[24px] text-gray-900">
                {project.title}
              </h4>

              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border rounded-2xl p-2 font-medium text-[#116986ff] text-[18px] gap-3 bg-white/50 hover:bg-white transition-colors"
                >
                  Check out the project
                  <ArrowBigRight
                    size={32}
                    color="blue"
                    className="border rounded-full border-[#27339b] bg-[#f3f7f8] p-1"
                  />
                </a>
              </div>

              <p className="font-medium text-[18px] mt-5 mb-5 text-gray-800">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-3">
              {project.tech.map((techItem, techIndex) => (
                <span
                  key={techIndex}
                  className="border border-white text-[16px] px-4 py-2 rounded-2xl font-medium text-white bg-[#116986ff]"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
