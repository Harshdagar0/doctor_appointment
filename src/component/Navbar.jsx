import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

function Navbar() {
  const navigate = useNavigate();
  const [showmenu, setshowmenu] = useState(false);
  const [profile, setprofile] = useState(false);
  const {token,setToken,user} = useContext(AppContext);

  // logout
  const Logout=()=>{
    setToken(false);
    localStorage.removeItem('token');
    toast.success('Logout Successfully',
      {
          style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
          }
      })
      navigate('/login');
  }


  return (
    <div className='flex items-center justify-between text-sm py-4 border-b border-green-500 '>
      <img onClick={() => navigate('/')} className='w-20 cursor-pointer' src={assets.logo1} />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='boder-none outline-none h-0.5 bg-green-300 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='boder-none outline-none h-0.5 bg-green-300 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='boder-none outline-none h-0.5 bg-green-300 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='boder-none outline-none h-0.5 bg-green-300 w-3/5 m-auto hidden'></hr>
        </NavLink>
      </ul>
      <div className='flex items-center gap-3'>
        {
          token ?
            <div className='flex items-center gap-2 cursor-pointer group read-only relative' onClick={() => setprofile(profile ? false : true)}>
             {user&& <img className='w-8 rounded-full h-8 ' src={user?user.image:assets.profile_pic} alt='' />}
              <img className='w-2.5' src={assets.dropdown_icon} alt='' />
              <div className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20  `} >
                <div className={`w-48 bg-stone-100 rounded flex flex-col gap-4 p-4  ${profile ? '' : 'hidden'}`} >
                  <p onClick={() => navigate('/myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/myappointments')} className='hover:text-black cursor-pointer '>My Appointment</p>
                  <p onClick={Logout} className='hover:text-black cursor-pointer '>Logout</p>
                </div>
              </div>
            </div> :
            <button onClick={() => navigate("/login")} className='bg-green-500 text-white px-8 py-3 rounded-full font-light cursor-pointer'>Create Account</button>
          }
          <img className='md:hidden w-7 cursor-pointer' onClick={()=>setshowmenu(true)} src={assets.menu_icon} alt='' />
      </div>
      <div className={` ${showmenu?'w-full fixed':'w-0 h-0 hidden '}    right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-150 `}>
        <div className='flex justify-between mx-4 mt-4'>
           <img className=' w-20 cursor-pointer' onClick={() => navigate('/')}  src={assets.logo1} />
          <img className='  cursor-pointer w-10 ' onClick={()=>setshowmenu(false)}  src={assets.cross_icon} alt=''/>
        </div>
        <ul
        className='flex flex-col mt-5 px-5 text-lg font-medium gap-2 items-center'
         >
          <NavLink to='/'>
            <li onClick={()=>setshowmenu(false)} className='py-1 px-2 rounded'>HOME</li>
          </NavLink>
          <NavLink to='/doctors'>
            <li onClick={()=>setshowmenu(false)} className='py-1 px-2 rounded'>ALL DOCTORS</li>
          </NavLink>
          <NavLink to='/about'>
            <li onClick={()=>setshowmenu(false)} className='py-1 px-2 rounded'>ABOUT</li>
          </NavLink>
          <NavLink to='/contact'>
            <li onClick={()=>setshowmenu(false)} className='py-1 px-2 rounded'>CONTACT</li>
          </NavLink>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
