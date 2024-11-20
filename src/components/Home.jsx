import React from "react";
import Box from "./Box";
import img2 from "./img/2nd.png";
import Img from "./img/imgg.jpeg";
import img3 from "./img/3one.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";

function Home() {
  return (
    <>
      {/* Wrapper Container with hidden scrollbars */}
      <div className="w-full mx-auto h-auto bg-white px-4 py-10 flex-wrap overflow-hidden relative">
        {/* Outer Container */}
        <div className="absolute top-[650px] left-[41px] w-[1600px] h-[835px] opacity-0 gap-0 flex-wrap flex">
          {/* Nested Inner Container */}
          <div className="absolute top-[80px] left-[41px] w-[1518px] h-[640px] opacity-0 gap-0 flex-wrap flex">
            {/* Nested Inner to Inner Container */}
            <div className="absolute top-[80px] left-[0px] w-[340px] h-[300px] opacity-0 gap-0 flex-wrap flex">
              <img
                src={img2}
                alt="Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* First Row */}
        <div className="flex flex-wrap justify-around  gap-2">
          {/* First Box */}
          <Box heading="IT Change Management Services" img={Img} />

          {/* Center Box (Styled to Match Other Boxes) */}
          <div className=" bg-[rgba(239,239,241,1)] text-center rounded w-[750px] shadow-lg p-4 flex flex-col items-center">
            <h1 className="font-normal text-blue-400 mt-5">Services</h1>
            <h1 className="text-xl md:text-2xl leading-9 font-bold mt-3">
              IT Governance Services
            </h1>
            <p className="text-black mt-6 px-4 w-[80%]">
              Wilson Consulting Group is a critical partner for your IT
              Governance needs. We help identify the ideal framework, design
              holistic approaches, and maintain procedures for companies of all
              sizes.
            </p>
            <div className="flex flex-wrap w-[66%] justify-between m-auto mt-6 gap-2">
              <button className="border-none font-medium text-black bg-transparent hover:underline">
                Read More
              </button>
              <button className="rounded bg-blue-400 text-white font-medium px-4 py-2 hover:bg-blue-500">
                Request Consultation
              </button>
            </div>
          </div>

          {/* Third Box */}
          <Box heading="Risk Management and Assessment Services" img={img2} />
          <Box heading="Cloud Services" img={img3} />
          <Box heading="Data and Analytics Services" img={img4} />
          <Box heading="Project Management" img={img5} />
          <Box heading="Additional Service" img={img6} />
        </div>
        {/* Second Row (Empty for now) */}
      </div>
    </>
  );
}

export default Home;
