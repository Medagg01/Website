import React from "react";

const cards = [
  {
    type: "Type 1",
    typeColor: "bg-[#392C5C] text-white",
    img: "/Type1.png",
    title: '"I already know I need a procedure, help me find the best hospital."',
    bold: true,
    desc: "You have a diagnosis but need guidance on where to get the best care with minimal waiting time.",
    quote: "Medagg helped me find a clinic for my knee procedure with a 2-week shorter wait time.",
    name: "Suraiya",
    city: "Kolkata"
  },
  {
    type: "Type 2",
    typeColor: "bg-pink-500 text-white",
    img: "/Type2.png",
    title: '"I have symptoms but don\'t know where to start."',
    bold: true,
    desc: "You're experiencing health issues but unsure which specialist to see or what treatments to consider.",
    quote: "The care team guided me to the right specialist after months of trying to figure out my chronic pain issues.",
    name: "Thomas",
    city: "Chennai"
  },
  {
    type: "Type 3",
    typeColor: "bg-[#392C5C] text-white",
    img: "/Type3.png",
    title: '"I need a second opinion before I make a decision."',
    bold: true,
    desc: "You've received a diagnosis or treatment plan but want to explore alternatives before proceeding.",
    quote: "Medagg’s second opinion saved me from unnecessary spinal surgery — I’m now pain-free with minimal treatment.",
    name: "Nazim",
    city: "Hyderabad"
  }
];

export default function Type_of_paients_about() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2552] mb-2">
        Types of Patients <span className="text-pink-500">We Serve</span>
      </h2>
      <p className="text-gray-500 text-base md:text-lg mb-10 max-w-2xl">
        No matter where you are in your healthcare journey, we’re here to help you find the right path forward.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-0 flex flex-col overflow-hidden border border-gray-100 flex-1 min-w-0">
            <img src={card.img} alt={card.type} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-6 flex flex-col flex-1">
              <span className={`inline-block w-auto min-w-[48px] max-w-[70px] px-2 py-0.5 rounded-full text-xs font-semibold mb-3 mx-0 ${card.typeColor}`}>{card.type}</span>
              <div className="font-bold text-[#2D2552] mb-2" style={{fontWeight: 700}}>{card.title}</div>
              <div className="text-gray-500 text-sm mb-4">{card.desc}</div>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <span className="italic text-[#392C5C] text-sm">{card.quote}</span>
                </div>
                <div className="mt-2 text-xs text-gray-500 font-semibold">
                  {card.name} <span className="font-normal">{card.city}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
