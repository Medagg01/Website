import React from 'react';

export default function About_herosection() {
  return (
    <section
      className='relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: 'url(\'/Aboutus_bg.jpg\')' }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-[#392C5C]/70 z-0' />
      <div className='relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-8 py-20'>
        {/* Left: Content */}
        <div className='flex-1 text-left max-w-xl'>
          <div className='mb-8'>
            <span className='block mb-3 text-base font-medium text-white'>Follow Us On :</span>
            <div className='flex gap-3'>
              <a href='#' className='text-gray-300 hover:text-white transition-colors duration-200' aria-label='Facebook'>
                <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12'/>
                </svg>
              </a>
              <a href='#' className='text-gray-300 hover:text-white transition-colors duration-200' aria-label='Instagram'>
                <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37c-.98.98-1.24 2.092-1.298 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.058 1.281.318 2.393 1.298 3.373.98.98 2.092 1.24 3.373 1.298C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.373-1.298.98-.98 1.24-2.092 1.298-3.373.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.058-1.281-.318-2.393-1.298-3.373-.98-.98-2.092-1.24-3.373-1.298C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z'/>
                </svg>
              </a>
              <a href='#' className='text-gray-300 hover:text-white transition-colors duration-200' aria-label='YouTube'>
                <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
                </svg>
              </a>
              <a href='#' className='text-gray-300 hover:text-white transition-colors duration-200' aria-label='LinkedIn'>
                <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z'/>
                </svg>
              </a>
              <a href='#' className='text-gray-300 hover:text-white transition-colors duration-200' aria-label='X'>
                <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>
                </svg>
              </a>
            </div>
          </div>
          <h1 className='w-full text-left text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg'>
            We Help You Skip Surgery, <span className='text-pink-400'>Not Solutions.</span>
          </h1>
          <p className='w-full text-left text-white/80 text-base md:text-lg mb-10 font-medium drop-shadow ml-0 pl-0'>
            Medagg Healthcare is revolutionizing non-surgical treatments through Interventional Radiology across India, making healthcare more accessible, transparent, and patient-centered.
          </p>
          <div className='flex gap-5'>
            <a href='/book-appointment' className='bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-lg font-bold text-lg shadow-lg transition'>Book Appointment</a>
            <a href='#chat' className='border-2 border-white text-white px-7 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-pink-500 transition shadow-lg'>Chat With Us</a>
          </div>
        </div>
        {/* Right: Image */}
        <div className='flex-1 flex items-end justify-end absolute right-0 bottom-0 h-full w-full pointer-events-none select-none'>
          <img
            src='/patient_for_about_1-removebg-preview.png'
            alt='Doctor with patient'
            className='object-contain drop-shadow-2xl'
            style={{ position: 'absolute', right: 0, bottom: 0, maxHeight: '85%', maxWidth: '50%', width: 'auto', height: 'auto', minWidth: '180px', pointerEvents: 'none', margin: 0, padding: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
