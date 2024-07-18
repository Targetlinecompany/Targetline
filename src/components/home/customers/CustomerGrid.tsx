import AOS from 'aos';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

export type CustomerProps = {
  id: number;
  src: StaticImageData;
  alt: string;
};

const CustomerGrid = ({ customers }: { customers: CustomerProps[] }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className='flex flex-wrap items-center justify-center w-full'>
      {customers.map((customer) => (
        <div
          key={customer.id}
          className='flex items-center justify-center '
          data-aos='fade-up'
          data-aos-duration='3000'
        >
          <Image src={customer.src} alt={customer.alt} className='h-20' />
        </div>
      ))}
    </div>
  );
};

export default CustomerGrid;
