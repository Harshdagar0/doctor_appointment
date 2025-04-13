import React, { useContext, useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { GoKey } from 'react-icons/go';
import { IoEyeOff, IoEyeSharp } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Loading from './Loading';

function Registeration({sendDataToParent}){
 const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });
const [rememberMe, setRememberMe] = useState(false);
const [openEye, setopenEye] = useState(true);
const [passwordVisible, setPasswordVisible] = useState(false);
const {registerUser} = useContext(AppContext);
const [loader,setLoader] = useState(false);

const gradientStyle = {
    width: '100%',
    height: '1px',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))'
};
const gradientStyle1 = {
    width: '100%',
    height: '1px',
    background: 'linear-gradient(to left, rgba(0, 0, 0,0), rgba(0, 0, 0, 1))'
};


const handleChange = (e) => {
     setCredentials({ ...credentials, [e.target.name]: e.target.value });
    
};

const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    registerUser(credentials);
    setLoader(false);
    
};

const set = ()=>{
    sendDataToParent('login');
    scroll(0,0);
}

const passwordEye = () => {
  if (openEye) {
    setopenEye(false);
    setPasswordVisible(true);
    console.log('agya ander')
}
else {
    setopenEye(true)
    setPasswordVisible(false);
    }
}


return (
    <div className="mt-10 flex items-center justify-center  bg-white ">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg  w-full max-w-sm shadow-2xl"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                    Name
                </label>
                <div className='flex border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'>
                    <CgProfile className='mx-2 mt-2.5 text-xl' />
                    <input
                        type="name"
                        name="name"
                        value={credentials.name}
                        required
                        onChange={handleChange}
                        className="w-full px-1 py-2 focus:outline-none "
                        placeholder="Name"
                    /></div>
            </div>
           
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                    Email
                </label>
                <div className='flex border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'>
                    <span>
                        <MdOutlineMailOutline className='mx-2 mt-3' />
                    </span>

                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        required
                        onChange={handleChange}
                        className="w-full px-1 py-2  focus:outline-none "
                        placeholder="Plexeal@example.com"
                    />
                </div>
            </div>
          
            <div className="mb-4">
                <label className="block  text-gray-700 font-medium mb-2">
                    Password
                </label>
                <div className='flex border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'>
                    <span>
                        <GoKey className='mx-2 mt-3' />
                    </span>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        id='register'
                        required
                        value={credentials.password}
                        onChange={handleChange}
                        className="w-full px-1 py-2  focus:outline-none focus:ring-none"
                        placeholder="Enter your password"
                    />
                    <span className=' hover:cursor-pointer' onClick={passwordEye}>
                        {openEye ?
                            <IoEyeSharp className='m-2 text-xl' /> 
                            :
                            <IoEyeOff className='m-2 text-xl' />
                        }
                    </span>
                </div>
            </div>
            <div className="flex  items-center mb-4">
                <input
                    type="checkbox"
                    id="rememberMe"
                    className="mr-2 " 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <p className='text-gray-500 text-xs pt-4'>By creating an account, you agree to our <Link className='text-blue-500' to=""> Terms of Service</Link> and  <Link className='text-blue-500' to="">Privacy Policy.</Link>  </p>
            </div>
            <button type='submit' className='cursor-pointer m-auto py-1 px-2 rounded-lg bg-green-500 text-white w-full'>
                {loader?<Loading/>:'Create Account'}
                </button>
            <div>
                <div className="text-center mt-4">
                    <div className='flex'>

                        <div className='w-1/2 mt-3' style={gradientStyle}></div>
                    <span className="text-gray-700 ">OR</span>
                        <div className='w-1/2 mt-3' style={gradientStyle1}></div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-700 text-xm">If you have an account? <span  onClick={set} className="text-blue-500 font-semibold cursor-pointer">Login</span></p>
                </div>
            </div>
        </form>
    </div>
)
}

export default Registeration
