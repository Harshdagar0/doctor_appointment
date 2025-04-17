import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Doctors() {

  const navigate = useNavigate();

  const { speciality } = useParams();
  const [filter, setfiter] = useState(speciality);
  const [filtershow, setfitershow] = useState(false);
  const [filterDoc, setfilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = async () => {
    if (speciality) {
      setfilterDoc(await doctors.filter(doc => doc.speciality == speciality))
    }
    else {
      setfilterDoc(doctors);
    }

  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='my-3'>Browse through the doctors specialist.</p>
      <div className={`fixed bg-white z-10 ${filtershow ? 'border p-4' : ''}  `}>
        <button onClick={() => setfitershow(filtershow ? false : true)} className={`border py-1 px-2 cursor-pointer md:hidden ${filtershow ? 'bg-green-500 text-white' : ''}`}>Filter</button>
        <div className={` mt-3 space-y-3 ${filtershow ? 'block' : 'hidden'} `}>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'General physician' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician'); scrollTo(0, 0); setfitershow(false) }}>General physician</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Gynecologist' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist'); scrollTo(0, 0); setfitershow(false) }}>Gynecologist</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Dermatologist' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist'); scrollTo(0, 0); setfitershow(false) }}>Dermatologist</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Pediatricians' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians'); scrollTo(0, 0); setfitershow(false) }}>Pediatricians</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Neurologist' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist'); scrollTo(0, 0); setfitershow(false) }}>Neurologist</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist'); scrollTo(0, 0); setfitershow(false) }}>Gastroenterologist</p>
        </div></div>
      <div className='flex my-10 '>
        <div className='w-1/4 space-y-3 hidden md:block'>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'General physician' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician'); scrollTo(0, 0) }}>General physician</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Gynecologist' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist'); scrollTo(0, 0) }}>Gynecologist</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Dermatologist' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist'); scrollTo(0, 0) }}>Dermatologist</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Pediatricians' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians'); scrollTo(0, 0) }}>Pediatricians</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Neurologist' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist'); scrollTo(0, 0) }}>Neurologist</p>
          <p className={`border lg:px-4 px-2 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-green-50' : ''}`} onClick={() => { speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist'); scrollTo(0, 0) }}>Gastroenterologist</p>
        </div>

        {doctors ?<div className='w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0 '>

          {doctors && Array.isArray(filterDoc) && filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} key={index} className='border border-green-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
              <div className='bg-green-50 '>

                <img className='mx-auto' src={item.image} alt='' />
              </div>
              <div className='p-4 '>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  {item.available ?
                  <div className='flex gap-2'>
                    <p className='w-2 h-2 mt-1.5 bg-green-500 rounded-full'></p><p>Available</p> 
                  </div>
                  : 
                  <div className='flex gap-2'>
                    <p className='w-2 h-2 mt-1.5 bg-red-500 rounded-full'></p><p className='text-red-500'> Not Available</p>
                  </div> 
                  }
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-900 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}

        </div>:
        <div className=' text-2xl text-gray-400'> Loading...</div>
        }

      </div>

    </div>
  )
}

export default Doctors
