import React from "react";

const doctors = [
  {
    name: "Dr. Sankesh Mehta",
    degrees: "MBBS., MD., FENVIR",
    specialty: "Interventional Radiologist",
    image: "/Dr Sankesh Mehta.jpg",
  },
  {
    name: "Dr. S Kiran Kumar",
    degrees: "MBBS., DNB (RD), FVIR, EBIR",
    specialty: "Interventional Radiology",
    image: "/Dr S Kiran.jpg",
  },
  {
    name: "Dr. Arul Arokia Sensan Babu",
    degrees: "MBBS., MD., FENVIR",
    specialty: "Interventional Radiologist",
    image: "/Dr Arul.jpg",
  },
  {
    name: "Dr. Periyakaruppan",
    degrees: "MBBS., MD., FENVIR",
    specialty: "Interventional Radiologist",
    image: "/Dr Periya.jpg",
  },
];

const quickSearch = ["Knee Pain", "Breast Nodule", "Thyroid", "Prostate"];

const OurDoctor = () => (
  <section className="w-full bg-white">
    <div className="max-w-6xl mx-auto px-4 py-6 lg:py-8">
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-2">
        Our <span className="text-[#ff3576]">Doctors</span>
      </h2>
      <p className="text-gray-500 mb-6 lg:mb-8 max-w-2xl text-sm lg:text-base">
        Our expert doctors provide personalized, non-surgical care with a patient-first approach, guiding you to safe and effective treatments.
      </p>

      {/* Search/filter box */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 lg:p-6 mb-6 lg:mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4">
          <div>
            <label className="block font-medium text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Type a Name"
              className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-[#ff3576] outline-none"
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">Locations</label>
            <input
              type="text"
              placeholder="Select Location"
              className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-[#ff3576] outline-none"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block font-medium text-sm mb-1">Symptoms</label>
            <input
              type="text"
              placeholder="Type symptoms"
              className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-[#ff3576] outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <span className="font-medium text-sm">Quick Search :</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {quickSearch.map((item) => (
              <button
                key={item}
                className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700 hover:bg-[#ff3576] hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#ff3576] text-white rounded-md text-sm font-medium shadow-sm hover:bg-[#e1006a] transition">
            <span>Search</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Doctor cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center p-4 lg:p-6 hover:shadow-md transition-shadow"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg mb-3 lg:mb-4"
            />
            <button className="w-full mb-3 lg:mb-4 py-2 border border-[#ff3576] rounded-md text-[#ff3576] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#ff3576] hover:text-white transition">
              <span className="text-lg">→</span>
              Book Appointment
            </button>
            <div className="text-center">
              <div className="font-bold text-base lg:text-lg">{doc.name}</div>
              <div className="text-gray-700 text-xs lg:text-sm">{doc.degrees}</div>
              <div className="text-gray-500 text-xs">{doc.specialty}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurDoctor;
