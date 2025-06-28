import React from "react";

const treatments = [
  {
    title: "Geniculate Artery Embolization",
    desc: "A non-surgical solution to relieve chronic knee pain safely.",
    img: "/Geniculate%20Artery%20Emblization.jpg",
    highlight: true,
  },
  {
    title: "Prostate Artery Embolization",
    desc: "Minimally invasive relief for varicocele without surgery.",
    img: "/Prostate%20Artery%20Embolization.jpg",
  },
  {
    title: "Fallopian Tube Recanalization",
    desc: "Non-surgical treatment to unblock fallopian tubes.",
    img: "/Fallopian%20Tube%20Recanalization.jpg",
  },
  {
    title: "Varicocele Embolization",
    desc: "Minimally invasive relief for varicocele without surgery.",
    img: "/Varicocele%20Embolization.jpg",
  },
  {
    title: "Thyroid Nodule Ablation",
    desc: "Minimally invasive treatment for thyroid nodules.",
    img: "/Thyroid%20Nodul%20Ablation.jpg",
  },
  {
    title: "Uterine Fibroid Embolization",
    desc: "A non-surgical procedure to shrink fibroids and relieve symptoms.",
    img: "/Uterine%20Fibroid%20Embolization.jpg",
  },
  {
    title: "Varicose Veins",
    desc: "Non-surgical treatment for varicose veins.",
    img: "/Varicose%20Veins.jpg",
  },
  {
    title: "Transcatheter Aortic Valve Replacement",
    desc: "Non-surgical aortic valve replacement for better heart function.",
    img: "/Transcatheter%20Aortic%20Valve%20Replacement.jpg",
  },
];

const ArrowButton = ({ highlight }) => (
  <button
    className={`w-9 h-9 flex items-center justify-center rounded-full border-none focus:outline-none mt-2 ${
      highlight ? "bg-[#ff3576] text-white" : "bg-white text-[#1a1446] border border-gray-200"
    } shadow-md`}
  >
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="none" />
      <path d="M10 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const OurServiceSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#1a1446] mb-2 text-center">
          Say Goodbye to <span className="text-[#ff3576]">Surgery</span>
        </h2>
        <p className="text-lg text-gray-400 mb-8 text-center">
          Explore Safer, Scar-Free Treatments
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {treatments.map((t, idx) => (
            <div
              key={t.title}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <h3 className="text-lg font-bold text-[#1a1446] mb-2 leading-snug">{t.title}</h3>
                <p className="text-gray-400 text-base mb-4">{t.desc}</p>
              </div>
              <div className="flex items-end justify-between mt-auto">
                <ArrowButton highlight={!!t.highlight} />
                <img src={t.img} alt={t.title} className="w-16 h-16 object-contain ml-auto mt-4" />
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="flex items-center gap-2 mt-8">
          <span className="w-10 h-3 rounded-full bg-[#1a1446] inline-block" />
          <span className="w-6 h-3 rounded-full bg-gray-200 inline-block" />
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;
