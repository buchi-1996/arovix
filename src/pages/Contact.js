import React from 'react'
import TextHeading from '../components/TextHeading'


// Last page
// Subscription and contact
// Name
// Email
// Text messages
// Contact- email
// Supportarovix.co.in
// Contactsupernox.in
// Infotriblesecurity.in
// Contactamarok.org
// Supportsonicvex.in
// Infoviainternet.com
// All above is copywrited by ioff India Private Limited
// AddressNear lakshmi nagar nagpur
// Maharashtra India
// 440001
// +919322602834

const Contact = () => {
  return (
    <section className="contact">
          <div className="container mx-auto">
          <div className="h-44 flex flex-col justify-center">
              <TextHeading text="Contact Us" />
          </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                  <div>
                      <h1 className='text-5xl mb-12  text-center md:text-left leading-tight'>Get In <span className='text-green-500'>Touch</span> With Us</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas eos nesciunt excepturi nemo, illo, ut, quis fugiat accusantium minima odio quae eum ad rem incidunt suscipit. Officiis, optio quos.</p>
                      <div className='flex flex-row items-center space-x-3 mt-10 mb-4'>
                      <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg></span>
                          <p>Supportarovix.co.in</p>
                      </div>
                      <div className='flex flex-row items-center space-x-3 mb-4'>
                      <span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
</svg></span>
                          <p>Near lakshmi nagar nagpur Maharashtra India 440001</p>
                      </div>
                      <div className='flex flex-row items-center space-x-3 mb-4'>
                      <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg></span>
                          <p>+919322602834</p>
                      </div>
                  </div>
                  <div className='form'>
                      <form>
                          <div className="form-group flex flex-col mb-5">
                              <label htmlFor="name" className='font-gmedium text-[17px]'>Name</label>
                              <input type="text" id='name' placeholder='Name' className='border p-4 rounded focus:ring-green-300 focus:ring-1 outline-none appearance-none bg-transparent'/>
                          </div>
                          <div className="form-group flex flex-col mb-5">
                              <label htmlFor="email" className='font-gmedium text-[17px]'>Email</label>
                              <input type="email" id='name' placeholder='Email' className='border p-4 rounded focus:ring-green-300 focus:ring-1 outline-none'/>
                          </div>
                          <div className="form-group flex flex-col mb-5">
                              <label htmlFor="message" className='font-gmedium text-[17px]'>Message</label>
                              <textarea name="" id="" cols="30" rows="7" className='border rounded p-4 focus:ring-green-300 focus:ring-1 outline-none'></textarea>
                          </div>
                          <div className="form-group flex flex-col my-10">
                              <input type="submit" value="Submit Form" className='bg-green-500 capitalize hover:bg-green-600 hover:scale-105 w-full md:max-w-xs transition ease-in hover:ease-out mr-auto  py-4 px-3 font-gbold rounded shadow-lg text-white' />
                          </div>
                      </form>
                  </div>
                  
          </div>
            
        </div>        
      </section>
  )
}

export default Contact