import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-2xl shadow-neutral-100 h-auto py-4 flex flex-row items-center relative">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <img
          src="/logo.png"
          alt="logo"
          className="object-contain w-20 h-auto"
        />
        <nav className={`${isOpen ? "flex" : "hidden"} md:flex flex-col slide-bottom md:animate-none shadow-2xl shadow-green-100 md:shadow-none inset-x-0 -top-8 md:top-0 md:h-full absolute md:relative md:flex-row p-8 md:p-0 bg-white`}>
        
          <div className="navigation md:flex  md:items-center divide-y-0 md:divide-y-0 md:divide-x space-y-4 md:space-y-0 md:space-x-6">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 font-gmedium">
              <li className="cursor-pointer hover:text-blue-300">Home</li>
              <li className="cursor-pointer hover:text-blue-300">Portfolio</li>
              <li className="cursor-pointer hover:text-blue-300">About</li>
              <li className="cursor-pointer hover:text-blue-300">Blog</li>
              <li className="cursor-pointer hover:text-blue-300">Contact</li>
            </ul>
            <div className="pt-5 md:pt-0 md:pl-5 flex flex-row items-center space-x-3">
              <button className="bg-green-400 py-2 px-3 rounded shadow-lg text-white">
                Download CV
              </button>
            </div>
          </div>
          
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black ml-auto">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
      </div>
    </header>
  );
};

export default Header;
