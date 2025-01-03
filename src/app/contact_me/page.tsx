import React from 'react'



const page = () => {
  return (
    <div id='container' data-aos="zoom-in-up" className='pt-32 container'>
        <div className='text-center text-4xl pb-8'>
        <p className='border-b-4 inline-block pb-2 hover:text-gray-700 text-gray-800'>Contact Me</p>
      
    </div>
    <div>
  <div className="mb-4">
    <label htmlFor="name" className="block text-sm">Name</label>
    <input 
      type="text" 
      className="h-[30px] mb-1 block w-full bg-transparent rounded-md border border-gray-800 text-sm" 
      id="name" 
      required 
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm">Email</label>
    <input 
      type="text" 
      className="h-[30px] mb-1 block w-full bg-transparent border rounded-md border-gray-800 text-sm" 
      id="email" 
      required 
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-sm">Message</label>
    <textarea 
      name="message" 
      rows={5} 
      id="msg" 
      className="mb-1 w-full bg-transparent border rounded-md border-gray-800 text-sm"
    ></textarea>
  </div>
  <div>
    <button 
      data-aos="zoom-in-up" 
      className="rounded-sm bg-gray-800 w-[60px] h-[30px] text-lg text-white hover:text-slate-100"
    >
      Send
    </button>
  </div>
</div>


      </div>
      
    
  )
}

export default page
