import React from 'react';

import Button from '@/components/common/Button';

export default function Footer() {
  return (
    <footer className='flex sm:flex-row flex-col gap-5 w-[80%] items-center mx-auto justify-evenly p-10'>
      <p className='text-white'>Want to increase your sales?</p>
      <Button>Contact our consultant</Button>
    </footer>
  );
}
