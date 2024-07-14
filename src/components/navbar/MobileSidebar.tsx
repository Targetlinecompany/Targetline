import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { FaXmark } from 'react-icons/fa6';

import MobileDropdown from '@/components/navbar/MobileDropdown';

import { cn } from '@/utils/cn';

interface Props {
  sidebarOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setSidebarOpen: (open: boolean) => void;
  navigation: Array<{
    name: string;
    href: string;
    current?: boolean;
    dropdownItems?: Array<{ name: string; href: string }>;
  }>;
}

type item = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  href: string;
  name: string;
};

export default function MobileSidebar({
  sidebarOpen,
  setSidebarOpen,
  navigation,
}: Props) {
  const router = usePathname();

  return (
    <Transition show={sidebarOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50 lg:hidden'
        onClose={setSidebarOpen}
      >
        <TransitionChild
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-900/80' />
        </TransitionChild>

        <div className='fixed inset-0 flex'>
          <TransitionChild
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <DialogPanel className='relative flex flex-1 w-full max-w-xs mr-16'>
              <TransitionChild
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 flex justify-center w-16 pt-5 left-full'>
                  <button
                    type='button'
                    className='-m-2.5 p-2.5'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <FaXmark
                      className='w-6 h-6 text-white'
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className='flex flex-col px-6 pb-4 overflow-y-auto bg-primary_color grow gap-y-5 ring-1 ring-white/10'>
                <div className='flex items-center justify-between h-16 shrink-0'></div>
                <nav className='flex flex-col flex-1'>
                  <ul role='list' className='flex flex-col flex-1 gap-y-7'>
                    <li>
                      <ul role='list' className='-mx-2 space-y-1'>
                        {navigation.map((item: item, index: number) =>
                          item.dropdownItems ? (
                            <MobileDropdown
                              key={index}
                              title={item.name}
                              items={item.dropdownItems}
                            />
                          ) : (
                            <li key={index}>
                              <Link
                                href={item.href}
                                className={cn(
                                  router == item.href
                                    ? 'text-white bg-ternary_color'
                                    : 'text-gray-200 hover:text-ternary_color hover:bg-secondary_color',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ease-in'
                                )}
                              >
                                {item.name}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
