'use client';

import { useState } from 'react';

export default function Home() {

  //const [dob, setDob] = useState('');

  const [inputYear, setInputYear] = useState('');
  const [inputMonth, setInputMonth] = useState('');
  const [inputDay, setInputDay] = useState('');

  const [displayYear, setDisplayYear] = useState('');
  const [displayMonth, setDisplayMonth] = useState('');
  const [displayDay, setDisplayDay] = useState('');


  const calculateAge = (birthDate: string) => {
    const currentDate = Date.now();

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const birthDate = new Date(`${inputYear}, ${inputMonth}, ${inputDay}`);

    const testDate = new Date(birthDate);
    //@ts-ignore
    if (testDate instanceof Date && !isNaN(testDate)) {
      
    } else return;

  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='rounded-lg bg-white p-8'>
        <form action='submit' onSubmit={handleSubmit} className=''>

          {/* INPUTS */}
          <div className='flex gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='year'>YEAR</label>
              <input
                id='year'
                type='text'
                required
                value={inputYear}
                onChange={(e) => setInputYear(e.target.value)}
                className='border'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='month'>MONTH</label>
              <input
                id='month'
                type='text'
                required
                value={inputMonth}
                onChange={(e) => setInputMonth(e.target.value)}
                className='border'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='day'>DAY</label>
              <input
                id='day'
                type='text'
                required
                value={inputDay}
                onChange={(e) => setInputDay(e.target.value)}
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
          <p className=''>{!displayYear ? '--' : displayYear}</p>
          <p className=''>YEARS</p>
        </div>
        <div className='flex gap-2'>
          <p className=''>{!displayMonth ? '--' : displayMonth}</p>
          <p className=''>MONTHS</p>
        </div>
        <div className='flex gap-2'>
          <p className=''>{!displayDay ? '--' : displayDay}</p>
          <p className=''>DAYS</p>
        </div>

      </div>
    </main >
  );
}
