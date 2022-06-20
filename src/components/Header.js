import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="z-10 shadow-2xl shadow-neutral-100 h-auto py-4 flex flex-row items-center sticky top-0 bg-white">
      <div className="container mx-auto flex flex-row items-center justify-between">
        {/* <img
          src="/logo.png"
          alt="logo"
          className="object-contain w-20 h-auto"
        /> */}
        <h1 className="text-4xl">
          <Link to="/">arovix</Link>
        </h1>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col slide-bottom md:animate-none inset-x-0 -top-8 md:top-0 md:h-full absolute md:relative md:flex-row p-8 md:p-0 bg-white`}
        >
          <div className="navigation md:flex  md:items-center divide-y-0 md:divide-y-0 md:divide-x space-y-4 md:space-y-0 md:space-x-6">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 lg:space-x-10 font-gmedium">
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer hover:text-blue-300 md:py-4"
              >
                <Link className="block h-full" to={"/"}>
                  Home
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer hover:text-blue-300 md:py-4"
              >
                <Link className="block" to={"/about"}>
                  About
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer hover:text-blue-300 md:py-4"
              >
                <Link className="block h-full" to={"/sales"}>
                  Sales
                </Link>
              </li>
              <li className="cursor-pointer relative md:py-4 group">
                <div className="flex flex-row gap-1 items-center">
                  <p>Courses</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
                <ul className="bg-white border rounded top-6 md:top-12 mt-14 group-hover:mt-0 py-2  invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-[15px] absolute w-full md:w-[200px]">
                  <li
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer hover:text-blue-300"
                  >
                    <Link className="block p-3 hover:bg-slate-50" to={"/internet"}>
                      The Internet
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer hover:text-blue-300"
                  >
                    <Link className="block p-3 hover:bg-slate-50" to={"/web"}>
                      Web3.0
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer hover:text-blue-300"
                  >
                    <Link className="block p-3 hover:bg-slate-50" to={"/darkweb"}>
                    Deep web and dark web
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer hover:text-blue-300"
                  >
                    <Link className="block p-3 hover:bg-slate-50" to={"/function-of-the-internet"}>
                    Function of internet
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer hover:text-blue-300"
                  >
                    <Link className="block p-3 hover:bg-slate-50" to={"/cybercrime"}>
                    Cybercrime
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-point hover:text-blue-300"
                  >
                    <Link className="block p-3 hover:bg-slate-50" to={"/cybersecurity"}>
                    Cybersecurity
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer hover:text-blue-300 md:py-4"
              >
                <Link className="block" to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-5 md:pt-0 md:pl-5 flex flex-row items-center space-x-3">
              <Button text="Get Started" />
            </div>
          </div>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black ml-auto"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
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
              class="h-8 w-8"
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
