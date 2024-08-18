import Image from 'next/image';
import React from 'react';

export default function MoreLogos() {
  const images = Array.from({ length: 75 }, (_, i) => `/logos/${i + 1}.png`);

  return (
    <div className='w-full  bg-gray-900 mt-20'>
      <div className='max-w-5xl mx-auto lg:max-w-7xl'>
        <div className='grid grid-cols-6 gap-4'>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              className='object-contain'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
