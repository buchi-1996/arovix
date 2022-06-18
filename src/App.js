import React from 'react'
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <div className="container my-24 md:my-48 mx-auto  flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg shadow-2xl hover:scale-110 transition duration-300 ease-out hover:ease-in overflow-hidden">
            <img src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg" className='w-full h-full' alt="" />
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg shadow-2xl hover:scale-110 transition duration-300 ease-out hover:ease-in overflow-hidden">
            <img src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg" className='w-full h-full' alt="" />
          </div>
          <div className="rounded-lg shadow-2xl hover:scale-110 transition duration-300 ease-out hover:ease-in overflow-hidden">
            <img src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg" className='w-full h-full' alt="" />
          </div>
          <div className="rounded-lg shadow-2xl hover:scale-110 transition duration-300 ease-out hover:ease-in overflow-hidden">
            <img src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg" className='w-full h-full' alt="" />
          </div>
          <div className="rounded-lg shadow-2xl hover:scale-110 transition duration-300 ease-out hover:ease-in overflow-hidden">
            <img src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg" className='w-full h-full' alt="" />
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
