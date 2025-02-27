import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='bg-green-400 mt-4 flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 '>
            {/* <-----left side---> */}
            <div className='py-30 w-1/2 space-y-4'>
                <p className='font-bold text-4xl text-white'>Book Appointment
                    With Trusted Doctors
                </p>
                <div className='flex gap-3 '>
                <img className='w-24 h-10 mt-4' src={assets.group_profiles} alt=''/>
                <p className='text-white'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                </div>
                <button className='mt-3 rounded-full text-gray-800 bg-white px-4 py-2 hover:scale-105 transition-all duration-300'>
                <a className='flex gap-2' href='#speciality'>Book appointment<img src={assets.arrow_icon} className='pt-1'/> </a>
                </button>
            </div>
            {/* <-----Right side---> */}
            <div className='mt-42 '>
            <img className='w-96' src={assets.header_img} alt='header image'/>
            </div>
        </div>
    )
}

export default Header
