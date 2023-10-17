import React from "react";
import Container from "./Container";

const Socials = () => {
  return (
    <>
      <Container className="grid lg:grid-cols-2 mt-14 lg:mt-24 font-montserrat">
        <div className="block lg:hidden">
          <img
            src="https://images.pexels.com/photos/5361244/pexels-photo-5361244.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="mt-5 lg:mt-10">
          <h1 className="font-black lg:text-[35px]">
            Social Media accounts are restricted to their platforms, and won't
            give you access to scale with business growth.
          </h1>

          <p className="mt-9 lg:text-[20px]">
            Your business profile depends on the social media platform, which
            can be banned at any time. With your website, you can take your
            marketing to any level, scale with business growth, access customers
            on a wider reach, and have total control of your web assets…
          </p>
        </div>
        <div className="hidden lg:block px-10">
          <img
            src="https://images.pexels.com/photos/5361244/pexels-photo-5361244.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </Container>
    </>
  );
};

export default Socials;
