import React from 'react'
import '../index.css'

const Next = () => {
  return (
    <>
      <div className="font-montserrat pl-8 mt-60 lg:flex lg:px-[75px] transition-all duration-300">
        <div>
          <div className="w-96 font-black">
            <div className="flex flex-wrap w-60 lg:w-96">
              <h1 className="text-2xl lg:text-3xl">
                Make your business Standout
              </h1>
            </div>
            <p className="text-md mt-5">in a sea of sameness...</p>
          </div>
          <p className="font-black my-7">__________</p>
          <div className="w-[270px] lg:w-[450px] text-sm">
            <p>
              Are you a business owner, online course creator, boutique agency,
              or personal brand?
            </p>
            <p className="mt-3">
              Do you want a website that professionally communicates your brand
              to your target audience, one that is well-functional, responsive,
              and easy to manage?
            </p>
            <p className="mt-3">
              Or, do you need to create a new online presence using a
              world-class web design that is optimized for SEO but you don't
              have the time to build your website and you're busy working on
              your business…
            </p>
          </div>
          <div className="mt-9">
            <button className="bg-[#0c1224] text-white px-4 py-2 rounded-lg text-sm tracking-wide">
              If yes, then lets chat
            </button>
          </div>
        </div>
        <div className="mt-10 lg:ml-4">
          <div className="flex justify-center">
            <div className="h-48 w-48 lg:mt-[-40px] lg:ml-5 lg:mr-[-10px] hover:animate-bounce z-10">
              <img
                src="https://kraftle.com/wp-content/uploads/2022/01/Home-Ultimate-Viewnew-cover-300x300.webp"
                alt=""
                className="shadow-2xl w-full h-full"
              />
            </div>
            <div className="w-72 h-72 mt-[40px] hidden lg:block hover:animate-bounce shadow-2xl">
              <img
                src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mt-10 lg:flex justify-center">
            <div className="flex relative justify-center">
              <div className="h-48 w-48 lg:h-auto lg:w-auto lg:mr-[-10px] hover:animate-bounce">
                <img
                  src="https://kraftle.com/wp-content/uploads/2022/01/Home-FirstActivate1-300x260.webp"
                  alt=""
                  className="shadow-2xl"
                />
              </div>
              <div className="lg:w-[300px] hover:animate-bounce hidden lg:block  lg:mt-20 lg:h-[200px] z-10">
                <img
                  src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Next