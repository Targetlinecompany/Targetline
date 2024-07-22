'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { services_data } from '../../lib/data';
export default function IdeationEvaluationServices() {
  const [textContentTitle, setTextContentTitle] = useState(services_data?.[0]);

  const handleClickCollapseFunction = (title: string) => {
    const filterData = services_data?.filter((item) => item?.title === title);
    setTextContentTitle(filterData?.[0]);
  };
  return (
    <div className='container mx-auto py-20 bg-gray-100 rounded-md'>
      <h2 className='text-3xl pb-8 pl-2 font-semibold text-center'>
        We make your business interesting
      </h2>
      <div className='flex flex-wrap p-6 justify-between items-center '>
        <div
          className='w-full md:w-1/2 mb-8 md:mb-0'
          style={{
            height: '30rem',
            display: 'none',
            backgroundImage: "url('./icons/exp.png')",
            backgroundSize: '70% auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className='w-full md:w-1/2 px-4'>
          <div>
            <Accordion type='single' collapsible>
              {services_data.map((item, i) => (
                <AccordionItem
                  value={`${i + 1}`}
                  key={i}
                  onClick={() => handleClickCollapseFunction(item.title)}
                >
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent className='text-md  leading-6 text-gray-500 text-justify'>
                    {item?.child?.map((child: string) => (
                      <div
                        className='text-sm md:text-base hover:underline no-underline'
                        key={child}
                      >
                        <Link
                          href={`/services/${child?.replaceAll(' ', '_')}`}
                          className='block py-1 px-2'
                        >
                          {child}
                        </Link>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className='w-full md:w-1/2 hidden md:flex px-6 place-items-end text-gray-600 justify-center items-center flex-col '>
          <Image
            src={textContentTitle.image}
            alt='icon'
            width={400}
            height={400}
          />
          <div>
            <h3 className='text-2xl font-semibold pb-2 text-grey-300'>
              {textContentTitle.title}
            </h3>

            <p className='leading-8'>{textContentTitle.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
