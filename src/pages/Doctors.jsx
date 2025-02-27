import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AppContext} from '../context/AppContext'

function Doctors() {

  const navigate = useNavigate();

  const {speciality} = useParams();
  const [filter,setfiter] = useState(speciality);
  const [filterDoc,setfilterDoc] = useState([]);
  const{doctors} = useContext(AppContext);
  console.log(speciality)

  const applyFilter = ()=>{
    if(speciality){
      setfilterDoc(doctors.filter(doc=>doc.speciality== speciality))
    }
    else{
      setfilterDoc(doctors);
    }

  }
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='my-3'>Browse through the doctors specialist.</p>
      <div className='flex my-10'>
        <div className='w-1/4 space-y-3'>
          <p className={`border px-4 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality==='General physician'?'bg-green-50':''}`} onClick={()=>speciality==='General physician'?navigate('/doctors'):navigate('/doctors/General physician')}>General physician</p>
          <p className={`border px-4 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality==='Gynecologist'?'bg-green-50':''}`} onClick={()=>speciality==='Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')}>Gynecologist</p>
          <p className={`border px-4 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality==='Dermatologist'?'bg-green-50':''}`} onClick={()=>speciality==='Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')}>Dermatologist</p>
          <p className={`border px-4 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality==='Pediatricians'?'bg-green-50':''}`} onClick={()=>speciality==='Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')}>Pediatricians</p>
          <p className={`border px-4 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality==='Neurologist'?'bg-green-50':''}`} onClick={()=>speciality==='Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')}>Neurologist</p>
          <p className={`border px-4 rounded-sm py-1 mx-3 border-gray-500 text-gray-500 hover:cursor-pointer ${speciality==='Gastroenterologist'?'bg-green-50':''}`} onClick={()=>speciality==='Gastroenterologist'?navigate('/doctors'):navigate('/doctors/Gastroenterologist')}>Gastroenterologist</p>
        </div>

        <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0 '>
        {filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-green-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
                    <img className='bg-green-50 ' src={item.image} alt=''/>
                    <div className='p-4 '>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>    
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-900 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
      
    </div>
  )
}

export default Doctors
