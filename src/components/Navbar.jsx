// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { EnvelopeFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed text-white top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
        scrolling ? "bg-[#00000066]" : "bg-transparent"
      }`}
    >
      <div className="w-full  flex justify-between md:justify-around items-center">
        <div>
          <div>
            <h2 className="font-montez text-xl md:text-2xl lg:text-3xl mt-0 font-bold">
              Creaftech.
            </h2>
            <p className="text-xs font-montserrat mt-6 mb-[-10px] font-bold">
              Brand Web Designer in Lagos
            </p>
          </div>
        </div>

        {/* navigation menu */}
        <div className="hidden  sm:hidden lg:block flex justify-between w-2/4">
          <button className="p-2 tracking-widest decoration-[#9a89fe] h-12 hover:underline underline-offset-[17px]">
            HOME
          </button>
          <button className="p-2 tracking-widest decoration-[#9a89fe] hover:underline underline-offset-[17px]">
            ABOUT
          </button>
          <button className="p-2 tracking-widest decoration-[#9a89fe] h-12 hover:underline underline-offset-[17px]">
            PORTFOLIO
          </button>
          <button className="p-2 tracking-widest decoration-[#9a89fe] h-12 hover:underline underline-offset-[17px]">
            UX & WEB WRITING
          </button>
          <button className="p-2 tracking-widest decoration-[#9a89fe] h-12 hover:underline underline-offset-[17px]">
            CONTACT
          </button>
        </div>

        {/* desktop Contacts */}

        {/* Contacts */}

        <div className="hidden lg:block">
          <button className="mr-1 ">
            <EnvelopeFill
              size={30}
              className="transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 hover:text-[#4F3D65] duration-300"
            />
          </button>
          <button className="mr-1 ">
            <Linkedin
              size={30}
              className="transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 hover:text-[#4F3D65] duration-300"
            />
          </button>
        </div>

        <div className="flex justify-between items-center lg:hidden w-1/5">
          {/* Contacts */}

          <div className="flex">
            <button className="mr-1 ">
              <EnvelopeFill
                size={20}
                className="transition  ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 hover:text-[#4F3D65] duration-300"
              />
            </button>
            <button className="mr-1 ">
              <Linkedin
                size={20}
                className="transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 hover:text-[#4F3D65] duration-300"
              />
            </button>
          </div>
          {/* toggleer for menu */}
          <div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex md:items-center md:p-2 md:w-10 md:h-10 md:justify-center text-sm rounded-lg lg:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
