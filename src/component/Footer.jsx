import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10 mt-20'>
      <hr className='text-green-600'></hr>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  mt-10 text-sm'>
        {/* left section  */}
        <div>
            <img className='w-32 mb-2' src={assets.logo1} alt=''/>
            <p className='w-full md:w-2/3 text-gray-800 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/* middel section  */}
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-800'>
                <li>Home</li>
                <li>About us </li>
                <li>Contact us </li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* right section  */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-800'>
                <li>+0-000-000-000</li>
                <li>doctorondemand@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
      <hr></hr>
        <p className='text-center my-5'>Copyright 2024  - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
