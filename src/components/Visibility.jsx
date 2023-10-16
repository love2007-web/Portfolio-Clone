import React from "react";
import Container from "./Container";

const Visibility = () => {
  return (
    <>
      <Container className="grid lg:grid-cols-2 mt-14 font-montserrat">
        <div>
          <img
            src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="mt-8">
          <h1 className="text-[18px]  font-black">
            You can Increase Brand Visibility, get More Clients, Make More
            Money, and do way Less!
          </h1>
          <p className="mt-5">
            A world-class website with great UX (User Experience) & multiplier
            effect that attracts your target audience the very first time is a
            good point to start… That's where I come in…
          </p>
          <div className="text-center mt-10">
            <button className="bg-[#0c1224] px-5 py-2 mb-4 text-white rounded-md">
              Lets Chat.
            </button>
            <p className="mb-24">
              I am keen to learn more about your Brand; What your Brand Goals
              are & your Web design needs….
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Visibility;
