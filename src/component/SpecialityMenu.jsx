import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'


function SpecialityMenu() {
  return (
    <div className='text-center mt-10 space-y-4' id='speciality'>
        <h1 className=''>Find by Speciality</h1>
        <p>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
        </p>
        <div className='flex sm:justify-center pt-5 space-x-4 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ' key={index} to={`./doctors/${item.speciality}`}>
                    <img className='w-16 s:w-24 mb-2' src={item.image} alt=''/>
                    <p className=' '>{item.speciality}</p>                
                </Link>
            ))}
        </div>


    </div>

  )
}

export default SpecialityMenu
