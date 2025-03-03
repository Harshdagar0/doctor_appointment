import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div className='my-10 text-gray-600s' >
      <h1 className='text-center mb-10 text-2xl '>CONTACT US</h1>
      <div className='flex flex-col md:flex-row space-x-4 '>
        <div className='md:w-1/2 my-auto text-end'>
          <img className='h-96' src={assets.contact_image} alt='' />
        </div>
        <div className='text-sm my-auto'>

          <h2 className='text-xl text-gray-600 font-medium mb-2'> OUR OFFICE</h2>
          <p className='text-sm'>00000 Willms Station<br></br>
            Suite 000, Washington, USA</p>

          <p className='mt-6'>Tel: (000) 000-0000</p>
          <p className='mb-6'>
            Email: doctorondemand@gmail.com
          </p>

          <h2 className='text-xl text-gray-600 font-medium mb-2'>CAREERS AT DOCTOR ON DEMAND</h2>

          <p>Learn more about our teams and job openings.</p>

          <button className='py-4 px-3 mt-3 border cursor-pointer hover:text-white hover:bg-black transition-all duration-150'>Explore Jobs</button>

        </div>
      </div>

    </div>
  )
}

export default Contact
