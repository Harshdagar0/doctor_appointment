import React, { useContext, useState } from 'react'
import { GoKey } from 'react-icons/go';
import { IoEyeOff, IoEyeSharp } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { AppContext } from '../context/AppContext';
import Loading from './Loading';
function Login({ sendDataToParent }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [openEye, setopenEye] = useState(true);
    const { loginUser } = useContext(AppContext);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        await loginUser(credentials);
        setLoader(false);

    };

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


    const set = () => {
        sendDataToParent('signup');
        scroll(0,0);
    }



    return (
        <div className="mt-20 flex items-center justify-center  bg-white ">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg  w-full max-w-sm shadow-2xl"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

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
                            id='password'
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

                <button type='submit' className='cursor-pointer m-auto py-1 px-2 rounded-lg bg-green-500 text-white w-full'>
                   {loader? <Loading className='text-center'/>
                    : 'Login'}  

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
                        <p className="text-gray-700 text-xm">If you don't have an account? <span onClick={set} className="text-blue-500 font-semibold cursor-pointer">Sign up</span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
