import React from "react";
import Box from "./Box"; // Make sure this path is correct
import Img from "./img/imgg.jpeg"; // Verify the path to the image

function Home() {
  return (
    <>
      {/* Wrapper Container */}
      <div className="w-full mx-auto h-auto bg-white px-4 lg:px-8 py-10">
        {/* Row with Two Boxes */}
        <div className="flex flex-wrap justify-evenly items-stretch gap-4">
          {/* First Box */}
          <Box heading="IT Change Management Services" img={Img} />

          {/* Center Box */}
          <div className="flex-1 max-w-[750px] bg-[rgba(239,239,241,1)] text-center rounded shadow-lg p-4 flex flex-col items-center">
            <h1 className="font-normal text-blue-400 mt-5">Services</h1>
            <h1 className="text-xl md:text-2xl leading-9 font-bold mt-3">
              IT Governance Services
            </h1>
            <p className="text-black mt-6 px-4">
              Wilson Consulting Group is a critical partner for your IT
              Governance needs. We help identify the ideal framework, design
              holistic approaches, and maintain procedures for companies of all
              sizes.
            </p>
            <div className="flex justify-between mt-6 gap-4 w-full m-auto">
              <button className="border-none font-medium text-black bg-transparent hover:underline">
                Read More
              </button>
              <button className="rounded bg-blue-400 text-white font-medium px-4 py-2 hover:bg-blue-500">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
