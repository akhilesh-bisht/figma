import React from "react";
import logo from "./img/logo.png";
import arrow from "./img/up arrow.png";

function Header() {
  return (
    <div className="flex flex-col items-center scroll-smooth">
      {/* Header Section */}
      <div className="w-full max-w-[1502px] flex flex-wrap items-center justify-around px-4 md:px-8 py-4">
        <div className="flex items-center">
          <img
            className="w-[150px] sm:w-[200px] md:w-[318px] h-auto"
            src={logo}
            alt="Logo"
          />
        </div>
        <ul className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-semibold text-white ml-3">
          <li className="text-blue-400 cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <span className="hidden md:flex items-center">
            <img src={arrow} alt="Arrow Icon" className="w-4 h-4" />
          </span>
          <li className="cursor-pointer">
            <a href="">Our Service</a>
          </li>
          <span className="hidden md:flex items-center">
            <img src={arrow} alt="Arrow Icon" className="w-4 h-4" />
          </span>
          <li className="cursor-pointer">Cyber Security</li>
          <span className="hidden md:flex items-center">
            <img src={arrow} alt="Arrow Icon" className="w-4 h-4" />
          </span>
          <li className="cursor-pointer">Industries We Serve</li>
          <span className="hidden md:flex items-center">
            <img src={arrow} alt="Arrow Icon" className="w-4 h-4" />
          </span>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="relative w-full max-w-[95%] md:max-w-[1402px] h-auto py-8 md:py-12 px-6 md:px-9 rounded-[4px] border-l-[5px] mt-[81px] border-blue-500 bg-transparent shadow-[inset_5px_0_15px_rgba(59,130,246,0.5) ]">
        <div className="text-center md:text-left p-4 md:p-9">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
            Certified FedRAMP and StateRAMP 3PAO
          </h1>
          <div className="mt-4">
            <h2 className="text-4xl sm:text-5xl md:text-[68px] font-medium text-white">
              FedRAMP and StateRAMP Compliance Consulting
            </h2>
          </div>
          <p className="mt-4 text-sm sm:text-base md:text-[18px] font-medium text-white">
            Achieve or maintain your FedRAMP & StateRAMP authorization with our
            Advisory and Assessment Services.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-9">
            <button className="bg-blue-400 rounded-md w-[134px] text-white h-[45px]">
              Read More
            </button>
            <button className="bg-transparent rounded-md w-[134px] text-blue-400 border border-blue-400 h-[45px]">
              Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
