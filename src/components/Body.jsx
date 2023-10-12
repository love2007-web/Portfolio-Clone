import React from 'react'

const Body = () => {
  return (
    <>
      <div className="font-montserrat">
        <div className="lg:mt-20 lg:flex lg:px-10">
          <div className="lg:w-1/2 flex justify-center mt-5">
            <div className="lg:w-[400px] shadow-2xl ">
              <img
                src="https://images.pexels.com/photos/874242/pexels-photo-874242.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
          <div className="ml-6 lg:w-1/2">
            <div className=" lg:w-[500px]">
              <h1 className="w-[300px] lg:w-40 lg:text-[28px]  font-black">
                If you are not sure about that, think for moment;
              </h1>
            </div>
            <p className="mt-5 text-lg">
              Do you want to gain market share with your web design in a market
              which looks like a sea of sameness, where customers see your
              website and your competitor's as interchangeable and don't have
              any particularly warm feelings towards any of you… What makes your
              business stand out from the competition?{" "}
              <span className="font-black">
                Okay! People say that social media accounts are starting to
                replace the need for a website.. but they're WRONG!
              </span>
            </p>
          </div>
        </div>

        <div className="lg:mt-20 lg:flex lg:px-10">
          <div className="w-1/2 mt-16 flex justify-center">
            <div className=" w-[430px]">
              <h1 className="text-2xl font-black">
                Social Media accounts are restricted to their platforms, and
                won’t give you access to scale with business growth.
              </h1>
              <p className="lg:mt-10 text-sm">
                Your business profile depends on the social media platform,
                which can be banned at any time. With your website, you can take
                your marketing to any level, scale with business growth, access
                customers on a wider reach, and have total control of your web
                assets…
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-[550px]">
              <img
                src="https://kraftle.com/wp-content/uploads/2023/01/merakist-CNbRsQj8mHQ-unsplash-1536x1152.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="lg:mt-20 lg:flex lg:px-10">
          <div className="w-1/2 flex justify-center mt-5">
            <div className="w-[400px] shadow-2xl ">
              <img
                src="https://kraftle.com/wp-content/uploads/2022/02/Healthy-Blog-%E2%80%93-Healthy-Blog-2.webp"
                alt=""
              />
            </div>
          </div>
          <div className="ml-6 w-1/2">
            <div className=" w-[500px]">
              <h1 className="text-[28px]  font-black">
                You can Increase Brand Visibility, get More Clients, Make More
                Money, and do way Less!
              </h1>
            </div>
            <p className="mt-5 text-lg">
              A world-class website with great UX (User Experience) & multiplier
              effect that attracts your target audience the very first time is a
              good point to start… That’s where I come in…
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="bg-[#0c1224] px-5 py-2 mb-4 text-white rounded-md">Lets Chat.</button>
          <p>
            I am keen to learn more about your Brand; What your Brand Goals are
            & your Web design needs….
          </p>
        </div>
      </div>
    </>
  );
}

export default Body