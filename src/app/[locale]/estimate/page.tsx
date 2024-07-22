import React from 'react';

import Provider from '@/components/context/authContext';
import Estimate from '@/components/estimate/estimate';

const EstimatePage = () => {
  return (
    <div className='mx-auto container'>
      <Provider>
        <Estimate />
      </Provider>
    </div>
  );
};

export default EstimatePage;
