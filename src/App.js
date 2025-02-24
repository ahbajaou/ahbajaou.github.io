import './App.css';

import React from 'react';
import { useEffect, useRef, useState } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { BezierAnimation } from './compoment/animation.jsx'

import img from './assets/a.png'
import img1 from './assets/coding.png'

const YELLOW_COLOR = "#E1DACE";
const RED_COLOR = "#E1DACE";
const BLUE_COLOR = "#003366";
const BG_COLOR = "bg-[#E1DACE]";

const projects = [
  {
    id: 1,
    title: "Project Name",
    description:
      "Software Developer | Frontend Developer | React.js, Tailwind CSS | Delivered responsive projects with 50% faster load times and improved user engagement by 30%.",
    image: img1,
  },
  {
    id: 2,
    title: "Project Name",
    description:
      "Software Developer | Frontend Developer | React.js, Tailwind CSS | Delivered responsive projects with 50% faster load times and improved user engagement by 30%.",
    image: img1,
  },
  {
    id: 3,
    title: "Project Name",
    description:
      "Software Developer | Frontend Developer | React.js, Tailwind CSS | Delivered responsive projects with 50% faster load times and improved user engagement by 30%.",
    image: img1,
  },
];
const skills = [
  { id: 1, category: "Programming", skills: ["JavaScript", "React.js", "Django", "Three.js"] },
  { id: 2, category: "Soft Skills", skills: ["Teamwork", "Communication", "Problem-Solving"] },
];
const ProjectCard = ({ project }) => {
  return (
      <div className="bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_black]  w-full sm:w-1/2 md:w-[20%] p-4 transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
        <div className="bg-yellow-500 p-3 rounded-t-lg flex items-center border-b-4 border-black">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
          </div>
          <h3 className="text-center flex-1 font-bold">{project.title}</h3>
        </div>
        <img src={project.image} alt="Project" className="w-full rounded-md mt-2 border-4 border-black shadow-[4px_4px_0px_black]" />
        <p className="text-black font-bold mt-3">{project.description}</p>
        <button className="bg-[#024970] text-white px-4 py-2 rounded-md mt-3 shadow-[4px_4px_0px_black] border-4 border-black transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
          View Project
        </button>
      </div>
  );
};

