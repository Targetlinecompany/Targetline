'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

import CustomerCard from '@/components/customers/CustomerCard';

export type CustomerProps = {
  id: number;
  src: StaticImageData;
  alt: string;
  name: string; // Add any other relevant information for the card
  description: string[];
  hoverImage: StaticImageData;
  titleCard: string[];
};

export default function CustomersLogo({
  customers,
}: {
  customers: CustomerProps[];
}) {
  const [hoveredCustomerId, setHoveredCustomerId] = useState<number | null>(
    null
  );

  return (
    <div className='text-white w-[80%] mx-auto md:px-10 p-2'>
      <div className='flex flex-wrap items-center justify-center w-full'>
        {customers.map((customer) => (
          <div
            key={customer.id}
            className='flex items-center justify-center relative'
            onMouseEnter={() => setHoveredCustomerId(customer.id)}
            onMouseLeave={() => setHoveredCustomerId(null)}
          >
            <Image src={customer.src} alt={customer.alt} className='h-20' />
            {hoveredCustomerId === customer.id && (
              <CustomerCard customer={customer} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
