import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className='my-10 text-gray-700'>
      <h1 className='text-center text-2xl'>ABOUT US</h1>
      <div className='flex flex-col md:flex-row space-x-4 mt-10'>
        <div className='w-full'>
          <img src={assets.about_image} alt=''></img>

        </div>
        <div className='text-sm '>
          <p className='pb-4'>Welcome to Doctor on Demand, your trusted partner in managing your healthcare needs conveniently and efficiently. At Doctor on Demand, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='pb-7'>Doctor on Demand is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Doctor on Demand is here to support you every step of the way.</p>
          <h2 className='font-bold pb-2'>
            Our Vision

          </h2>
          <p>
            Our vision at Doctor on Demand is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About
