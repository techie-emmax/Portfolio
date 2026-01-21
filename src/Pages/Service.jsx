import React from 'react';
import { NavLink } from "react-router-dom";
import {AppWindowMac, Code, ChartColumnDecreasing , SearchCheck, Lightbulb, ArrowBigRight } from "lucide-react";
const Service = () => {
  return (
    <div className="text-center">
            <h2 className="text-4xl mt-5 font-Space-grotesk font-bold">
              Service I Offer
              <span className="block font-medium text-xl mt-5">
                While I offer a wide range of services, here are the top four to
                keep things concise and impactful.
              </span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center mb-5 mt-5 gap-10">
              <div className="border-3 bg-amber-100 border-amber-300 flex flex-col items-center justify-start rounded-2xl p-3 text-left">
                <Lightbulb size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1.5 mr-[90%] mb-5"/>
                <p className="font-bold font-Space-grotesk text-2xl">
                  UI/UX Implementation
                  <span className="block mt-4 font-light text-xs md:text-xl text-justify">
                    Transforming your Figma designs into <br />
                    pixel-perfect,interactive React applications.
                    <br />I specialize in converting static designs
                    <br />into dynamic, responsive components
                    <br />while maintaining design consistency
                    <br />and implementing smooth animations <br />
                    and micro-interactions that enhance
                    <br /> user experience.
                  </span>
                </p>
              </div>
              <div className="border-3 bg-green-100 border-green-300 flex flex-col items-center justify-start rounded-2xl p-3 text-left">
                <Code size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1.5 mr-[90%] mb-5"/>
                <p className="font-bold font-Space-grotesk text-2xl">
                  React & Next.js Development
                  <span className="block mt-4 font-light text-xs md:text-xl text-justify">
                    Building scalable, production-ready web <br />
                    applications using modern React patterns <br />
                    and Next.js features. This includes server-side <br />
                    rendering, static site generation, API routes, and <br />{" "}
                    advanced optimization techniques to
                    <br />
                    ensure your application loads fast, ranks well in
                    <br />
                    search engines, and provides an exceptional
                    <br />
                    user experience across all devices.
                  </span>
                </p>
              </div>
              <div className="border-3 bg-blue-100 border-blue-400 flex flex-col items-center justify-start rounded-2xl p-3 text-left">
                <AppWindowMac size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1.5 mr-[90%] mb-5"/>
                <p className="font-bold font-Space-grotesk text-2xl">
                  Landing Pages & Websites
                  <span className="block mt-4 font-light text-xs md:text-xl text-justify">
                    Designing and developing high-converting
                    <br />
                    landing pages and corporate websites that
                    <br /> establish your professional online presence.
                    <br />I focus on conversion optimization, fast
                    <br />
                    loading times, SEO-friendly structure, and
                    <br />
                    compelling call-to-actions that drive
                    <br />
                    business results. Each page is crafted
                    <br />
                    to tell your story and convert visitors
                   into customers.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
              <div className="border-3 bg-red-200 border-red-400 flex flex-col items-center justify-start rounded-2xl p-3 text-left">
                <ChartColumnDecreasing size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1.5 mr-[90%] mb-5"/>
                <p className="font-bold font-Space-grotesk text-2xl">
                  Analytics & Dashboards
                  <span className="block mt-4 font-light text-xs md:text-xl text-justify">
                    Creating interactive data visualization <br />
                    dashboards that transform complex <br />
                    business data into actionable insights. <br />
                    Using libraries like Chart.js, D3.js, and Recharts, <br />I
                    build custom analytics interfaces that help you <br /> track
                    KPIs, monitor user behavior, and make <br />
                    data-driven decisions with real-time updates <br />
                    and intuitive filtering options
                  </span>
                </p>
              </div>
         
            </div>
          <NavLink to="/project" className="flex flex-row text-center ml-15 text-2xl text-[#116986ff]  p-4 font-medium gap-4">Projects <ArrowBigRight size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1.5 mr-[90%] mb-5"/></NavLink>
          
           
          </div>
  )
}

export default Service;