import React from "react";

const BookAnAppoinment = () => {
  return (
    <section
      className="w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/book%20and%20appoinment%20background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2d2346]/50 z-0" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[400px]">
        {/* Left Side: Text and Form */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl lg:max-w-xl xl:max-w-2xl">
          <p className="text-white text-lg lg:text-xl mb-4 lg:mb-6 font-medium">
            Are you looking to get a Consultation for your healthcare needs?
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6 lg:mb-10">
            Book Your Appointment with <br /> Experts Near You
          </h2>
          <form className="w-full flex items-center mt-4">
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="flex-1 px-4 py-4 text-base lg:text-lg bg-white text-gray-700 placeholder-gray-500 rounded-l-2xl rounded-r-none outline-none border-none shadow-lg focus:ring-2 focus:ring-[#ff3576] transition-all"
              style={{ boxShadow: '0 4px 16px 0 rgba(44,35,70,0.08)' }}
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gradient-to-r from-[#ff3576] to-[#e1006a] text-white text-base lg:text-lg font-semibold rounded-r-2xl rounded-l-none shadow-lg hover:from-[#e1006a] hover:to-[#c9005a] transition-all duration-300 h-full border-none"
              style={{ boxShadow: '0 4px 16px 0 rgba(44,35,70,0.08)' }}
            >
              Book Appointment
            </button>
          </form>
        </div>
        
        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center lg:justify-end items-center lg:items-end p-4 lg:p-0">
          <div className="relative">
            <img
              src="/happypaients-removebg.png"
              alt="Happy Patient"
              className="object-contain drop-shadow-2xl z-10 w-[280px] sm:w-[320px] lg:w-[360px] xl:w-[400px] max-h-[300px] lg:max-h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAnAppoinment; 