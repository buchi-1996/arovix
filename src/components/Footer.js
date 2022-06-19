import React from 'react'

const Footer = () => {
  return (
      <footer className='bg-gray-50 h-28 flex flex-col items-center justify-center'>
          <div className='container mx-auto '>
              <div className='flex flex-col md:flex-row items-center justify-between'>
                  <div className='flex flex-row items-center divide-x-2 gap-4'>
                   <h1 className="text-4xl -mt-3">arovix</h1>        
                  <p className='pl-4 space-x-0 max-w-xl font-gmedium text-gray-600'>This site is designed by Buchi</p>
                  </div>
                      <a href="https://github.com/buchi-1996" target="_blank" rel="noreferrer" className='underline hover:text-blue-400'>GitHub</a>
              </div>
          </div>
    </footer>
  )
}

export default Footer