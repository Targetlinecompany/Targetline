'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import userIcon from 'public/images/home/userIcon.png';
import logo from 'public/images/targetline logo.png';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { LuSearch } from 'react-icons/lu';

import Dropdown from './Dropdown';

interface Props {
  navigation: Array<{
    name: string;
    href: string;
    current?: boolean;
    dropdownItems?: Array<{ name: string; href: string }>;
  }>;
  setSidebarOpen: (open: boolean) => void;
}

export default function MainNavBar({ navigation, setSidebarOpen }: Props) {
  const router = usePathname();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <nav id='#one'>
      <div className='flex justify-between items-center lg:flex-row flex-row-reverse p-2 w-full h-16 md:px-10 max-w-[75rem] mx-auto'>
        <Link href='/' className='my-2 h-14 w-14'>
          <Image src={logo} height={60} width={60} alt='Target Line Logo' />
        </Link>

        <div className='items-center justify-center hidden gap-3 overflow-hidden lg:flex'>
          {navigation.map((item, index) =>
            item.dropdownItems ? (
              <Dropdown
                key={index}
                title={item.name}
                items={item.dropdownItems.map((subItem) => ({
                  ...subItem,
                }))}
              />
            ) : (
              <Link
                key={index}
                href={item.href}
                className={`text-white ${
                  router == item.href
                    ? 'bg-neutral-800/65 px-2 py-1 rounded-md font-bold'
                    : 'hover:hover:bg-neutral-700/60 px-2 py-1 rounded-md hover:border-white-color text-white-color hover:bg-border-white-color transition-colors duration-300 text-lg'
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className='flex items-center justify-end gap-4'>
          <div className='lg:flex items-center gap-4 hidden cursor-pointer relative'>
            <div className='relative'>
              <input
                type='text'
                className='rounded-lg p-1 pl-10 bg-transparent outline-none border-2 border-neutral-800 ring-0 text-white'
                placeholder='Search...'
              />
              <LuSearch className='absolute left-2 top-2 text-white' />
            </div>

            <div className='relative'>
              <Image
                alt='user image'
                src={userIcon}
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              />
              {isUserDropdownOpen && (
                <div className='absolute -right-5 mt-3 bg-neutral-700/40 text-white w-36 rounded-md shadow-lg z-10'>
                  <Link
                    href='/create-account'
                    className='block p-2 rounded-md hover:bg-neutral-700/60 cursor-pointer '
                  >
                    Create Account
                  </Link>
                  <Link
                    href='/login'
                    className='block p-2 rounded-md hover:bg-neutral-700/60 cursor-pointer'
                  >
                    Log In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='lg:hidden'>
          <FaBars
            className='w-6 h-6 text-white cursor-pointer'
            aria-hidden='true'
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>
    </nav>
  );
}
