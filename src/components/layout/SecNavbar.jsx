import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const treatments = [
  'Knee pain',
  'Enlarged Prostate',
  'Thyroid Nodule',
  'Varicocele',
  'Fallopian Tube Block',
  'Uterine Fibroids',
  'Varicose Veins',
  'Interventional Cardiology',
  'Interventional Neurology',
  'Interventional Oncology'
];

const SecNavbar = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 200;
      if (direction === 'left') {
        scrollContainer.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainer.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="bg-white shadow-md py-2 w-full sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <button 
            onClick={() => scroll('left')}
            className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none shrink-0"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollContainer}
            className="flex flex-1 overflow-x-auto scrollbar-hide space-x-4 px-2 py-2"
            style={{ scrollBehavior: 'smooth' }}
          >
            {treatments.map((treatment, index) => (
              <button
                key={index}
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors shrink-0"
              >
                {treatment}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none shrink-0"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecNavbar;