import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='bg-green-400 mt-4 flex flex-col md:flex-row  rounded-lg px-6  '>
            {/* <-----left side---> */}
            <div className=' py-10 md:w-1/2 space-y-4'>
                <p className='font-bold lg:text-4xl text-3xl text-white'>Book Appointment
                    With Trusted Doctors
                </p>
                <div className='lg:flex   gap-3 '>
                    <img className='w-24 h-10 my-6 justify-center mx-auto' src={assets.group_profiles} alt='' />
                    <p className='text-white'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                </div>
                <button className='mx-auto mt-3 rounded-full text-gray-800 bg-white px-4 py-2 hover:scale-105 transition-all duration-300'>
                    <a className='flex gap-2 ' href='#speciality'>Book appointment<img src={assets.arrow_icon} className='pt-1' /> </a>
                </button>
            </div>
            {/* <-----Right side---> */}
            <div className=' mx-auto flex justify-end '>
                <img className=' lg:w-96 md:w-72  ' src={assets.header_img} alt='header image' />
            </div>
        </div>
    )
}

export default Header
