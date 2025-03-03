import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function MyAppointment() {
  const { doctors } = useContext(AppContext)
  return (
    <div>
      <h1 className='mt-2'>My Appointments</h1>
      <div >
        <hr className='my-2'></hr>
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className='  '>
            <div className='flex my-4  text-gray-600 flex-col md:flex-row' >
              <div className='flex'>
              <div className='bg-green-100 m-4 rounded-2xl'>
                <img className='w-48' src={item.image} alt='' />
              </div>
              <div className=' my-auto'>
                <p className='text-xl text-gray-800'>{item.name}</p>
                <p className='text-sm text-gray-500'>{item.speciality}</p>
                <p className='text-gray-900 mt-2 text-lg'>Address</p>
                <p className='text-sm'>{item.address.line1}</p>
                <p className='text-sm'>{item.address.line2}</p>
                <p className='mt-2 text-gray-800'>Date and Time: </p>
                <p></p>
              </div></div>
              <div className='flex-1 flex flex-col  my-auto  gap-4'>
                <button className='border me-10  py-2 px-3 mx-2  bg-green-500 text-white transition-all duration-150 cursor-pointer'>Pay online</button>
                <button className='border me-10 py-2  px-3 mx-2 bg-red-600 text-white transition-all duration-150 cursor-pointer'>Cancel Appointment</button>

              </div>

            </div>
            <hr></hr>
          </div>
        ))

        }


      </div>

    </div>
  )
}

export default MyAppointment
