"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
 

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        {/* all content */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          <div className='flex  gap-96'>
            {/* logo */}
            <div>
            <h2 className="title-font font-extrabold text-blue-950 tracking-widest text-xl mb-3">
              My Blog
            </h2>
            </div>
              {/* Toggle Button for mobile */}
            <div>  <button
              className="text-black block items-end text-end md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
            </div>
          </div>

          {/* links - animated sliding nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black">
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href='/#'>Home</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/about_me">About</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/#blogcart">Blog</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/contact_me">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center">
            {/* Search bar - hidden on small screens */}
            <div className="hidden lg:flex w-full bg-gray-200 rounded-md items-center">
              <input
                className="w-full p-1 rounded-md bg-gray-200 outline-none"
                type="search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl ml-3 rounded bg-blue-950 px-1 py-1 text-white"
              />
            </div>

          
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;

