import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { accordion } from '../../lib/data';

export default function WhatWEDo() {
  return (
    <div className='bg-gray-50 py-28 sm:py-36'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl'>
          <h2 className='text-base font-semibold leading-7 text-ourBlue'>
            What We Do?
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            We make every thing that you want.
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            we specialize in delivering cutting-edge technology solutions that
            drive innovation and efficiency. Our mission is to empower
            businesses through advanced technology and expert services.
          </p>
        </div>
        <div className='max-w-4xl mx-auto mt-16 sm:mt-16 lg:mt-16 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 sm:max-w-none gap-x-8 gap-y-8 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3'>
            {accordion.map((service, index) => (
              <div
                key={index}
                className='relative flex flex-col p-8 bg-white group rounded-3xl'
              >
                <dt className='flex items-center text-base font-semibold leading-7 text-gray-900 gap-x-3 w-full'>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={25}
                    height={25}
                  />
                  <h3 className='font-semibold transition-colors text-ourBlue'>
                    <Link
                      href='/estimate'
                      className='absolute inset-0 border pl-16 pt-7 rounded-3xl group-hover:border-ourBlue duration-100'
                    >
                      <span className='absolute inset-0 rounded-3xl'></span>
                      {service.title}
                    </Link>
                  </h3>
                </dt>
                <dd className='flex flex-col flex-auto mt-4 text-base leading-7 text-gray-600'>
                  <p className='flex-auto'>{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
