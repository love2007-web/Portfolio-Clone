import React from "react";
import Container from "./Container";

const Why = () => {
  return (
    <>
      <Container className="grid lg:grid-cols-2 font-montserrat lg:mt-10">
        <div className="shadow-2xl lg:hidden">
          <img
            src="https://images.pexels.com/photos/5910768/pexels-photo-5910768.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full"
          />
        </div>
        <div className="mt-9 lg:px-10 lg:mt-16">
          <div className="font-black text-[20px]">
            <h1 className="lg:text-[35px]">But why me? ************</h1>
          </div>
          <div>
            <p className="mt-5 lg:text-[20px]">
              🎗️ I'm a professional website content manager with advanced
              WordPress & Elementor skills working in the Tech space for 5+
              years. I can help you design your online website, optimize & build
              your brand. **********
            </p>
            <p className="mt-5 lg:text-[20px]">
              <span className="font-bold">Not to blow my horn</span> , but… I
              use my deep-rooted background in digital marketing, Conversion
              Rate Optimization, UX Research, SEO as well as the latest web
              design trends to assist business owners strategically positioning
              their brands and streamline their ideal clients from a wide pool.
            </p>
          </div>
        </div>
        <div className="shadow-2xl hidden lg:block">
          <img
            src="https://images.pexels.com/photos/5910768/pexels-photo-5910768.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full"
          />
        </div>
      </Container>
      <div className="text-center mt-10">
        <button className="bg-[#0c1224] text-white px-4 py-2 rounded-lg text-sm lg:text-[20px] tracking-wide">
          Book a Call
        </button>
        <p className="lg:text-[20px]">...you have nothing to lose</p>
        <p className="mt-6 text-sm lg:text-[20px]">
          Remember, “There are three responses to a piece of design – yes, no,
          and WOW! Wow is the one to aim for” – Milton Glaser
        </p>
        <p className="font-medium text-sm mb-10 mt-7 lg:text-[20px]">
          You can be sure to get a custom-built website that is elegant and 100%
          unique to your brand.
        </p>
      </div>
    </>
  );
};

export default Why;
