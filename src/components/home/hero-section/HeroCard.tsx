import React from 'react';

export default function HeroCard() {
  return (
    <div className='flex flex-col my-20 lg:my-48 sm:my-16  mx-auto lg:mx-60 gap-8 items-center md:flex-row max-w-[70rem] text-white'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-center sm:text-6xl text-3xl font-extrabold'>
          Our goalis
        </h1>
        <h1 className='text-center sm:text-6xl text-3xl font-extrabold'>
          to boost your sales
        </h1>
        <hr className='sm:my-5 my-2' />
        <p className='text-center'>Your customers will never forget you!</p>
        <div>
          <div className='flex sm:flex-row flex-row-reverse  items-center justify-center gap-4'>
            <button className='text-white border border-white px-4 rounded-md font-medium sm:text-base text-xs sm:font-semibold'>
              Targetline customers
            </button>
            <button className='bg-white text-black border border-white px-4 rounded-md font-medium sm:text-base text-xs sm:font-semibold'>
              Consultation & orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
