import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

function Myprofile() {
  const [selectImg, setSelectImg] = useState(false);
  const { backendUrl, user, token } = useContext(AppContext)
  const [userData, SetuserData] = useState(null);
  const [isEdit, setisEdit] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      SetuserData(user);
    }
  }, [user]);

  // 💥 If userData is still loading
  if (userData === null) {
    return (
      <div className="text-center text-gray-500 mt-10">
        Loading profile...
      </div>
    );
  }

  // 💥 If user is not logged in
  if (!user) {
    return (
      <div className="text-center text-red-500 mt-10">
        You must be logged in to view this page.
      </div>
    );
  }

  // 👇 your existing code
  const saveData = async (e) => {
    e.preventDefault();
    setisEdit(false);

    const Data = new FormData();
    Data.append('name', userData?.name || '');
    Data.append('phone', userData?.phone || '');
    Data.append('gender', userData?.gender || '');
    Data.append('dob', userData?.dob || '');
    Data.append('address', JSON.stringify(userData?.address || {}));

    if (selectImg) {
      Data.append('image', selectImg);
    }

    try {
      const { data } = await axios.post(`${backendUrl}/api/user/updateProfile`, Data, { headers: { token } });
      if (data.succes) {
        navigate('/myprofile');
        scroll(0,0);
        toast.success(data.message,
          {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            }
          });
          window.location.reload();

      } else {
        toast.error(data.message,
          {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            }
          });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className='flex flex-col justify-center my-10 text-gray-700'>
      {userData ? <div>
        <div className='flex justify-center'>
          {isEdit ?
            <div>
              <label htmlFor='image'>
                <img className='w-30 h-30 rounded-full cursor-pointer' src={selectImg ? URL.createObjectURL(selectImg) : userData.image} alt='' />

              </label>
              <input type='file' onChange={(e) => { setSelectImg(e.target.files[0]) }} className='hidden' name='image' id='image' />
            </div>

            :
            <img className='w-96 rounded-2xl ' src={userData.image} alt='' />
          }


        </div>
        <div className='flex justify-center'>{
          isEdit ?
            <input type='text' className='bg-gray-200 my-1 text-center rounded-2xl' value={userData.name} onChange={e => SetuserData(prev => ({ ...prev, name: e.target.value }))} /> :
            <p className='text-3xl font-medium p-2'>{userData.name}</p>
        }</div>
        <hr></hr>
        <div>
          <p className='py-2 text-xl'>CONTACT INFOMATION</p>
          <div className=''>
            <p>Email id: <span className='mx-4 text-blue-400'>{userData.email}</span></p>

            <div className='flex'>Phone :<span className='mx-5 '>  {
              isEdit ?
                <input type='tel' maxLength='10' className='bg-gray-200 text-center rounded-2xl' value={userData.phone} onChange={e => SetuserData(prev => ({ ...prev, phone: e.target.value }))} /> :
                <p className='text-blue-400'>{userData.phone}</p>
            }</span></div>
            <div className='flex mt-2'>Address:<span className='mx-4'>
              {
                isEdit ?
                  <div className='flex flex-col w-full'>
                    <input type='text' className='bg-gray-200 my-1 text-center rounded-2xl ' value={userData.address.line1} onChange={e => SetuserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                    <input type='text' className='bg-gray-200 my-1 text-center rounded-2xl' value={userData.address.line2} onChange={e => SetuserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                  </div>
                  :
                  <p className=''>
                    {userData.address.line1}<br />
                    {userData.address.line2}
                  </p>
              }</span>
            </div>
            <p className='mt-4 mb-1'>BASIC INFORMATION</p>

            <div>Gender: <span className='mx-5'>
              {isEdit ? <select name='gender' className='border rounded-2xl py-1 px-2' id='gender' onChange={(e) => SetuserData(prev => ({ ...prev, gender: e.target.value }))}>
                <option value='Not Selected'>Not Selected</option>
                <option value='Male' id='gender'  >Male</option>
                <option value='Female' >Female</option>
              </select> :

                <span>{userData.gender}</span>
              }

            </span></div>
            <div>DOB: <span className='mx-9'>
              {isEdit ? <input type='date' value={userData.dob} onChange={((e) => SetuserData(prev => ({ ...prev, dob: e.target.value })))} name='dob' className='border my-2 rounded-2xl px-1' /> :

                <span> {userData.dob}</span>
              }
            </span></div>
          </div>
          <div className='flex justify-center'>
            {isEdit ?
              <button className='border py-1 px-4 mt-3 rounded-2xl cursor-pointer hover:bg-green-500 hover:text-white' onClick={saveData}>Save</button> :
              <button className='border py-1 px-4 mt-3 rounded-2xl cursor-pointer  hover:bg-green-500 hover:text-white' onClick={() => setisEdit(true)}>Edit</button>
            }
          </div>
        </div>
      </div> : <div />}
    </div>

  )

}
export default Myprofile

