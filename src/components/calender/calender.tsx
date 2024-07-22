'use client';
import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function Calender() {
  return (
    <div className='container'>
      <InlineWidget
        url='https://calendly.com/mahdi-mousavi-microcis/30min'
        styles={{ paddingTop: '100px', height: '800px' }}
      />
    </div>
  );
}
