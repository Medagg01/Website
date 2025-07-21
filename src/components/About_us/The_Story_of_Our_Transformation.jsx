import React from "react";

const timeline = [
  {
    year: "2021",
    title: "Vision Ignited",
    desc: "Founded by Ramesh Krishnan and Sumitha Karthik, Medagg began with a bold mission — to simplify healthcare navigation, reduce treatment costs, and empower patients with data-driven, personalized guidance across their care journey.",
  },
  {
    year: "2022",
    title: "Platform Unveiled",
    desc: "We launched the Medagg platform in Tamil Nadu, enabling patients to compare treatment costs, choose hospitals, and get guided support through our Care Custodian model — a concierge-style service supporting every step from inquiry to discharge.",
  },
  {
    year: "2023",
    title: "Network Grown",
    desc: "With a growing ecosystem of hospitals, diagnostics, and healthcare professionals, Medagg deepened its reach. We supported hospitals with strategic consulting, cost optimization, and digital visibility, while enhancing care access for thousands of patients.",
  },
  {
    year: "2024",
    title: "Services Expanded",
    desc: "Beyond discovery, we strengthened support for surgical and non-surgical pathways, insurance facilitation, second opinions, and post-procedure care — making Medagg a trusted partner in full-spectrum, outcome-focused healthcare experiences.",
  },
  {
    year: "2025",
    title: "Impact Scaling",
    desc: "Now a leading hospital aggregation platform in Tamil Nadu, Medagg is expanding its presence across India. Backed by operational excellence and deep healthcare insight, we continue to drive smarter, more accessible, and value-based healthcare delivery.",
  },
];

export default function The_Story_of_Our_Transformation() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white">
        {/* Left: Heading, subtitle, and card */}
        <div className="flex flex-col flex-1 min-w-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2552] mb-2">
            The Story of Our <br />
            <span className="text-pink-500">Transformation</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg">
            Over the years, we’ve evolved with purpose, turning challenges into milestones and vision into reality.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md mb-6 bg-white">
            <div className="relative w-full h-48 md:h-56" style={{backgroundImage: "url('/book and appoinment background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-[#392C5C]/20" />
              <div className="relative z-10 flex flex-col h-full justify-center items-start p-6">
                <img src="/Medagg_logo-removebg-preview.png" alt="Medagg Logo" className="h-10 mb-2" />
                <div className="text-white text-sm font-semibold mb-1">The Longest Kept Secret Of Modern Medicine</div>
                <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">Interventional Radiology</div>
                <div className="text-white text-xs font-medium">Now Available For Common Good</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Timeline */}
        <div className="relative pl-0 flex-1 min-w-0">
          <div className="flex w-full">
            {/* Timeline line and dots column */}
            <div className="relative flex flex-col items-center w-12 min-w-0">
              {/* Vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-pink-400 rounded-full" style={{zIndex: 0}} />
              {timeline.map((item, idx) => (
                <div key={item.year} className="relative flex items-start justify-center" style={{minHeight: idx === timeline.length - 1 ? '40px' : '88px'}}>
                  <span className="absolute left-1/2 -translate-x-1/2 top-2 w-5 h-5 rounded-full bg-pink-500 z-10" />
                </div>
              ))}
            </div>
            {/* Timeline content column */}
            <div className="flex-1 flex flex-col justify-start min-w-0">
              {timeline.map((item, idx) => (
                <div key={item.year} className="pt-2 pb-10">
                  <div className="text-pink-500 font-bold text-lg mb-1">{item.year}</div>
                  <div className="text-[#2D2552] font-extrabold text-base mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm max-w-md">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
