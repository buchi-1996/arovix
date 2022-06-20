import React from 'react'
import Carousel from './Carousel'
import TextHeading from './TextHeading'

const News = () => {
  return (
    <section class="news">
              <Carousel />
    <div className="py-10 ">
      <TextHeading text="Customer Reviews" />
     <div class="flex flex-col md:flex-row items-start justify-between space-y-5 md:space-y-0 md:space-x-10 mt-20">
        <div class="boxes w-full flex flex-col space-y-10">
          <div class="box border px-5 py-8 w-full rounded">
            <div>
             <div className='flex flex-row items-center gap-4 mb-4'>
             <div className='rounded-full border-gray-400 bg-ray-500 border-2 w-14 h-14 flex flex-col items-center justify-center'>JD</div>
              <h4 class="font-bold text-2xl">John Doe</h4>
              </div>
            <p class="text-[16px] mt-1">Thaleni Technologies</p>
              <p class="text-[15px] font-medium mt-1">Abuja</p>
            </div>
            <ul class="list-disc ml-6 text-[16px] my-3 flex flex-col space-y-2">
              <li>
                With high-performance infrastructure and high level
                security.
              </li>
              <li>
                Collaborate with other Software Engineers, as well as other
                appropriate members of the team, to...
              </li>
            </ul>
            <div class="text-[15px] flex flex-row items-center justify-between mt-5">
              <p class="date font-medium">2 days ago.</p>
              <a href="/" class="font-medium hover:text-blue-700">
                See more...
              </a>
            </div>
          </div>
          <div class="box border px-5 py-8 w-full rounded">
            <div>
            <div className='flex flex-row items-center gap-4 mb-4'>
             <div className='rounded-full border-gray-400 bg-ray-500 border-2 w-14 h-14 flex flex-col items-center justify-center'>JD</div>
              <h4 class="font-bold text-2xl">John Doe</h4>
              </div>
              <p class="text-[16px] mt-1">Thaleni Technologies</p>
              <p class="text-[15px] font-medium mt-1">Abuja</p>
            </div>
            <ul class="list-disc ml-6 text-[16px] my-3 flex flex-col space-y-2">
              <li>
                With high-performance infrastructure and high level
                security.
              </li>
              <li>
                Collaborate with other Software Engineers, as well as other
                appropriate members of the team, to...
              </li>
            </ul>
            <div class="text-[15px] flex flex-row items-center justify-between mt-5">
              <p class="date font-medium">5 days ago.</p>
              <a href="/" class="font-medium hover:text-blue-700">
                See more...
              </a>
            </div>
          </div>
          <div class="box border px-5 py-8 w-full rounded">
            <div>
            <div className='flex flex-row items-center gap-4 mb-4'>
             <div className='rounded-full border-gray-400 bg-ray-500 border-2 w-14 h-14 flex flex-col items-center justify-center'>JD</div>
              <h4 class="font-bold text-2xl">John Doe</h4>
              </div>
              <p class="text-[16px] mt-1">Thaleni Technologies</p>
              <p class="text-[15px] font-medium mt-1">Abuja</p>
            </div>
            <ul class="list-disc ml-6 text-[16px] my-3 flex flex-col space-y-2">
              <li>
                With high-performance infrastructure and high level
                security.
              </li>
              <li>
                Collaborate with other Software Engineers, as well as other
                appropriate members of the team, to...
              </li>
            </ul>
            <div class="text-sm flex flex-row items-center justify-between mt-5">
              <p class="date font-medium">7 days ago.</p>
              <a href="/" class="font-medium hover:text-blue-700">
                See more...
              </a>
            </div>
          </div>
        </div>
        <div class="w-full border px-5 md:px-10 py-8 rounded">
          <div>
          <div className='flex flex-row items-center gap-4 mb-4'>
             <div className='rounded-full border-gray-400 bg-ray-500 border-2 w-14 h-14 flex flex-col items-center justify-center'>JD</div>
              <h4 class="font-bold text-2xl">John Doe</h4>
              </div>
            <p class="text-[16px] mt-1">Arovix Digital designs</p>
            <p class="text-[15px] font-medium mt-1">Full time</p>
          </div>
          <a href="/" class="secondary-btn py-3 w-full my-5 block">
            Apply Now
          </a>
          <div class="text-[16px]">
            <p class="mb-10">
              We Provide powerful web hosting service of all kinds ranging
              shared hosting, VPS hosting, Email Hosting, Reseller Hosting,
              Email Hosting and Dedicated Hosting. with high-performance
              infrastructure and high level security. We are also into all
              cloud computing applications development including web, mobile
              applications and cloud technologies. we develop and designed
              with one question in mind - How does this new technology help
              people and what problem does it solve?.
            </p>
            <p class="mb-10">
              We also provides Cyber Security technology that increases your
              agility to stay away from cyber threats and protect you
              seamlessly. our penetration testing team uses an
              industry-leading methodology to identify hard-to-find
              vulnerabilities and weaknesses often missed by conventional
              testing
            </p>
            <p class="mb-10">
              We offer a variety of services including infrastructure
              penetration testing, web and mobile application testing,
              social engineering, red team exercises, source-code reviews
              and exploit development all to help you protect your most
              valuable assets - your data and your company.
            </p>
            <p class="mb-10">
              We are recruiting to fill the position below:
            </p>
            <ul class="my-2 flex flex-col space-y-3">
              <li>
                Job Position: Software Engineer / Web Developer (Intern)
              </li>
              <li>Job Location: Abuja (FCT)</li>
              <li>Employment Type: Full-time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default News