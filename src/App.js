import React from 'react'
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto h-64 flex flex-col items-center justify-center">
        <h1 className='mt-16 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-tl from-black to-black text-center'>Buchi's New Port-Folio</h1>
      </div>
    </>
  );
}

export default App;
