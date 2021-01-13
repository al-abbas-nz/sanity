import React from 'react';
import takehe from '../images/tak.jpg'

export default function Home() {
  return (
    <main>
      <img src={takehe} alt='Background image of Takehe' className='absolute object-cover w-full h-full' />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-9xl text-green-100 font-bold cursive leading-none lg:leading-snug'>Hello</h1>
      </section>
    </main>
  );
}
