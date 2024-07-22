import { PersonIcon } from '@radix-ui/react-icons';
import { CalendarHeartIcon } from 'lucide-react';
import React from 'react';

import { blogDetails } from '@/lib/data';

export default function BlogDetailes() {
  return (
    <div>
      <div className='pt-5 max-w-app mx-auto'>
        <div className='rounded-t-lg shadow-lg'>
          <div
            className='bg-cover bg-center h-[45vh] sm:mx-4 sm:rounded-md'
            style={{
              backgroundImage: `url(${blogDetails[0]?.headerImage})`,
            }}
          ></div>

          <div className='p-3 sm:p-6'>
            <p className='text-sm'>{blogDetails[0]?.category}</p>

            <div className='flex justify-between pt-3 pb-3'>
              <p className='flex items-center gap-1 text-sm'>
                <PersonIcon className='text-secondary' />{' '}
                {blogDetails[0]?.createBy}
              </p>
              <p className='flex items-center gap-1 text-sm'>
                <CalendarHeartIcon className='text-secondary' />
                {blogDetails[0]?.createAt}
              </p>
            </div>

            <h4 className='text-2xl pt-3 pb-1'>{blogDetails[0]?.title}</h4>
            <p className='text-base'>{blogDetails[0]?.abstract}</p>

            {blogDetails[0]?.content?.map((item, index) => (
              <div key={index}>
                <h4 className='text-2xl pt-3 pb-1'>{item?.title}</h4>
                {item?.text && <p className='text-base'>{item?.text}</p>}
                {/* {item?.list?.length > 0 && (
                  <ul className='list-disc pl-5'>
                    {item?.list?.map((list, index) => (
                      <li key={index}>
                        {index + 1}: {list}
                      </li>
                    ))}
                  </ul>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
