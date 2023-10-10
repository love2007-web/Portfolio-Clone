import React from 'react'
import "../index.css";

const Hero = () => {
  return (
    <div>
      <div className="transition-all duration-[200ms]">
        <div className="main bg-[#0C1224] w-full font-montserrat text-white h-[500px] lg:h-screen bg-no-repeat bg-center bg-cover">
          <div className="pl-5 lg:pl-20 pt-24 lg:pt-44">
            <p className="text-[#a4bfbf]">Welcome, I'm Creaftech</p>
            <div className="mt-2 lg:mt-10">
              <h1 className=" text-2xl md:text-5xl font-black tracking-wide">
                Book more clients for <br /> your online business.
              </h1>
              <br />
              <p className="flex w-[220px] text-xs lg:text-sm lg:w-full flex-wrap tracking-[0.027em]">
                I can help you increase your brand visibility, visualize ideas,
                and make them come alive on a website. <br /> You will get an
                aesthetically-pleasing website that drives sales and grow your
                business
              </p>
              <br />
              <button className="bg-[#c6c6da] transition-all duration-[300ms] text-black px-5 py-2 font-bold rounded-lg hover:bg-[#58436E] hover:text-white">
                Let's Chat
              </button>
              <br />
              <br />
              <p className="font-montez italic font-medium text-5xl">
                Creaftech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero