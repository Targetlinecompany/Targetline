import React from 'react';

import { TeamMemberData } from '@/lib/data';

import Button from '@/components/common/Button';
import TeamMemberCard from '@/components/home/team-member/TeamMemberCard';

export default function TeamMember() {
  return (
    <div className='flex justify-center flex-col gap-8 w-[80%] mx-auto mt-12'>
      <div className='flex justify-center items-center gap-4 mb-8'>
        <div className='w-32 bg-[#D9D9D9] h-0.5'></div>

        <h2 className='text-center text-3xl text-white '>Team Member</h2>
        <div className='w-32 bg-[#D9D9D9] h-0.5'></div>
      </div>{' '}
      <TeamMemberCard data={TeamMemberData} />
      <div className='flex items-center justify-center'>
        <Button as='link' href='#'>
          More about our experts
        </Button>
      </div>
    </div>
  );
}
