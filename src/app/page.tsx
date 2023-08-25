'use client';

import { useState } from 'react';

export default function Home() {

  //const [dob, setDob] = useState('');

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  console.log(year);


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='rounded-lg bg-white p-8'>
        <form action='submit' onSubmit={onSubmit} className=''>

          {/* INPUTS */}
          <div className='flex gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='year'>YEAR</label>
              <input
                id='year'
                type='text'
                onChange={(e) => setYear(e.target.value)}
                className='border'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='month'>MONTH</label>
              <input
                id='month'
                type='text'
                onChange={(e) => setMonth(e.target.value)}
                className='border'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='day'>DAY</label>
              <input
                id='day'
                type='text'
                onChange={(e) => setDay(e.target.value)}
                className='border'
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className='flex justify-end my-4'>
            <button type='submit'>SUBMIT</button>
          </div>
        </form>

        {/* OUTPUTS */}
        <div className='flex gap-2'>
          <p className=''>{!year ? '--' : year}</p>
          <p className=''>YEARS</p>
        </div>
        <div className='flex gap-2'>
          <p className=''>{!month ? '--' : month}</p>
          <p className=''>MONTHS</p>
        </div>
        <div className='flex gap-2'>
          <p className=''>{!day ? '--' : day}</p>
          <p className=''>DAYS</p>
        </div>

      </div>
    </main >
  );
}
