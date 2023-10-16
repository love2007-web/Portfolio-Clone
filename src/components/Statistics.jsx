import React from 'react'
import Container from './Container'

const Statistics = () => {
  return (
    <>
      <Container className="grid lg:grid-cols-2 bg-[#0C1224] text-white font-montserrat">
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">Statistics</h1>
          <p className="my-4">What i've done so far</p>
        </div>
        <div className="grid lg:grid-cols-3 mb-20 transition-all duration-[200ms]">
          <div className="border-4 border-[#9a89fe] text-center mt-5 hover:border-[#1A1A78]">
            <h1 className="font-black text-[24px] mt-2">0</h1>
            <p className="mb-3 mt-4">Different projects done since 2019</p>
          </div>
          <div className="border-4 border-[#9a89fe] text-center mt-5 hover:border-[#1A1A78]">
            <h1 className="font-black text-[24px] mt-2">0</h1>
            <p className="mt-4">Years</p>
            <p className="mb-3">Web design Experience</p>
          </div>
          <div className="border-4 border-[#9a89fe] text-center mt-5 hover:border-[#1A1A78]">
            <h1 className="font-black text-[24px] mt-2">0</h1>
            <p className="mb-3 mt-4">Years tech support</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Statistics