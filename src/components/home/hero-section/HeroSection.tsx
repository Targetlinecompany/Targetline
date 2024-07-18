import Image from 'next/image';
import hero from 'public/images/home/hero.png';
import React from 'react';

import HeroCard from '@/components/home/hero-section/HeroCard';

export default function HeroSection() {
  return (
    <section className='relative w-full h-screen z-20'>
      <Image
        alt='hero section'
        src={hero}
        layout='fill'
        objectFit='cover'
        className='-z-10'
      />
      <div className='relative z-10 flex'>
        <HeroCard />
      </div>
    </section>
  );
}
