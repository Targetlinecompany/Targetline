import Image from 'next/image';
import React from 'react';

import HeroAbout from '@/components/about/hero-about';
import OurMission from '@/components/about/our-mission';
import { OurPromise } from '@/components/about/our-promise';
import { TeamCarousel } from '@/components/about/team-section';
import Partnership from '@/components/home/partnership';

export default function AboutComponent() {
  return (
    <>
      <HeroAbout />
      <div className='container'>
        <section className='my-10 sm:py-20 relative'>
          <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
              <div className='img-box relative'>
                <Image
                  height={500}
                  width={500}
                  src='/images/microcis-team1.jpg'
                  alt='About Us'
                  className='max-lg:mx-auto rounded-md h-full'
                />
              </div>
              <div className='absolute -bottom-14 left-1/3 z-10'>
                <Image
                  src='/images/dots-2.png'
                  alt='hero image'
                  width={200}
                  height={200}
                  className=' -z-10 object-fill'
                />
              </div>
              <div className='flex items-center'>
                <div className='data w-full'>
                  <h2 className='font-manrope font-bold text-2xl lg:text-5xl text-black mb-9 max-lg:text-center relative'>
                    About Us{' '}
                  </h2>
                  <p className='font-normal sm:text-xl  leading-8 text-gray-500 max-lg:text-center mx-auto'>
                    Microcis is a leading software development company dedicated
                    to creating innovative and customized software solutions.
                    Our expertise spans custom software development, mobile app
                    development, web development, software consulting, cloud
                    solutions, and AI & machine learning. We pride ourselves on
                    delivering high-quality, user-friendly, and efficient
                    products that drive business success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our mission */}
        <div className='mx-auto mt-4 mb-10 md:mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='bg-white p-4 rounded-2xl shadow-md shadow-gray-200'>
              <h6 className='font-bold text-[#005b8cd5] text-3xl mb-2'>
                Our Mission
              </h6>
              <p className='text-gray-500'>
                Microcis combines high quality software development with
                excellent service to add value to your business. Our commitment
                is to deliver results and save your time and money. while
                developing a long-time relationship that benefits us both.
              </p>
            </div>
            <OurMission />
          </div>
        </div>
        {/* team member */}
        <section className='my-10 md:my-20'>
          <div className='mx-auto lg:px-8'>
            <div className='mb-24'>
              <h2 className='font-manrope text-4xl text-center font-bold text-gray-900 mb-6'>
                Meet our soldier of our company
              </h2>
              <p className='text-lg text-gray-500 text-center'>
                We provide all the advantage that can simplify all your
                financial and banking support without any further issues
              </p>
            </div>

            <TeamCarousel />
          </div>
        </section>
      </div>
      <section className='bg-gray-100 py-10'>
        <h2 className='text-3xl text-center mb-8 font-bold '>Our Promise</h2>
        <OurPromise />
      </section>
    </>
  );
}
