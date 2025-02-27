import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Banner() {
    const navigate = useNavigate();
  return (
    <div className='flex bg-green-400 px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 rounded-lg'>
        {/* left side */}
        <div className='flex-1 py-8 ms:py-10 md:py-16 lg:py-25 lg:pl-5 space-y-5 '>
            <div className='text-xl sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white'>

            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}}  className='bg-white text-gray-900 rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition-all duration-500'>Create accounts</button>

        </div>
        {/* right side */}
        <div className='hidden md:block md:w-1/2 ;g:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt=''/>
        </div>
      
    </div>
  )
}

export default Banner
