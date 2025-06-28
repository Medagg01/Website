import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#392C5C] flex justify-center">
      <div className="w-[1440px] h-[70px] flex items-center justify-between px-8">
        {/* Logo and Links */}
        <div className="flex items-center gap-12 h-full">
          <a href="/">
            <img src="/Medagg logo(1).png" alt="Medagg Healthcare" style={{ width: '74px', height: '46.15px', marginLeft: '16px' }} />
          </a>
          <ul className="flex items-center gap-10 text-white text-base font-semibold h-full ml-20">
            <li><a href="/" className="text-white hover:text-pink-400 transition-colors">Home</a></li>
            <li><a href="/about" className="text-white hover:text-pink-400 transition-colors">About</a></li>
            <li><a href="/blog" className="text-white hover:text-pink-400 transition-colors">Blog</a></li>
            <li><a href="/contact" className="text-white hover:text-pink-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-4 h-full">
          {/* Phone Icon */}
          <a href="tel:+911234567890" className="bg-pink-500 rounded-full w-[44px] h-[44px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z" />
            </svg>
          </a>
          {/* Buttons */}
          <a href="/join" className="min-w-[100px] h-[40px] px-3 border-2 border-pink-400 text-white text-base rounded-lg font-normal hover:bg-pink-400 transition-colors flex items-center justify-center" style={{width: 'fit-content'}}>Join with us</a>
          <a href="/investor" className="min-w-[140px] h-[40px] px-4 border-2 border-pink-400 text-white text-base rounded-lg font-normal hover:bg-pink-400 transition-colors flex items-center justify-center" style={{width: 'fit-content'}}>Became an Investor</a>
          <a href="/book-appointment" className="min-w-[130px] h-[40px] px-4 bg-pink-500 text-white text-base rounded-lg font-normal hover:bg-pink-600 transition-colors flex items-center justify-center" style={{width: 'fit-content'}}>Book Appointment</a>
        </div>
      </div>
    </nav>
  );
}
