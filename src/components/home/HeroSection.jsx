import React from "react";

const socialIcons = [
  { src: "/facebook%20.jpg", alt: "Facebook" },
  { src: "/instagram%20(4)%201.jpg", alt: "Instagram" },
  { src: "/youtube%202.jpg", alt: "YouTube" },
  { src: "/linkedin%20(1)%201.jpg", alt: "LinkedIn" },
];

const stats = [
  { value: "20+", label: "Operating Cities" },
  { value: "200+", label: "Partnered Hospital" },
  { value: "14K", label: "Helped - Patients" },
];

const popularSearches = ["Knee Pain", "Breast Nodule", "Thyroid", "Prostate"];

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[600px] bg-cover bg-center rounded-none overflow-hidden"
      style={{
        backgroundImage: "url('/Herosection%20background.jpg')",
      }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1446]/90 to-[#e1006a]/60 z-0" />
      
      {/* Doctor Image - Absolute positioned on the right */}
      <div className="absolute right-0 bottom-0 z-10 hidden lg:block">
        <img
          src="/Demo%20doctor%20home.png"
          alt="Doctor"
          className="w-[320px] xl:w-[380px] object-contain"
          style={{ maxHeight: '600px' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex justify-center items-center min-h-[600px]">
        <div className="w-[1440px] px-16 mx-auto">
          {/* Content - Left side with responsive width */}
          <div className="flex flex-col justify-center h-full gap-6 pt-10 md:pt-0 max-w-2xl lg:max-w-xl xl:max-w-2xl">
            <div className="flex items-center gap-4 mb-2">
              <img
                src="/isvir_logo-1-600x202%201.jpg"
                alt="ISVIR Logo"
                className="h-14 w-auto bg-white rounded-md p-1"
              />
              <div>
                <div className="text-[#00b2ff] font-bold text-2xl leading-tight">ISVIR</div>
                <div className="text-sm font-medium leading-tight text-white">
                  Indian Society of Vascular and <br /> Interventional Radiology
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mt-2">
              <span className="whitespace-nowrap">No Surgery. No Scars.</span><br />Just Results.
            </h1>
            
            {/* Search Bar */}
            <form className="flex items-center bg-white rounded-xl overflow-hidden shadow-lg mt-6 max-w-lg w-full border border-gray-100">
              <span className="pl-5 text-gray-400 flex-shrink-0">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Facing symptoms? Type them in"
                className="flex-1 px-4 py-4 outline-none text-gray-700 bg-transparent placeholder-gray-500 text-base font-medium"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#ff3576] to-[#e1006a] text-white px-8 py-4 font-semibold hover:from-[#e1006a] hover:to-[#c9005a] transition-all duration-300 flex items-center gap-2"
              >
                <span>Search</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
            <div className="mt-4 text-sm font-medium text-white/90">
              Popular Search :
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {popularSearches.map((item) => (
                <span key={item} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Doctor Image - Only visible on smaller screens */}
      <div className="lg:hidden absolute bottom-0 right-0 z-10">
        <img
          src="/Demo%20doctor%20home.png"
          alt="Doctor"
          className="w-[200px] sm:w-[250px] object-contain opacity-80"
          style={{ maxHeight: '300px' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