const LatestProjects = () => {
  return (
    <div className="py-10 px-4 md:px-20 md:h-screen ">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Projects</h2>
      <div className="flex flex-wrap md:flex-row justify-center  gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(skills[0]);

  return (
    <div className=" py-10 px-4 md:px-20 w-full md:h-[40rem]
     
    ">
    <div className='flex items-center justify-center mb-10 transition-all duration-300 hover:translate-x-1 hover:translate-y-1"'>
      <svg width="211" height="110" viewBox="0 0 211 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_260_51)">
      <mask id="path-1-inside-1_260_51" fill="white">
      <path d="M21.4922 34.2383L204.792 18.2016L210.544 83.9505L27.2445 99.9871L21.4922 34.2383Z"/>
      </mask>
      <path d="M21.4922 34.2383L204.792 18.2016L210.544 83.9505L27.2445 99.9871L21.4922 34.2383Z" fill="#E4E319"/>
      <path d="M204.792 18.2016L206.784 18.0273L206.61 16.0349L204.618 16.2092L204.792 18.2016ZM21.6665 36.2307L204.966 20.194L204.618 16.2092L21.3179 32.2459L21.6665 36.2307ZM202.8 18.3759L208.552 84.1248L212.537 83.7762L206.784 18.0273L202.8 18.3759Z" fill="black" mask="url(#path-1-inside-1_260_51)"/>
      </g>
      <path d="M26.7254 26.9657L28.3322 36.0016C28.4539 36.6858 29.15 37.1066 29.8124 36.8964L38.5419 34.1253C39.5366 33.8095 40.1151 35.2177 39.1857 35.6924L31.155 39.794C30.5174 40.1196 30.3291 40.9423 30.7616 41.5128L36.2172 48.7098C36.8452 49.5383 35.7214 50.5538 34.9606 49.8453L28.1824 43.5337C27.6832 43.0689 26.8916 43.1382 26.4807 43.6826L20.9015 51.0754C20.2753 51.9052 18.9922 51.1002 19.4668 50.1753L23.5898 42.1403C23.9166 41.5033 23.5883 40.7258 22.9039 40.5158L14.283 37.8711C13.2853 37.565 13.6105 36.0778 14.6449 36.216L23.7229 37.4291C24.4118 37.5212 25.0242 36.9859 25.0252 36.2909L25.0386 27.1132C25.0401 26.0763 26.5439 25.9447 26.7254 26.9657Z" fill="#F7F8F6" stroke="black" stroke-width="0.3"/>
      <path d="M94.769 54.3291C94.6696 53.3987 94.2505 52.6743 93.5119 52.1558C92.7804 51.6373 91.8287 51.3781 90.6568 51.3781C89.8329 51.3781 89.1262 51.5024 88.5368 51.751C87.9473 51.9996 87.4963 52.3369 87.1838 52.763C86.8713 53.1892 86.7115 53.6757 86.7044 54.2226C86.7044 54.6771 86.8074 55.0713 87.0133 55.4051C87.2264 55.7389 87.514 56.023 87.8762 56.2574C88.2385 56.4846 88.6397 56.6764 89.0801 56.8327C89.5204 56.9889 89.9643 57.1203 90.4118 57.2268L92.4572 57.7382C93.2811 57.93 94.073 58.1892 94.8329 58.5159C95.6 58.8426 96.2853 59.2545 96.889 59.7517C97.4998 60.2488 97.9828 60.849 98.3379 61.5521C98.693 62.2552 98.8706 63.0791 98.8706 64.0237C98.8706 65.3021 98.5439 66.4278 97.8904 67.4008C97.237 68.3667 96.2924 69.1231 95.0566 69.67C93.8279 70.2098 92.34 70.4797 90.5929 70.4797C88.8954 70.4797 87.4217 70.2169 86.1717 69.6913C84.9288 69.1657 83.9558 68.3987 83.2527 67.3902C82.5566 66.3817 82.1802 65.153 82.1234 63.7041H86.0119C86.0687 64.464 86.3031 65.0961 86.715 65.6004C87.127 66.1047 87.6632 66.4811 88.3237 66.7297C88.9913 66.9782 89.737 67.1025 90.5609 67.1025C91.4203 67.1025 92.1731 66.9747 92.8194 66.719C93.4728 66.4562 93.9842 66.094 94.3535 65.6324C94.7228 65.1636 94.911 64.6167 94.9181 63.9917C94.911 63.4236 94.7441 62.9548 94.4174 62.5855C94.0907 62.2091 93.6326 61.8966 93.0431 61.648C92.4608 61.3923 91.7789 61.165 90.9977 60.9662L88.5154 60.327C86.7186 59.8653 85.2981 59.1657 84.2541 58.2282C83.2172 57.2836 82.6987 56.0301 82.6987 54.4676C82.6987 53.1821 83.0467 52.0564 83.7427 51.0905C84.4458 50.1246 85.4011 49.3753 86.6085 48.8426C87.8159 48.3028 89.1831 48.0329 90.7101 48.0329C92.2583 48.0329 93.6149 48.3028 94.7797 48.8426C95.9515 49.3753 96.8713 50.1175 97.5389 51.0692C98.2065 52.0138 98.551 53.1004 98.5723 54.3291H94.769ZM105.739 65.0145L105.729 60.3589H106.347L112.227 53.7858H116.734L109.5 61.8398H108.701L105.739 65.0145ZM102.224 70.1494V48.3312H106.08V70.1494H102.224ZM112.494 70.1494L107.167 62.7027L109.766 59.9861L117.107 70.1494H112.494ZM119.304 70.1494V53.7858H123.16V70.1494H119.304ZM121.243 51.4633C120.632 51.4633 120.106 51.2609 119.666 50.8561C119.226 50.4442 119.006 49.9505 119.006 49.3753C119.006 48.7929 119.226 48.2993 119.666 47.8944C120.106 47.4825 120.632 47.2765 121.243 47.2765C121.861 47.2765 122.386 47.4825 122.819 47.8944C123.26 48.2993 123.48 48.7929 123.48 49.3753C123.48 49.9505 123.26 50.4442 122.819 50.8561C122.386 51.2609 121.861 51.4633 121.243 51.4633ZM130.983 48.3312V70.1494H127.126V48.3312H130.983ZM147.882 58.1111L144.366 58.4946C144.267 58.1395 144.093 57.8057 143.844 57.4932C143.602 57.1807 143.276 56.9285 142.864 56.7368C142.452 56.545 141.948 56.4491 141.351 56.4491C140.548 56.4491 139.874 56.6231 139.327 56.9711C138.787 57.3192 138.521 57.7702 138.528 58.3241C138.521 58.8 138.695 59.1871 139.05 59.4854C139.412 59.7836 140.009 60.0287 140.84 60.2204L143.631 60.817C145.179 61.1508 146.33 61.68 147.083 62.4044C147.843 63.1288 148.226 64.077 148.233 65.2488C148.226 66.2787 147.924 67.1878 147.328 67.9761C146.738 68.7574 145.918 69.3682 144.867 69.8085C143.816 70.2488 142.608 70.469 141.244 70.469C139.242 70.469 137.629 70.05 136.408 69.2119C135.186 68.3667 134.458 67.1913 134.224 65.6856L137.985 65.3234C138.155 66.0621 138.517 66.6196 139.071 66.996C139.625 67.3724 140.346 67.5606 141.234 67.5606C142.15 67.5606 142.885 67.3724 143.439 66.996C144 66.6196 144.281 66.1544 144.281 65.6004C144.281 65.1317 144.1 64.7446 143.737 64.4392C143.382 64.1338 142.828 63.8994 142.075 63.7361L139.284 63.1501C137.715 62.8234 136.553 62.273 135.801 61.4988C135.048 60.7176 134.675 59.7304 134.682 58.5372C134.675 57.5287 134.948 56.6551 135.502 55.9165C136.063 55.1707 136.841 54.5954 137.835 54.1906C138.837 53.7787 139.991 53.5727 141.298 53.5727C143.215 53.5727 144.725 53.9811 145.825 54.7979C146.933 55.6146 147.619 56.719 147.882 58.1111Z" fill="black"/>
      <defs>
      <filter id="filter0_d_260_51" x="11.4922" y="18.2012" width="199.053" height="91.7861" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-10" dy="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_51"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_51" result="shape"/>
      </filter>
      </defs>
      </svg>
  </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:h-[20rem]">
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <button
              key={skill.id}
              className={`bg-[#E1DACE] px-6 py-3 border-4 border-black shadow-[4px_4px_0px_black] font-bold text-lg
                       transition-all duration-300 hover:translate-x-1 hover:translate-y-1

                ${selectedCategory.id === skill.id ? 'bg-yellow-300' : ''}`}
              onClick={() => setSelectedCategory(skill)}
            >
              {skill.category}
            </button>
          ))}
        </div>
        <div className="bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_black]  w-full md:w-2/3 p-6
                transition-all duration-300 hover:translate-x-1 hover:translate-y-1

        ">
          <div className="bg-yellow-500 p-3 rounded-t-lg flex items-center border-b-4 border-black">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="w-3 h-3 bg-black rounded-full"></span>
            </div>
            <h3 className="text-center flex-1 font-bold">{selectedCategory.category} Skills</h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {selectedCategory.skills.map((skill, index) => (
              <span
                key={index}
                className=" bg-[#E1DACE] px-6 py-3 border-2 border-black  rounded-[24px] font-bold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <><div className="w-full min-h-screen flex items-center justify-center flex-col">
      {/* <div className='absolute top-5 left-0 z-[3000]'>
       <BezierAnimation/>
      </div> */}
        <nav className="z-[2000] w-full sm:w-[90%] md:w-[80%] mx-auto my-5 flex justify-between items-center bg-[#E1DACE] px-6 py-3 rounded-lg border-4 border-black shadow-[6px_6px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
          <h1 className="font-bold text-3xl sm:text-4xl tracking-wide">AB.</h1>
          <ul className="hidden sm:flex space-x-4 md:space-x-8 font-semibold text-lg sm:text-xl">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Project</li>
          </ul>
        </nav>
        <div className=" z-[4000] w-full md:min-h-screen md:w-[80%] px-4 sm:px-10 flex flex-col sm:flex-row gap-10 sm:gap-20 items-center">
          <div className="text-center sm:text-left w-full sm:w-1/2">
            <h1 className="text-7xl md:text-9xl font-extrabold uppercase leading-[1.1]">
              WHO
              <span className="inline-flex items-center justify-center w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[150px] md:h-[150px] bg-[#024970] rounded-full text-black text-6xl sm:text-7xl md:text-9xl">
              IS</span> 
               AHMED
            </h1>
            <p className="mt-4 text-lg font-semibold">
              Aspiring Web Developer | React.js, TypeScript, Tailwind CSS | Seeking Internship to Contribute to Innovative Web Projects.
            </p>
            <button className="mt-6 bg-[#024970] px-5 sm:px-6 py-3 font-bold rounded-lg border-4 border-black shadow-[6px_6px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
              My Resume
            </button>
          </div>
        </div>
        <LatestProjects />
        <SkillsSection/>
      </div>
      <div className='min-h-64 w-full bg-[#024970] flex items-center justify-center'>
        <div className='text-[#E1DACE] text-center'>
          <h1 className='text-xl font-bold'>GET IN TOUCH</h1>
          <p>Connect with me on LinkedIn or email me at ahmedbajaou@gmail.com</p>
          <div className='flex justify-center mt-3 gap-3'>
            <TiSocialLinkedinCircular size={40} />
            <FaGithub size={40} />
          </div>
        </div>
      </div></>
  );
};

export default Portfolio;
