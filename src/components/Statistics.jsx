import React from 'react'
import Container from './Container'

const Statistics = () => {
  return (
    <>
      <Container className="grid lg:grid-cols-3 bg-[#0C1224] shadow-2xl text-white font-montserrat">
        <div className="text-center mt-20 mb-28">
          <h1 className="text-4xl font-bold lg:text-6xl">Statistics</h1>
          <p className="my-4 lg:text-[20px]">What i've done so far</p>
        </div>
        <div className="grid mt-5 lg:col-span-2 lg:grid-cols-3 lg:gap-[30px] mb-20 transition-all duration-[200ms]">
          <div className="border-4 border-[#9a89fe] text-center lg:mt-20 hover:border-[#1A1A78]">
            <h1 className="font-black text-[24px] mt-2 lg:mt-5 lg:text-[35px]">
              200
            </h1>
            <p className="mb-3 mt-4">Different projects done since 2019</p>
          </div>
          <div className="border-4 lg:w-60 border-[#9a89fe] text-center lg:ml-4 lg:mt-12 hover:border-[#1A1A78]">
            <h1 className="font-black text-[24px] mt-2 lg:mt-5 lg:text-[35px]">
              10
            </h1>
            <p className="mt-4">Years</p>
            <p className="mb-3">Web design Experience</p>
          </div>
          <div className="border-4 border-[#9a89fe] text-center lg:mt-20 hover:border-[#1A1A78]">
            <h1 className="font-black text-[24px] mt-2 lg:mt-5 lg:text-[35px]">
              5
            </h1>
            <p className="mb-3 mt-4">Years tech support</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Statistics