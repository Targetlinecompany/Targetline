import Image from 'next/image';
import React from 'react';

export default function HeroAbout() {
  return (
    <div className='h-screen  flex justify-center items-center'>
      {' '}
      <div className='absolute top-0 left-0 w-[33%] -z-10'>
        <Image
          src='/images/shape-1.png'
          alt='about image'
          width={4000}
          height={4000}
          className=''
        />
      </div>
      <section className='relative z-0'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 relative text-center'>
          <h1 className='max-w-2xl mx-auto text-center  font-bold text-2xl  text-gray-900 mb-5 md:text-5xl md:leading-tight'>
            We Digitize Any <span className='text-[#005b8cd5]'>Business</span>{' '}
            With Next-Gen Development Solutions{' '}
          </h1>
        </div>
        <div className='flex lg:flex-row flex-col text-center justify-center gap-6 px-4 sm:px-6 lg:px-8'>
          <div className='bg-gray-50 rounded-lg pt-4'>
            <h2 className='text-[#005b8cd5] font-bold'>Our Core Focus</h2>
            <p className='max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9'>
              Client growth and costs optimization through custom-tailored
              digitalization & processes automation software
            </p>
          </div>
          <div className='bg-gray-50  3cf rounded-lg pt-4'>
            <h2 className='text-[#005b8cd5] font-bold'>Our passion</h2>
            <p className='max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9'>
              High level of standard internally, making us invincible external
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
