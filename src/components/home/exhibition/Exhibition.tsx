import React from 'react';

import Button from '@/components/common/Button';

export default function Exhibition() {
  return (
    <div className='flex sm:flex-row flex-col text-white h-60 border-2 border-white items-center justify-between rounded-3xl mt-6 p-10 w-[80%] mx-auto'>
      <div className=''>Exhibition</div>
      <Button as='link' href='#'>
        Request Consultation{' '}
      </Button>
    </div>
  );
}
