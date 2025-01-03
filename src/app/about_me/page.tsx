import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

export default function about() {
  return (
    <div className="flex flex-col md:flex-row sm:justify-around mt-10">
 
  <div className="md:w-1/2 p-8 md:p-16">
  <div className='text-center text-4xl pb-8'>
        <p className='border-b-4 inline-block pb-2 hover:text-gray-700 text-gray-800'>About Me</p>
      
    </div>
    <p className="text-sm mb-4 sm:text-sm md:lg:text-lg">Hi there! I'm Fatima AKIF, a dedicated web developer and data scientist currently pursuing a BS in Economics and Finance at NED University.</p>
    <p className="text-sm mb-8 sm:text-sm md:lg:text-lg">I've been passionate about technology since 2023 when I first enrolled in a web and app development course at SMIT. This ignited my interest in programming, leading me to pursue a Certified Cloud Applied Generative AI Engineer (GenEng) certification from GIACI.</p>

    <h1 className="text-xl font-bold mt-8 mb-4  hover:text-gray-700 text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">My Skills</h1>
    <ul className="list-disc">
      <li className="text-sm mb-2 sm:text-sm md:lg:text-lg">Frontend Development: Proficient in HTML, CSS, and JavaScript</li>
      <li className="text-sm mb-2 sm:text-sm md:lg:text-lg">Frameworks: Experienced in React and Next.js</li>
      <li className="text-sm mb-2 sm:text-sm md:lg:text-lg">Design Tools: Skilled in Figma for UI/UX design</li>
      <li className="text-sm mb-2 sm:text-sm md:lg:text-lg">Data Scientist: Currently pursuing a certification in Data Scientist from NED University</li>
    </ul>

    <h1 className="text-xl font-bold mt-8 mb-4   hover:text-gray-700 text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">Experience</h1>
    <p className="text-sm mb-2 sm:text-sm md:lg:text-lg">I'm eager to apply my skills to real-world projects and contribute to innovative solutions. I'm actively seeking opportunities to enhance my knowledge and gain practical experience.</p>
    <button data-aos="zoom-in-up" className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded sm:hover:scale-90 lg:hover:scale-110 md:hover:scale-100 " ><Link href='contact_me' >Let's connect and build something great together!</Link></button>
  
  </div>

</div>
  )
}
