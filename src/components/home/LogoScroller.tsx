'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const LogoScroller: React.FC = () => {
  const logosRef = useRef<HTMLUListElement | null>(null);

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
        <li>
          <Image src='/hero/spark.svg' alt='Facebook' width={100} height={80} />
        </li>
        <li>
          <Image src='/hero/spark.svg' alt='Disney' width={100} height={80} />
        </li>
        <li>
          <Image src='/hero/spark.svg' alt='Airbnb' width={100} height={80} />
        </li>
        <li>
          <Image src='/hero/spark.svg' alt='Apple' width={100} height={80} />
        </li>
        <li>
          <Image src='/hero/spark.svg' alt='Spark' width={100} height={80} />
        </li>
        <li>
          <Image src='/hero/spark.svg' alt='Samsung' width={100} height={80} />
        </li>
        <li>
          <Image src='/hero/spark.svg' alt='Quora' width={100} height={80} />
        </li>
        <li>
          <Image src='/hero/spark.svg' alt='Sass' width={100} height={80} />
        </li>
      </ul>
    </div>
  );
};

export default LogoScroller;
