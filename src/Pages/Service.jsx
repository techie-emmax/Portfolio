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
            <div className="flex flex-col md:flex-row justify-center m-15 md:m-5 gap-10">
              <div className="border-3 bg-amber-100 border-amber-300 flex flex-col justify-start rounded-2xl p-5 text-left">
                <Lightbulb size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1 mr-[65%] md:mr-[90%] mb-5"/>
                <p className="font-bold font-Space-grotesk text-2xl">
                  UI/UX Implementation
                  <span className="block mt-4 font-light text-xs md:text-xl md:text-justify">
                    Transforming your Figma designs into <br />
                    pixel-perfect,interactive React applications.
                    <br className='hidden md:block'/> I specialize in converting static designs
                    <br className='hidden md:block'/>into dynamic, responsive components
                    <br className='hidden md:block'/>while maintaining design consistency
                    <br className='hidden md:block'/>and implementing smooth animations <br className='hidden md:block'/>
                    and micro-interactions that enhance
                    <br /> user experience.
                  </span>
                </p>
              </div>
              <div className="border-3 bg-green-100 border-green-300 flex flex-col items-center justify-start rounded-2xl p-3 text-left">
                <Code size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1 mr-[90%] mb-5"/>
                <p className="font-bold font-Space-grotesk text-2xl">
                  React & Next.js Development
                  <span className="block mt-4 font-light text-xs md:text-xl md:text-justify">
                    Building scalable, production-ready web <br className='hidden md:block'/>
                    applications using modern React patterns <br className='hidden md:block'/>
                    and Next.js features. This includes server-side <br className='hidden md:block'/>
                    rendering, static site generation, API routes, and <br className='hidden md:block'/>
                    advanced optimization techniques to
                    <br className='hidden md:block'/>
                    ensure your application loads fast, ranks well in
                    <br className='hidden md:block'/>
                    search engines, and provides an exceptional
                    <br className='hidden md:block'/>
                    user experience across all devices.
                  </span>
                </p>
              </div>
              <div className="border-3 bg-blue-100 border-blue-400 flex flex-col items-center justify-start rounded-2xl p-7 text-left">
                <AppWindowMac size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1.5 mr-[80%] md:mr-[90%] mb-5"/>
                <p className="font-bold font-Space-grotesk text-2xl">
                  Landing Pages & Websites
                  <span className="block mt-4 font-light text-xs md:text-xl md:text-justify">
                    Designing and developing high-converting
                    <br className='hidden md:block'/> landing pages and corporate websites that
                    <br className='hidden md:block'/> establish your professional online presence.
                    <br className='hidden md:block'/>I focus on conversion optimization, fast
                    <br className='hidden md:block'/>
                    loading times, SEO-friendly structure, and
                    <br className='hidden md:block'/>
                    compelling call-to-actions that drive
                    <br className='hidden md:block'/>
                    business results. Each page is crafted
                    <br className='hidden md:block'/>
                    to tell your story and convert visitors
                   into customers.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center -3 gap-10 mb-10">
              <div className="border-3 bg-red-200 border-red-400 flex flex-col items-center justify-start rounded-2xl p-6 text-left">
                <ChartColumnDecreasing size={44} color="blue" className="border rounded-full border-[#6a828a] bg-[#f3f7f8] p-1.5 mr-[90%] mb-5"/>
                <p className="font-bold font-Space-grotesk text-2xl">
                  Analytics & Dashboards
                  <span className="block mt-4 font-light text-xs md:text-xl md:text-justify">
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
           
          </div>
  )
}

export default Service;