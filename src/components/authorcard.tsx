import Link from 'next/link'
import React from 'react'

export default function authorcard() {
  return (
    <div className='bg-white shadow-lg  rounded-lg p-6 mt-12 '>
      <div  className='flex items-center animation-fadeIn'>
       <div>
        <h3 className='text-xl font-bold'>Fatima Akif </h3>
        <p className='text-slate-500'> Student | Web Developer</p>
       </div>
      </div>

      <p> Fatima AKIF a dedicated web developer and data scientist.
Currently pursuing a BS in Economics and Finance at NED University.
I've been passionate about technology since 2023 when I first enrolled
in a web and app development course at SMIT. This ignited my interest
in programming, leading me to pursue a Certified Cloud Applied
Generative AI Engineer (GenEng) certification from GIAIC</p>

<div className='mt-4 flex  space-x-3'>
<Link href='https://www.linkedin.com/in/fatima-akif-312640278/' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
LinkedIN</Link>

<Link href='https://github.com/FATIIMA29' className='px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300'>
GitHub</Link>


</div>

      
    </div>
  )
}
