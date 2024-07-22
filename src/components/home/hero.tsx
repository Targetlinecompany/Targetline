import Link from 'next/link';
import { useTranslations } from 'next-intl';

import ImageHero from '@/components/home/ImageHero';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <div className='bg-gray-900'>
      <div className='relative isolate pt-4 overflow-hidden'>
        <svg
          className='absolute left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] -z-10'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width='200'
              height='200'
              x='50%'
              y='-1'
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none'></path>
            </pattern>
          </defs>
          <svg x='50%' y='-1' className='overflow-visible fill-gray-500'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth='0'
            ></path>
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth='0'
            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
          ></rect>
        </svg>
        <div className='mx-auto max-w-7xl px-6 py-24 sm:py-8 lg:flex lg:items-center md:h-screen lg:gap-x-10 lg:px-8 lg:py-6 font-normal'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
            <div className='hidden sm:mb-8 sm:flex'>
              <div className='relative px-3 text-sm leading-6 text-white transition rounded-full ring-1 ring-white hover:ring-gray-300'>
                {t('cta')}{' '}
                <Link
                  className='font-semibold text-gray-200 group'
                  href='/contact'
                >
                  <span className='absolute inset-0' aria-hidden='true'></span>
                  <span className='inline-flex flex-row transition-all gap-x-1 group-hover:gap-x-2 text-white'>
                    {t('ctaLink')}{' '}
                    <span aria-hidden='true' className='rtl:rotate-180'>
                      →
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <h1 className='text-4xl font-bold tracking-tight text-gray-300 sm:text-4xl md:text-4xl lg:text-5xl'>
              {t('title')}
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-200'>
              {t('description')}
            </p>
            <div className='mt-6 flex items-center gap-x-6'>
              <Link
                href='/book-meeting'
                className='rounded-lg bg-ourBlue px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-ourBlueLighter duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
              >
                {t('buttonText')}
              </Link>
            </div>
          </div>
          <ImageHero />
        </div>
      </div>
    </div>
  );
}
