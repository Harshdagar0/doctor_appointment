import React, { useState } from 'react'
import { assets } from '../assets/assets'

function Myprofile() {
  const [userData, SetuserData] = useState({
    name: " jack",
    images: assets.profile_pic,
    email: ' doctor@gmail.com',
    phone: ' +999999',
    address: {
      line1: ' 57th cross,Richmond',
      line2: ' circle ,London'
    },
    gender: 'Male',
    dob: '2001-12-1'
  });

  const [isEdit, setisEdit] = useState(true);

  return (
    <div className='w-1/2 my-10 text-gray-700'>
      <img src={userData.images} alt='' />
      {
        isEdit ?
          <input type='text' className='bg-gray-200 my-1' value={userData.name} onChange={e => SetuserData(prev => ({ ...prev, name: e.target.value }))} /> :
          <p className='text-3xl font-medium p-2'>{userData.name}</p>
      }
      <hr></hr>
      <div>
        <p className='py-2 text-xl'>CONTACT INFOMATION</p>
        <div className=''>
          <p>Email id: <span className='mx-4 text-blue-400'>{userData.email}</span></p>

          <p className='flex'>Phone :<span className='mx-5 '>  {
            isEdit ?
              <input type='text' className='bg-gray-200' value={userData.phone} onChange={e => SetuserData(prev => ({ ...prev, phone: e.target.value }))} /> :
              <p className='text-blue-400'>{userData.phone}</p>
          }</span></p>
          <p className='flex mt-2'>Address:<span className='mx-4'>
          {
            isEdit ?
            <p className=''>
              <input type='text' className='bg-gray-200 my-1' value={userData.address.line1} onChange={e => SetuserData(prev => ({ ...prev.address, line1: e.target.value }))} /> 
              <input type='text' className='bg-gray-200 my-1' value={userData.address.line2} onChange={e => SetuserData(prev => ({ ...prev.address, line2: e.target.value }))} /> 
              </p>
              :
              <p className=''>
                {userData.address.line1}<br/>
                {userData.address.line2}
              </p>
          }</span>
            </p>
            <p className='mt-4 mb-1'>BASIC INFORMATION</p>
           
          <p>Gender: <span className='mx-5'>{userData.gender}</span></p>
          <p>DOB: <span className='mx-9'>{userData.dob}</span></p>
        </div>
        <div>
          {isEdit?
          <button className='border py-1 px-4 mt-3 rounded-2xl cursor-pointer hover:bg-green-500 hover:text-white' onClick={()=>setisEdit(false)}>Save</button>:
          <button className='border py-1 px-4 mt-3 rounded-2xl cursor-pointer  hover:bg-green-500 hover:text-white' onClick={()=>setisEdit(true)}>Edit</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Myprofile
