import Image from 'next/image';
import React from 'react';

import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

function truncateString(str: string) {
  if (str.length <= 100) {
    return str;
  }
  return str.slice(0, 100) + '...';
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BlogPage({ data }: { data: any }) {
  const { posts } = data;

  return (
    <BentoGrid className='max-w-4xl mx-auto'>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {posts.map(
        (
          item: {
            id: React.Key | null | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  any,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            description: any;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            postImages: string | any[];
          },
          i: number
        ) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={truncateString(item.description)}
            header={
              <Skeleton
                src={
                  item.postImages && item.postImages.length > 0
                    ? item.postImages[0].image
                    : '/placeholder.jpg'
                }
              />
            }
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        )
      )}
    </BentoGrid>
  );
}

const Skeleton = ({ src }: { src: string }) => (
  <Image
    className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'
    src={src}
    alt='blog-page'
    layout='responsive'
    width={500}
    height={300}
  />
);
