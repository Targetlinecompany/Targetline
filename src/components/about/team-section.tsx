'use client';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { teamData } from '@/lib/data';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/cart';

export function TeamCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full'
    >
      <CarouselContent>
        {teamData.map((member, index) => (
          <CarouselItem key={index} className='md:basis-1 lg:basis-1/2 '>
            <Card>
              <div className='flex-col flex items-center transition-all p-4 duration-500 lg:flex-row'>
                <div className='w-full lg:w-48 h-64 max-lg:max-w-[200px] max-lg:mx-auto'>
                  <Image
                    height={400}
                    width={400}
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    className='rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full'
                  />
                </div>
                <div className='text-center lg:text-left max-w-xs flex-1 mx-auto'>
                  <div className='mb-5 pb-5 border-b border-solid border-gray-300'>
                    <h6 className='text-lg text-gray-900 font-semibold mb-1'>
                      {member.name}
                    </h6>
                    <span className='text-sm text-gray-500 group-hover:text-[#005c8c]'>
                      {member.title}
                    </span>
                  </div>
                  <p className='text-gray-500 mx-auto lg:mx-0 leading-6 mb-7'>
                    {member.description}
                  </p>
                  <div className='flex items-center gap-4 justify-center lg:justify-start'>
                    <Link
                      href={member.linkedIn}
                      target='_blank'
                      className='cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-[#005c8c]'
                    >
                      <Linkedin size={20} className='group-hover:text-white' />
                    </Link>
                    <Link
                      href={member.gitHub}
                      target='_blank'
                      className='cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-[#005c8c]'
                    >
                      <Github size={20} className='group-hover:text-white' />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
