import React from 'react'
import { Brush, Code, CreditCard2Back, Search } from "react-bootstrap-icons";


const Middle = () => {
  return (
    <>
      <div className="bg-[#0c1224] mt-[-20px] p-4 shadow-2xl grid grid-cols-2 lg:grid-cols-4 justify-around mx-auto lg:w-[1200px]">
        <div className="text-white w-auto p-4">
          <div className="flex justify-center">
            <Brush className="text-white text-3xl" />
          </div>
          <p className="text-center">Web Design</p>
        </div>
        <div className="text-white w-auto p-4">
          <div className="flex justify-center">
            <Code className="text-white text-3xl" />
          </div>
          <p className="text-center">Web Developement</p>
        </div>
        <div className="text-white w-auto p-4">
          <div className="flex justify-center">
            <CreditCard2Back className="text-white text-3xl" />
          </div>
          <p className="text-center">CRO</p>
        </div>
        <div className="text-white w-auto p-4">
          <div className="flex justify-center">
            <Search className="text-white text-3xl" />
          </div>
          <p className="text-center">SEO</p>
        </div>
      </div>
    </>
  );
}

export default Middle