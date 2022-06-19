import React from 'react'
import Button from '../components/Button'
import TextHeading from '../components/TextHeading'

const About = () => {
  return (
      <section className="hero ">
          <div className="container mx-auto">
          <div className="h-44 flex flex-col justify-center">
              <TextHeading text="About Us" />
          </div>
              <div class="flex flex-col md:flex-row items-start justify-between space-y-5 md:space-y-0 md:space-x-10">
              <div class="w-full">
          <div className='mb-4'>
            <h4 class="font-bold text-2xl">At arovix we ensure quality job delivery</h4>
            <p class="text-[16px] font-gmedium mt-1">Read a bit of our story</p>
          </div>
          
          <div class="text-[16px]">
            <p class="mb-6">
              We Provide powerful web hosting service of all kinds ranging
              shared hosting, VPS hosting, Email Hosting, Reseller Hosting,
              Email Hosting and Dedicated Hosting. with high-performance
              infrastructure and high level security. We are also into all
              cloud computing applications development including web, mobile
              applications and cloud technologies. we develop and designed
              with one question in mind - How does this new technology help
              people and what problem does it solve?.
            </p>
            <Button text="Join the league" />
          </div>
        </div>
        <div className="rounded-lg max-w-xl shadow-2xl hover:scale-105 transition duration-300 ease-out hover:ease-in overflow-hidden">
            <img
            src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full"
            alt=""
            />
        </div>
        
      </div>
          </div>
      </section>
      
  )
}

export default About