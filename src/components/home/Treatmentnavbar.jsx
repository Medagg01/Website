import React, { useState } from 'react';

const treatments = [
  'Knee Pain',
  'Enlarged Prostate',
  'Thyroid Nodule',
  'Varicocele',
  'Fallopian Tube Block',
  'Uterine Fibroids',
  'Varicose Veins',
  'Interventional',
];

export default function Treatmentnavbar() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav className="w-full bg-white border-b border-[#392C5C]/20 flex justify-center">
      <div className="flex flex-row w-[1440px] h-[60px] items-center justify-center py-0">
        <ul className="flex flex-row gap-[30px] max-w-[1179px] min-h-[20px] mx-auto items-center justify-center w-auto">
          {treatments.map((treatment, idx) => (
            <li key={treatment} className="relative flex items-center">
              <button
                className="flex items-center gap-2 text-[#2D2552] font-normal text-[15px] leading-tight tracking-wide focus:outline-none transition-colors duration-150 whitespace-nowrap"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{minHeight: '20px'}}
              >
                <span className="align-middle whitespace-nowrap">{treatment}</span>
                <span className="align-middle text-base">▼</span>
              </button>
              {/* Dropdown placeholder */}
              {openIndex === idx && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10 p-4">
                  <span className="text-gray-400">Dropdown content here</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
