import React from "react";

const others = [
  {
    title: "Advertising-Driven",
    desc: "Platforms that prioritize sponsored listings over patient needs, creating confusion about the best options.",
  },
  {
    title: "Long Delays",
    desc: "Weeks of waiting for appointments, followed by more waiting for treatment plans and procedures.",
  },
  {
    title: "No Guidance",
    desc: "Patients left to navigate complex medical systems alone, with minimal support or explanation.",
  },
  {
    title: "Hidden Costs",
    desc: "Unclear pricing structures leading to surprise bills and financial stress during recovery.",
  },
];

const medagg = [
  {
    title: "Care Custodians",
    desc: "A dedicated team focused solely on finding you the best treatment option based on medical needs, not advertising.",
  },
  {
    title: "Rapid Response",
    desc: "Most patients connect with specialists within 48 hours, with treatment plans developed shortly after.",
  },
  {
    title: "End-to-End Support",
    desc: "Our team guides you from initial questions through recovery, providing resources and answering concerns.",
  },
  {
    title: "Complete Transparency",
    desc: "Upfront pricing, clear treatment explanations, and honest discussions about expected outcomes.",
  },
];

export default function What_We_Do_Differently() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2552] mb-2">
        What We <span className="text-pink-500">Do Differently</span>
      </h2>
      <p className="text-gray-500 text-base md:text-lg mb-10 max-w-2xl">
        See how Medagg transforms the typical healthcare experience into something truly patient-centered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
        {/* Others Card */}
        <div className="bg-[#f7f7fa] rounded-2xl p-8 flex flex-col shadow-sm border border-gray-100 flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gray-300 rounded-full p-3">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </span>
            <span className="text-lg font-bold text-gray-500">Others</span>
          </div>
          <ul className="space-y-6">
            {others.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-1">
                  <span className="bg-red-500 rounded-full w-7 h-7 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 8.586l3.536-3.535a1 1 0 111.415 1.415L11.414 10l3.537 3.535a1 1 0 01-1.415 1.415L10 11.414l-3.535 3.536a1 1 0 01-1.415-1.415L8.586 10 5.05 6.464a1 1 0 011.415-1.415L10 8.586z" clipRule="evenodd" /></svg>
                  </span>
                </span>
                <div>
                  <div className="font-bold text-[#2D2552] mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Medagg Card */}
        <div className="bg-[#fde7f3] rounded-2xl p-8 flex flex-col shadow-sm border border-pink-100 flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-pink-400 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </span>
            <span className="text-lg font-bold text-pink-500">Medagg</span>
          </div>
          <ul className="space-y-6">
            {medagg.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-1">
                  <span className="bg-green-500 rounded-full w-7 h-7 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 7.293a1 1 0 00-1.414 0L9 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                  </span>
                </span>
                <div>
                  <div className="font-bold text-[#2D2552] mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
