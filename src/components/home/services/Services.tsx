import React from 'react';

import { ServicesCardData } from '@/lib/data';

import Button from '@/components/common/Button';
import ServicesCard from '@/components/home/services/ServicesCard';

export default function Services() {
  return (
    <div className='flex justify-center flex-col gap-8 w-[80%] mx-auto'>
      <div className='flex justify-center items-center gap-4 mb-8'>
        <div className='w-32 bg-[#D9D9D9] h-0.5'></div>

        <h2 className='text-center text-3xl text-white '>Services</h2>
        <div className='w-32 bg-[#D9D9D9] h-0.5'></div>
      </div>

      <ServicesCard data={ServicesCardData} />

      <div className='flex items-center justify-center'>
        <Button className='text-white'>Purchase consultation</Button>
      </div>
    </div>
  );
}
