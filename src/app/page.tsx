'use client';

import { useState } from 'react';

export default function Home() {

  //const [dob, setDob] = useState('');

  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [days, setDays] = useState('');

  const onSubmit = (date: Date) => {
    console.log(date);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='rounded-lg bg-white p-8'>
        <form action='submit' className=''>

          {/* INPUTS */}
          <div className='flex gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='year'>YEAR</label>
              <input id='year' type='text' className='border' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='month'>MONTH</label>
              <input id='month' type='text' className='border' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='day'>DAY</label>
              <input id='day' type='text' className='border' />
            </div>
          </div>

          {/* BUTTON */}
          <div className='flex justify-end my-4'>
            <button type='submit'>SUBMIT</button>
          </div>
        </form>

        {/* OUTPUTS */}
        <div className='flex gap-2'>
          <p className=''>{!years ? '--' : years}</p>
          <p className=''>YEARS</p>
        </div>
        <div className='flex gap-2'>
          <p className=''>{!months ? '--' : months}</p>
          <p className=''>MONTHS</p>
        </div>
        <div className='flex gap-2'>
          <p className=''>{!days ? '--' : days}</p>
          <p className=''>DAYS</p>
        </div>

      </div>
    </main >
  );
}
