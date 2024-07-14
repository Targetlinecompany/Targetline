'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

interface DropdownProps {
  title: string;
  items: Array<{ name: string; href: string }>;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className=' relative flex items-center text-white hover:bg-[#D4D4D4] px-2 py-1 rounded-md transition-colors duration-300'
        onClick={toggleDropdown}
      >
        {title}
        {isOpen ? (
          <TiArrowSortedUp className='ml-1' />
        ) : (
          <TiArrowSortedDown className='ml-1' />
        )}
      </button>
      {isOpen && (
        <div className='absolute mt-2 w-40 bg-gray-900/80 rounded-md shadow-lg z-50'>
          <ul className='py-2'>
            {items.map((item, index) => (
              <li key={index} className=''>
                <Link
                  href={item.href}
                  className='block px-4 py-2 text-white hover:bg-slate-600/5'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
