import React from "react";
import img3 from "./img/3one.png";

function Box({ heading, img = img3 }) {
  return (
    <div
      className="w-[340px] h-[300px] relative top-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.33)), url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[288px] h-[250px] rounded-md relative top-[25px] left-10 leading-6 z-10">
        <h1 className="text-base text-blue-400">Services</h1>
        <h1 className="text-2xl w-[260px] font-bold text-white leading-9">
          {heading}
        </h1>
        <button className="text-base font-medium leading-6 text-white mt-[138px]">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Box;
