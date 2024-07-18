import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

type ServicesCardProps = {
  image: StaticImageData;
  title: string;
  desc: string;
  href: string;
};

type ServicesCardData = {
  data: ServicesCardProps[];
};

export default function ServicesCard({ data }: ServicesCardData) {
  return (
    <div className='flex lg:flex-row flex-col gap-8 w-full justify-between items-center'>
      {data.map((item, index) => (
        <div
          key={index}
          id={item.href.replace('#', '')}
          className='text-white lg:w-[30%] flex flex-col items-center space-y-3'
        >
          <Link
            href={item.href}
            className='text-white w-full flex flex-col  items-center space-y-3'
          >
            <Image alt={item.title} src={item.image} />
            <p className='text-3xl font-semibold'>{item.title}</p>
            <p className='text-center'>{item.desc}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
