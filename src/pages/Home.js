import React from 'react';
import Hero from '../components/Hero';
import News from '../components/News';


const Home = () => {
  return (
      <div className='container mx-auto'>
      <Hero />
      <News />
      </div>
  )
}

export default Home