import {
  BarChart4Icon,
  BoxesIcon,
  HeadsetIcon,
  HeartHandshakeIcon,
} from 'lucide-react';
import React from 'react';

export default function ServicesComponent() {
  return (
    <div className='bg-[#c4e1f1d5]'>
      <div className='mb-20'>
        <h2 className='text-4xl text-center font-bold text-gray-900 m-2'>
          Our Values
        </h2>
      </div>
      <div className='container flex flex-col lg:gap-4 gap-12  lg:flex-row  relative duration-150'>
        <div className='group relative bg-white hover:bg-yellow-500 p-6 rounded-lg shadow-lg max-w-md'>
          <div className='flex justify-between'>
            <BarChart4Icon className='h-16 w-16 text-yellow-500 group-hover:text-white' />
            <span className='text-gray-100 text-6xl'>01</span>
          </div>
          <div className='my-6 space-y-2 group-hover:text-white '>
            <h3 className='text-lg font-bold text-yellow-500 group-hover:text-white'>
              Polygon Card
            </h3>
            <p className='text-gray-500 group-hover:text-white'>
              This is a beautifully designed polygon-shaped card with a title,
              description, and an image.
            </p>
          </div>
          <div className='w-[4rem] h-[4rem] bg-yellow-500 rounded-sm transform rotate-[45deg] absolute left-6 -bottom-8 z-10 border-white border-8 '></div>
        </div>
        <div className='group relative bg-white hover:bg-[#005b8cd5] p-6 rounded-lg shadow-lg max-w-md transition-transform duration-300 ease-in-out'>
          <div className='flex justify-between'>
            <HeadsetIcon className='h-16 w-16 text-[#005b8cd5] group-hover:text-white' />
            <span className='text-gray-100 text-6xl'>02</span>
          </div>
          <div className='my-6 space-y-2 group-hover:text-white '>
            <h3 className='text-lg font-bold text-[#005b8cd5] group-hover:text-white'>
              Polygon Card
            </h3>
            <p className='text-gray-500 group-hover:text-white'>
              This is a beautifully designed polygon-shaped card with a title,
              description, and an image.
            </p>
          </div>
          <div className='w-[4rem] h-[4rem] bg-[#005b8cd5] rounded-sm transform rotate-[45deg] absolute left-6 -bottom-8 z-10 border-white border-8'></div>
        </div>
        <div className='group relative bg-white hover:bg-green-600 p-6 rounded-lg shadow-lg max-w-md transition-transform duration-300 ease-in-out'>
          <div className='flex justify-between'>
            <BoxesIcon className='h-16 w-16 text-green-600 group-hover:text-white' />
            <span className='text-gray-100 text-6xl'>03</span>
          </div>
          <div className='my-6 space-y-2 group-hover:text-white '>
            <h3 className='text-lg font-bold text-green-600 group-hover:text-white'>
              Polygon Card
            </h3>
            <p className='text-gray-500 group-hover:text-white'>
              This is a beautifully designed polygon-shaped card with a title,
              description, and an image.
            </p>
          </div>
          <div className='w-[4rem] h-[4rem] bg-green-600 rounded-sm transform rotate-[45deg] absolute left-6 -bottom-8 z-10 border-white border-8'></div>
        </div>
        <div className='group relative bg-white hover:bg-blue-400 p-6 rounded-lg shadow-lg max-w-md transition-transform duration-300 ease-in-out'>
          <div className='flex justify-between'>
            <HeartHandshakeIcon className='h-16 w-16 text-blue-400 group-hover:text-white' />
            <span className='text-gray-100 text-6xl'>04</span>
          </div>
          <div className='my-6 space-y-2 group-hover:text-white '>
            <h3 className='text-lg font-bold text-blue-400 group-hover:text-white'>
              Polygon Card
            </h3>
            <p className='text-gray-500 group-hover:text-white'>
              This is a beautifully designed polygon-shaped card with a title,
              description, and an image.
            </p>
          </div>
          <div className='w-[4rem] h-[4rem] bg-blue-400 rounded-sm transform rotate-[45deg] absolute left-6 -bottom-8 z-10 border-white border-8'></div>
        </div>
      </div>
    </div>
  );
}
