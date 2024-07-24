'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const LogoScroller: React.FC = () => {
  const logosRef = useRef<HTMLUListElement | null>(null);
  const logos = [
    'logo.png',
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7.png',
    'logo8.png',
    'logo9.png',
    'logo10.png',
    'logo11.png',
    'logo12.png',
  ];

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      const clonedUl = ul.cloneNode(true) as HTMLUListElement;
      clonedUl.setAttribute('aria-hidden', 'true');
      ul.parentNode?.insertBefore(clonedUl, ul.nextSibling);
    }
  }, []);

  return (
    <div
      className='w-full pt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] '
      dir='ltr'
    >
      <ul
        ref={logosRef}
        className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={`/logos/${logo}`}
              alt={`Logo ${index + 1}`}
              width={100}
              height={80}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoScroller;
