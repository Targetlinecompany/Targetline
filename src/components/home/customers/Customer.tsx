'use client';

import React from 'react';

import { additionalCustomers, initialCustomers } from '@/lib/data';

import CustomerGrid from './CustomerGrid';
import ShowMore from './ShowMore';

const Customer = () => {
  return (
    <div className='bg-black w-[80%] mx-auto text-white p-8'>
      <div className='flex justify-center items-center gap-4 mb-8'>
        <div className='w-32 bg-[#D9D9D9] h-0.5'></div>

        <h2 className='text-center text-3xl '>Customers</h2>
        <div className='w-32 bg-[#D9D9D9] h-0.5'></div>
      </div>
      <CustomerGrid customers={initialCustomers} />

      <ShowMore customers={additionalCustomers} />
    </div>
  );
};

export default Customer;
