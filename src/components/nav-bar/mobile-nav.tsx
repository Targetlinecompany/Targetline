import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { useLockBody } from '@/hooks/use-lock-body';

import Icon from '@/components/ui/icon';

import { MainNavItem } from '@/types';

interface MobileNavProps {
  items: MainNavItem[];
  callActionButton: MainNavItem[];
  children?: React.ReactNode;
}
export function MobileNav({
  items,
  callActionButton,
  children,
}: MobileNavProps) {
  useLockBody();
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [expandedSubmenus, setExpandedSubmenus] = React.useState<number[]>([]);

  const closeSubmenus = () => {
    setExpandedSubmenus([]);
  };

  React.useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInsideMenu = target.closest('.mobile-nav');

      if (!isInsideMenu) {
        closeSubmenus();
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div
      className={cn(
        'mobile-nav fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden'
      )}
    >
      <div className='relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md'>
        <nav className='grid grid-flow-row auto-rows-max text-sm'>
          {items.map((item, index) => (
            <div key={index} className='relative'>
              <Link
                href={item.href}
                className={cn(
                  'flex w-full items-center justify-between rounded-md p-2 text-sm font-medium hover:bg-ourLightBlue hover:text-accent-foreground focus:bg-ourLightBlue focus:text-accent-foreground',
                  item.disabled && 'cursor-not-allowed opacity-60'
                )}
              >
                <div className='flex gab-3'>
                  <Icon name={item.icon} size={20} />
                  <span className='ml-2'>{item.title}</span>
                </div>
              </Link>
            </div>
          ))}

          {callActionButton.map((item, index) => (
            <div key={index} className='relative'>
              <Link
                className={cn(
                  'flex w-full items-center justify-between rounded-md p-2 text-sm font-medium hover:bg-ourLightBlue hover:text-accent-foreground focus:bg-ourLightBlue focus:text-accent-foreground',
                  item.disabled && 'cursor-not-allowed opacity-60'
                )}
                href={`${
                  item.href === '/contact' ? 'tel:0093745450318' : item.href
                }`}
              >
                <div className='flex gab-3'>
                  <Icon name={item.icon} size={20} />
                  <span className='ml-2'>{item.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </nav>

        {children}
      </div>
    </div>
  );
}
