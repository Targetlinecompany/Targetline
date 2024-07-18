import Image from 'next/image';

import { CustomerProps } from '@/components/customers/CustomersLogo';

type CustomerCardProps = {
  customer: CustomerProps;
};

export default function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <div className='fixed inset-0 bg-[#070707]/80 text-white p-4 shadow-lg z-20 w-96 md:w-[678px] mx-auto sm:h-[400px] h-auto my-auto rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4  overflow-auto'>
      <div className='flex flex-col space-y-2 w-96'>
        <div>
          <ul className='text-sm text-right'>
            {customer.titleCard.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <ul className='text-sm'>
          {customer.description.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className=''>
        <Image
          alt={customer.name}
          src={customer.hoverImage}
          className='w-32 h-[142px] md:w-48 md:h-48 object-contain'
        />
      </div>
    </div>
  );
}
