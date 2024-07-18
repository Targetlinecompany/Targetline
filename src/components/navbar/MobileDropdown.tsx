'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface MobileDropdownProps {
  title: string;
  items: Array<{ name: string; href: string }>;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        className='relative flex items-center justify-between text-white px-2 py-1 rounded-md transition-colors duration-300 w-full'
        onClick={toggleDropdown}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <ul className='pl-4 mt-2'>
          {items.map((item, index) => (
            <li key={index} className=''>
              <Link
                href={item.href}
                className='block px-4 py-2 text-white hover:bg-neutral-700/60 rounded-md'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileDropdown;
