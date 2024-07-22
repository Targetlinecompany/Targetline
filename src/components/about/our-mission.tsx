'use client';
import CountUp, { useCountUp } from 'react-countup';

export default function OurMission() {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className='flex md:gap-6 gap-1 items-center'>
      <div className='bg-white sm:p-6 p-2  rounded-2xl shadow-md shadow-gray-200'>
        <h4 className='text-2xl font-bold text-[#005b8cd5]'>
          <CountUp start={0} end={12} duration={4.75} suffix='+' />
        </h4>
        <p className='text-gray-500'>Years Operation</p>
      </div>
      <div className='bg-white sm:p-6 p-2  rounded-2xl shadow-md shadow-gray-200'>
        <h4 className='text-2xl font-bold text-[#005b8cd5]'>
          <CountUp start={0} end={50} duration={4.75} suffix='+' />
        </h4>
        <p className='text-gray-500'>Project Delivered</p>
      </div>
      <div className='bg-white sm:p-6 p-2  rounded-2xl shadow-md shadow-gray-200'>
        <h4 className='text-2xl font-bold text-[#005b8cd5]'>
          <CountUp start={0} end={150} duration={4.75} suffix='+' />
        </h4>
        <p className='text-gray-500'>Happy Clients</p>
      </div>
    </div>
  );
}
