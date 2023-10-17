import React from "react";
import Container from "./Container";

const Visibility = () => {
  return (
    <>
      <Container className="grid lg:grid-cols-2 mt-14 font-montserrat">
        <div className="lg:p-10">
          <div className="lg:w-full lg:h-full bg-red-600">
            <img
              src="https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.jpg?s=612x612&w=0&k=20&c=w1zX61Nw0p3aguqUj9FFrUV9hl8l67zut_ZhdnB9p-E="
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="mt-8 lg:mt-20">
          <h1 className="text-[18px] lg:text-[35px]  font-black">
            You can Increase Brand Visibility, get More Clients, Make More
            Money, and do way Less!
          </h1>
          <p className="mt-5 lg:text-[20px]">
            A world-class website with great UX (User Experience) & multiplier
            effect that attracts your target audience the very first time is a
            good point to start… That's where I come in…
          </p>
        </div>
      </Container>
      <div className="text-center mt-10">
        <button className="bg-[#0c1224] px-5 py-2 mb-4 text-white rounded-md">
          Lets Chat.
        </button>
        <p className="mb-24">
          I am keen to learn more about your Brand; What your Brand Goals are &
          your Web design needs….
        </p>
      </div>
    </>
  );
};

export default Visibility;
