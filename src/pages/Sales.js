import React from 'react'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import TextHeading from '../components/TextHeading'

const Sales = () => {
  return (
    <section className="sales">
          <div className="container mx-auto">
          <div className="h-44 flex flex-col justify-center">
              <TextHeading text="Sales" />
          </div>
          
              <div class="my-2">
                  <h4 className='font-boing text-xl mb-4'>New Arrivals</h4>
                  <Carousel />
                  <h4 className='font-boing text-xl mb-4'>In stock</h4>
                  <Carousel />
                  <div className='mb-14'>
                  <Button text="Join the league" />
            </div>
          </div>
        </div>        
      </section>
  )
}

export default Sales