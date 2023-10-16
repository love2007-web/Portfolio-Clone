import React from 'react'
import '../index.css'
import Container from './Container';

const Next = () => {
  return (
    <>
      <Container className="grid lg:grid-cols-2 mt-10 font-montserrat">
        <div>
          <div className="font-black">
            <h1 className="text-[20px]">Make your business Standout</h1>
            <p className="text-md mt-5">in a sea of sameness...</p>
            <p>__________</p>
          </div>
          <div className="mt-4">
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
        <div className="relative grid lg:grid-cols-2">
          <div className="mx-auto mt-5 bg-red-600 w-72">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className='w-full'
            />
          </div>
          <div></div>
        </div>
      </Container>
      {/* <div className="font-montserrat pl-8 mt-60 lg:flex lg:px-[75px] transition-all duration-300">
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
      </div> */}
    </>
  );
}

export default Next