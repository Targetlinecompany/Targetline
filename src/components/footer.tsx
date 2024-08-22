import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { JSX, SVGProps } from 'react';

import { Container } from '@/components/ui/Container';

import { Link } from '@/navigation';

import { BackToTop } from './BackToTop';
import { GithubIcon, InstagramIcon, TelegramIcon } from './icons';

export function Footer() {
  const t = useTranslations('footer');

  const navigation = [
    {
      name: t('home'),
      href: '/',
    },
    {
      name: t('about'),
      href: '/about',
    },
    {
      name: t('membership'),
      href: '/membership',
    },
  ];
  const social = [
    {
      name: 'GitHub',
      href: 'https://github.com/Targetlinecompany',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <GithubIcon {...props} />
      ),
    },
    {
      name: 'Instagram',
      href: '',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <InstagramIcon {...props} />
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/@targetlincompany',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <TelegramIcon {...props} />
      ),
    },
  ];

  return (
    <footer
      className='bg-gray-900 border-t-2 border-gray-800'
      aria-labelledby='footer-heading'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>

      <Container className='pt-16 pb-8 sm:pt-24 lg:pt-32'>
        <div className='max-w-2xl mx-auto xl:grid xl:grid-cols-5 xl:gap-32 lg:mx-0 lg:max-w-none'>
          <div className='space-y-8 xl:col-span-2'>
            <Image
              src='/images/targetline-logo.png'
              alt='Raha Charity Foundation'
              width={480}
              height={1085}
              className='w-auto h-14'
            />
            <p className='max-w-2xl text-sm leading-6 text-gray-300 lg:w-full'>
              {t('heading')}
            </p>
            <div className='flex space-x-6 rtl:space-x-0 rtl:gap-6'>
              {social.map((item) => (
                <a
                  target='_blank'
                  rel='noreferrer'
                  key={item.name}
                  href={item.href}
                  aria-label={'Follow us on ' + item.name}
                  className='text-gray-400 hover:text-gray-300'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='w-6 h-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-8 mt-16 xl:col-span-3 xl:mt-0'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>
              <div>
                <ul
                  role='list'
                  className='mt-6  flex gap-6 justify-center items-start'
                >
                  {navigation.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className='text-sm leading-6 text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between max-w-2xl pt-8 mx-auto mt-16 border-t border-white/10 sm:mt-20 lg:mt-24 lg:mx-0 lg:max-w-none sm:flex-row gap-y-4'>
          <div>
            <p className='text-sm leading-5 text-gray-400'>
              {t('copyright', { date: new Date().getFullYear() })}
            </p>
            <p className='text-xs leading-5 text-gray-400'>{t('develop')}</p>
            <p className='mt-2 text-xs leading-5 text-gray-400 sr-only'>
              Built with love by{' '}
              <a
                href='https://github.com/SayeedMahdi'
                target='_blank'
                className='text-gray-300 hover:underline'
                rel='noreferrer'
              >
                Sayeed Mahdi Mousavi
              </a>
            </p>
          </div>
          <div className='hidden sm:block'>
            <BackToTop />
          </div>
        </div>
      </Container>
    </footer>
  );
}
