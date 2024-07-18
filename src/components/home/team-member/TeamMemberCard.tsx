import Image, { StaticImageData } from 'next/image';
import React from 'react';

type TeamMemberCardProps = {
  id: number;
  image: StaticImageData;
};
type TeamMemberCardData = {
  data: TeamMemberCardProps[];
};
export default function TeamMemberCard({ data }: TeamMemberCardData) {
  return (
    <div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2'>
      {data.map((item) => (
        <Image key={item.id} alt={`user image ${item.id} `} src={item.image} />
      ))}
    </div>
  );
}
