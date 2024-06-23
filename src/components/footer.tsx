import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Icon from '@/components/ui/icon';

function Footer() {
  return (
    <footer className='bg-gray-50'>
      <div className='mx-auto max-w-screen-xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-10 mt-16 lg:px-8'>
        <div className='flex justify-between flex-col sm:flex-row gap-4'>
          <div>
            <div>
              <Image
                src='/images/microcis-logo.png'
                alt='logo'
                width={100}
                height={100}
              />
            </div>

            <address className='flex gap-1 justify-center align-top mt-4 max-w-md text-gray-500'>
              <Icon name='MapPin' size={30} />
              <span>
                275 Commercial blvd, ste 301, Lauderdale by the sea, Fl, 33308,
                United States
              </span>
            </address>

            <ul className='mt-8 flex sm:gap-6 gap-3'>
              <li>
                <Link
                  href='https://www.linkedin.com'
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <Icon name='Linkedin' size={20} color='gray' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.twitter.com'
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  <span className='sr-only'>Twitter</span>
                  <Icon name='Twitter' size={20} color='gray' />
                </Link>
              </li>
            </ul>
          </div>

          <div className=' flex flex-col items-center space-y-8 justify-center '>
            <div className='w-full flex justify-between sm:gap-6 gap-3 items-center '>
              <Link
                href='/'
                className='md:text-lg hover:text-ourBlue duration-150'
              >
                Home
              </Link>
              <Link
                href='/about'
                className='md:text-lg hover:text-ourBlue duration-150'
              >
                About
              </Link>
              <Link
                href='/blogs'
                className='md:text-lg hover:text-ourBlue duration-150'
              >
                Blog
              </Link>
              <Link
                href='/services'
                className='md:text-lg hover:text-ourBlue duration-150'
              >
                Services
              </Link>
              <Link
                href='/services'
                className='md:text-lg hover:text-ourBlue duration-150'
              >
                Estimate
              </Link>
            </div>
            <div className='flex space-x-5 justify-center items-center'>
              <Link href='tel:0093745450318' target='_blank'>
                <button className='border border-ourBlue text-ourBlue px-4 py-2 rounded-lg flex items-center'>
                  <Phone className='mr-2' />
                  Make A Call
                </button>
              </Link>
            </div>
          </div>
        </div>

        <p className='text-xs text-gray-500'>
          &copy; 2024 Microcis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
