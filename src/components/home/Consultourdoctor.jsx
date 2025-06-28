import React from "react";

const steps = [
  {
    icon: (
      <svg width="32" height="32" fill="#F7266B" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    ),
    text: "Our Care Custodian Will Call You Once You Share Your Details",
  },
  {
    icon: (
      <svg width="32" height="32" fill="#F7266B" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13zm0-15H5V5h14v1z"/></svg>
    ),
    text: "The Care Custodian Will Understand Your Problem In Detail",
  },
  {
    icon: (
      <svg width="32" height="32" fill="#F7266B" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    ),
    text: "The Right Solution To Your Query Will Be Addressed With Suitable Options",
  },
  {
    icon: (
      <svg width="32" height="32" fill="#F7266B" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    ),
    text: "Consultation Will Be Fixed On Your Behalf",
  },
];

export default function Consultourdoctor() {
  return (
    <section className="w-full py-12 px-2 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-4 md:p-8">
        {/* Left: Steps */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D224C] mb-2 leading-tight">
            Consult With Our <span className="text-[#F7266B]">Experts</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-6 max-w-2xl">
            Get Expert Guidance And Clarity On The Best Non-Surgical Treatments Tailored To You.
          </p>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-2">
                    {step.icon}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-0.5 bg-pink-300 border-dashed border-l-2 border-pink-400" />
                      <svg width="14" height="14" viewBox="0 0 24 24" className="text-pink-400 -mt-2">
                        <path d="M12 0v24M12 24l-6-6M12 24l6-6" fill="none" stroke="#F7266B" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="font-bold text-lg md:text-xl text-[#2D224C] leading-snug pt-2">
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Form */}
        <form className="bg-white rounded-2xl p-6 flex flex-col gap-4">
          <div>
            <label className="block font-semibold text-base mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-base mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Your phone number"
              className="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-base mb-1">Locations</label>
            <input
              type="text"
              placeholder="Enter Locations"
              className="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-base mb-1">Message</label>
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm focus:ring-2 focus:ring-pink-400 outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#F7266B] text-white font-semibold text-base rounded-lg py-3 mt-2 hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
