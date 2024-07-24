import React from 'react';

import LogoScroller from '@/components/home/LogoScroller';

export default function Logos() {
  return (
    <div className='max-w-full  bg-gray-900 '>
      <div className='max-w-5xl mx-auto lg:max-w-7xl'>
        <div className='relative overflow-hidden isolate'>
          <div className='max-w-2xl px-6 py-32 mx-auto text-center sm:py-36 lg:flex-auto lg:py-40 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Top companies rely on us
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              We are proud of our partners and their success in driving
              innovation.
            </p>
            <LogoScroller />
          </div>
        </div>
      </div>
    </div>
  );
}
