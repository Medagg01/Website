import React from "react";

export default function Trusted_by_Patients_Across_India() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2552] mb-2">
        Trusted by Patients <span className="text-pink-500">Across India</span>
      </h2>
      <p className="text-gray-500 text-base md:text-lg mb-10 max-w-2xl">
        Join thousands of patients who have found better healthcare solutions through Medagg.
      </p>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-gray-100">
          <span className="bg-gray-100 rounded-full p-3 mb-3">
            <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </span>
          <div className="text-3xl font-bold text-[#2D2552] mb-1">2,500+</div>
          <div className="text-gray-500 text-base">Patients Helped</div>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-gray-100">
          <span className="bg-gray-100 rounded-full p-3 mb-3">
            <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          </span>
          <div className="text-3xl font-bold text-[#2D2552] mb-1">5,000+</div>
          <div className="text-gray-500 text-base">Consultations Booked</div>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-gray-100">
          <span className="bg-gray-100 rounded-full p-3 mb-3">
            <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><text x="6" y="19" fontSize="16" fontFamily="Arial" fontWeight="bold">₹</text></svg>
          </span>
          <div className="text-3xl font-bold text-[#2D2552] mb-1">₹50,000</div>
          <div className="text-gray-500 text-base">Average Patient Savings</div>
        </div>
      </div>
      {/* Partner logos */}
      <div className="flex flex-col items-center mb-12">
        <div className="text-[#2D2552] text-base font-medium mb-4">In Partnership With Top Medical Centers</div>
        <img src="/Partner logos.jpg" alt="Partner Hospitals" className="w-full max-w-4xl object-contain" />
      </div>
      {/* CTA Card */}
      <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-4xl mx-auto mt-10">
        <div className="relative w-full h-44 md:h-48 flex items-center justify-center" style={{backgroundImage: "url('/book and appoinment background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-[#392C5C]/30" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6">
            <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-2 text-center">Ready To Explore Non-Surgical Options?</h3>
            <p className="text-white text-base mb-4 text-center">Discover safer, faster, and effective treatments — no scars, no stitches, and same-day recovery</p>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-bold text-base shadow-md flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 21.48a2.75 2.75 0 0 1-3.89 0l-2.13-2.13a16.06 16.06 0 0 1-6.36-6.36l-2.13-2.13a2.75 2.75 0 0 1 0-3.89l1.06-1.06a2.75 2.75 0 0 1 3.89 0l1.06 1.06a.75.75 0 0 1 0 1.06l-1.06 1.06a.75.75 0 0 0 0 1.06l2.13 2.13a.75.75 0 0 0 1.06 0l1.06-1.06a.75.75 0 0 1 1.06 0l1.06 1.06a2.75 2.75 0 0 1 0 3.89z" /></svg>
                Talk With Medagg
              </a>
              <a href="tel:+919363656010" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-white hover:text-pink-500 transition shadow-md flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L9.1 10.9a16.06 16.06 0 0 0 6.36 6.36l1.73-1.73a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" /></svg>
                +91 9363656010
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
