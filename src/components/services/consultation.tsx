import Link from 'next/link';
import React from 'react';

export default function Consultation() {
  return (
    <div>
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-[#005c8c] to-[#005b8cd5] flex items-center justify-between flex-col lg:flex-row'>
            <div className='block text-center mb-5 lg:text-left lg:mb-0'>
              <h2 className='font-manrope text-3xl text-white font-semibold mb-5 lg:mb-2'>
                Want to build your product with us?
              </h2>
              <p className='text-xl text-indigo-100'>
                We've delivered over 100 international projects and are always
                happy to help!
              </p>
            </div>
            <Link
              href='#'
              className='flex items-center gap-2 bg-white rounded-lg shadow-sm text-lg text-[#005b8cd5] font-semibold hover:scale-105 p-4 transition-all duration-500'
            >
              Book a Free Consoltation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
