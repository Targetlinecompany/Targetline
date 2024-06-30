'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { UrlObject } from 'url';

import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { MobileNav } from './mobile-nav';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';

import { MainNavItem } from '@/types';
interface MainNavProps {
  items?: MainNavItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: React.ReactNode;
}

export function NavBar({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  return (
    <div className=' mx-auto mt-4 z-40 pb-6'>
      <div className='container flex justify-between items-center z-30'>
        <Link href='/' className='items-center space-x-2 md:flex z-30'>
          <Image
            src='/images/microcis-logo.png'
            alt='Microcis Image'
            width='100'
            height='100'
            className='h-10 w-16 md:w-full md:h-14 z-10'
          />
        </Link>
        <NavigationMenuDemo items={items} />

        <button
          className='flex items-center space-x-2 lg:hidden'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.Menu />}
        </button>
        {showMobileMenu && items && (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
    </div>
  );
}

export function NavigationMenuDemo({ items }: MainNavItem) {
  return (
    <NavigationMenu className='hidden  lg:flex justify-between items-center z-30'>
      <NavigationMenuList>
        {items.map(
          (
            item: {
              isExpanded: string;
              title: string;
              href: string | UrlObject;
            },
            index: number
          ) => (
            <NavigationMenuItem key={index}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
