import Image from 'next/image';
import React from 'react';

export default function Logos() {
  return (
    <div className='max-w-full mb-24 bg-gray-900 sm:mb-32'>
      <div className='max-w-5xl mx-auto lg:max-w-7xl'>
        <div className='relative overflow-hidden isolate'>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 translate-y-0 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            aria-hidden='true'
          >
            <circle
              cx='512'
              cy='512'
              r='512'
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fill-opacity='0.7'
            ></circle>
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stop-color='#14b8a6'></stop>
                <stop offset='1' stop-color='#0e7490'></stop>
              </radialGradient>
            </defs>
          </svg>
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
              <Image
                alt='Reform'
                src='https://tailwindui.com/img/logos/158x48/reform-logo-white.svg'
                width={158}
                height={48}
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              />
              <Image
                alt='Tuple'
                src='https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg'
                width={158}
                height={48}
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              />
              <Image
                alt='SavvyCal'
                src='https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg'
                width={158}
                height={48}
                className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
              />
              <Image
                alt='Statamic'
                src='https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg'
                width={158}
                height={48}
                className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
