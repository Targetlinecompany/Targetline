import React, { useState } from 'react';

import Button from '@/components/common/Button';

import CustomerGrid, { CustomerProps } from './CustomerGrid';

const ShowMore = ({ customers }: { customers: CustomerProps[] }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {showMore && (
        <>
          <CustomerGrid customers={customers} />
        </>
      )}
      <div className='text-center mt-4'>
        <Button onClick={handleShowMore}>
          {showMore ? 'Show less' : 'More examples'}
        </Button>
      </div>
    </div>
  );
};

export default ShowMore;
