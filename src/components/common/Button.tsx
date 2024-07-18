import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: string;
  as?: string;
  href?: string;
  label?: React.ReactNode;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  type = 'button',
  as = 'button',
  href = '#',
  label,
  onClick,
  children,
  className,

  ...props
}: ButtonProps) {
  const { ...attrs } = props;

  if (as === 'link') {
    return (
      <Link
        href={href}
        className={`border border-black shadow-sm shadow-white py-2 px-4 rounded-md text-white
          ${className}
          `}
        {...attrs}
      >
        {label || children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`border border-black shadow-sm shadow-white py-1 text-sm sm:font-medium sm:px-6 px-2 rounded-md text-white
        ${className}
        `}
      onClick={onClick}
      {...attrs}
    >
      {label || children}
    </button>
  );
}
