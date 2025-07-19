import React from "react";

export default function About_Founder() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Top: 3-column text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2D2552] mb-2">
            Born from the Need for <span className="text-pink-500">Medical Aggregation</span> —<br className="hidden md:block" />
            Uniting Care on One Platform
          </h2>
        </div>
        <div>
          <p className="text-gray-700 text-base md:text-lg">
            Medagg Healthcare, established in 2021, is leading the way in advanced non-surgical treatments across India. We began as a discovery platform connecting patients to hospitals and now specialize in Interventional Radiology — promoting non-surgical care as the future of healthcare.
          </p>
        </div>
        <div>
          <p className="text-gray-700 text-base md:text-lg">
            We put your healthcare needs first, giving you full control to book appointments and consultations with trusted providers across Tamil Nadu. No ads. No paid promotions. Just clear access to expert care, price comparisons, and transparent choices — all in one place.
          </p>
        </div>
      </div>
      {/* Middle: 3 feature cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
        <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center min-w-[220px]">
          <div className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            {/* Watch/clock icon */}
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-[#2D2552] mb-1">No Delays</h3>
          <p className="text-gray-500 text-sm">Instant booking with verified specialists, eliminating the typical weeks of waiting and uncertainty.</p>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center min-w-[220px]">
          <div className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            {/* Clean Indian rupee icon */}
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 6h12M6 12h8M6 6c6 0 6 8 0 8l8 4" />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-[#2D2552] mb-1">Financial Clarity</h3>
          <p className="text-gray-500 text-sm">Transparent pricing with no hidden costs. Know exactly what you'll pay before your treatment begins.</p>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center min-w-[220px]">
          <div className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <h3 className="font-bold text-lg text-[#2D2552] mb-1">Care Companion</h3>
          <p className="text-gray-500 text-sm">A dedicated care coordinator guides you from consultation to recovery, answering questions along the way.</p>
        </div>
      </div>
      {/* Bottom: 2-column images/videos */}
      <div className="media-container w-full min-h-[340px] bg-[#fceff9] rounded-[16px] p-6 md:p-8 shadow-lg max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 items-stretch justify-center">
        <div className="image-block basis-1/2 max-w-[50%] flex justify-center items-center h-full">
          <img src="/About_sir_ma'am.jpg" alt="Founders" className="team-image w-full h-full max-w-[500px] rounded-[12px] shadow-md object-cover" />
        </div>
        <div className="video-block basis-1/2 max-w-[50%] flex justify-center items-center h-full">
          <div className="video-thumbnail relative w-full h-full max-w-[500px]">
            <img src="/Hero_section_youtube.jpg" alt="Founder Video" className="video-image w-full h-full rounded-[12px] shadow-md object-cover" />
            <span className="play-button absolute top-1/2 left-1/2 flex items-center justify-center" style={{transform: 'translate(-50%, -50%)', fontSize: '48px', background: 'rgba(255, 105, 180, 0.8)', borderRadius: '50%', width: '70px', height: '70px', pointerEvents: 'none'}}>
              <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
                <polygon points="9.5,7.5 16.5,12 9.5,16.5" fill="#e91e63" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
