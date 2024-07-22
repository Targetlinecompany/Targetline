import React from 'react';

interface IPropsContent {
  content: string[];
  title?: string;
  list?: string[];
  subTitle?: { itemTitle: string; itemDescription: string }[];
}

const ContentComponent: React.FC<IPropsContent> = ({
  content,
  title,
  list,
  subTitle,
}) => {
  return (
    <div className='container mx-auto p-6'>
      <div className='grid grid-cols-1  gap-4 w-full'>
        <div className={`p-6 ${!title && 'flex items-center justify-center'}`}>
          {title && <h2 className='text-4xl py-4'>{title}</h2>}
          {content?.map((text) => (
            <p className='text-lg py-2 leading-8 text-gray-500' key={text}>
              {text}
            </p>
          ))}
          {list?.map((item, index) => (
            <p className='text-lg' key={item}>
              {index + 1}: {item}
            </p>
          ))}
          {subTitle?.map((item) => (
            <div key={item.itemTitle} className='pl-3 pb-6'>
              <h3 className='text-2xl'>{item.itemTitle}</h3>
              <p className='text-lg leading-8 text-gray-500'>
                {item.itemDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
