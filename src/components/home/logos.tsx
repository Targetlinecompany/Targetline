import Image from 'next/image';
import React from 'react';

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
            <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
              <Image
                alt='Transistor'
                src='https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg'
                width={158}
                height={48}
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
