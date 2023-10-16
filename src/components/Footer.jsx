import React from 'react'
import { EnvelopeFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";


const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-[#091224] h-[50px] flex px-7 justify-between text-white">
          <div>
            <h2 className="font-montez text-xl md:text-2xl lg:text-3xl mt-0 font-bold">
              Creaftech.
            </h2>
            <p className="text-[5px] font-montserrat mt-2 mb-[-10px] font-bold">
              SEO-Savvy Web Designer in Lagos
            </p>
          </div>
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
        </div>

        <div className="flex justify-between p-7 text-white bg-black">
          <div className='text-xs'>
            <p>Kraftle ©2022 All Rights Reserved.</p>
          </div>
          <div className='text-xs'>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer