import React from "react";
import Container from "./Container";

const Reviews = () => {
  return (
    <>
      <Container className="bg-[#1E1A33] font-montserrat">
        <div className="text-center mt-20">
          <h1 className="font-black text-white">Reviews</h1>
        </div>
        <div className="grid lg:gap-[30px] lg:grid-cols-5">
          <div className="col-span-2 mt-5">
            <div className="bg-white w-full">
              <div className="p-4 border-2">
                <h1 className="font-black">-- Kaite,</h1>
                <p>CEO of Eternal Wigs</p>
              </div>
              <p className="mt-3 mb-3 p-2 text-sm">
                "I am really glad i met Creaftech.… If you need a pro for
                everything that has to do with your website, then Creaftech. is
                the person. I will highly recommend him. Thanks again"
              </p>
            </div>
          </div>
          <div className="col-span-3 mt-5">
            <div className="bg-white w-full">
              <div className="p-4 border-2">
                <h1 className="font-black">-- Harmony,</h1>
                <p>xDevra SMMA Agency</p>
              </div>
              <p className="mt-3 mb-3 p-2 text-sm">
                "I have truly been impressed with how Creaftech has managed to
                meet every goal set before him - even going beyond what I was
                requesting… He did a great job with his role in delivering
                amazing results that left me satisfied with the final outcome
                but also strengthened my trust in his capabilities in achieving
                what was asked of him. All in all, Creaftech is undeniably a
                valuable asset and I will definitely work with him again."
              </p>
            </div>
          </div>
          <div className="col-span-4 mt-5">
            <div className="bg-white w-full">
              <div className="p-4 border-2">
                <h1 className="font-black">-- Aaron,</h1>
                <p>CEO of TheTakeOnTech Blog</p>
              </div>
              <p className="mt-3 mb-3 p-2 text-sm">
                "I have truly been impressed with how Creaftech has managed to
                meet every goal set before him - even going beyond what I was
                requesting… He did a great job with his role in delivering
                amazing results that left me satisfied with the final outcome
                but also strengthened my trust in his capabilities in achieving
                what was asked of him. All in all, Creaftech is undeniably a
                valuable asset and I will definitely work with him again."
              </p>
            </div>
          </div>
          <div className="col-span-1 mt-5">
            <div className="bg-white w-full">
              <div className="p-4 border-2">
                <h1 className="font-black">-- Jason,</h1>
              </div>
              <p className="mt-3 mb-3 p-2 text-sm">
                "Creaftech is trustworthy and a very hard worker. He is eager to
                please and would make a great addition to anyone's team."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Reviews;
