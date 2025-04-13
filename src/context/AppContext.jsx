import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setdoctors] = useState(false);
    const [user, setUser] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

    //get all docots data
    useEffect(() => {

        const getdata = async () => {
            try {
                const res = await axios.get(`${backendUrl}/api/admin/doctor`)
                if (res.data.succes) {
                    setdoctors(res.data.data);
                }
                else {
                    toast.error(res.data.message,
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            }
                        })

                }

            } catch (error) {
                console.log(error)
                toast.error(error,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }
                    });

            }

        }
         // get user Profile

    const getProfile=async()=>{
        try {
            const res = await axios.get(`${backendUrl}/api/user/getProfile`, { headers: { token } });
            if (res.data.succes) {
              setUser(res.data.user);
              return res.data.user
            }
            else {
              toast.error('Unable to fetch user profile data',
                {
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  }
                });
    
            }
    
          } catch (error) {
            console.log(error);
            toast.error(error,
              {
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                }
              });
          }
    }
        if(token){
            getProfile();
        }
        getdata();

    }, [token])


    // user registeration
    const registerUser = async (credentials) => {

        try {
            const res = await axios.post(`${backendUrl}/api/user/register`, credentials);
            console.log(res.data);
            if (res.data.succes) {
                toast.success(res.data.message,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }
                    });
                localStorage.setItem('token', res.data.token);
                setToken(res.data.token)
            }
            else {
                toast.error(res.data.message,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }
                    })
            }

        } catch (error) {
            console.log(error);
            toast.error(error,
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                });
        }

    }

    // login user
    const loginUser = async (credentials) => {
        try {
            const res = await axios.post(`${backendUrl}/api/user/login`, credentials);
            console.log(res)
            if (res.data.succes) {
                toast.success(res.data.message,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }
                    });
                localStorage.setItem('token', res.data.token);
                setToken(res.data.token)
            }
            else {
                toast.error(res.data.message,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }
                    })

            }

        } catch (error) {
            console.log(error);
            toast.error(error,
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                });
        }

    }

    // getting allAppointement

    const getAppointment = async()=>{
        try {
            
            const {data} = await axios.get(`${backendUrl}/api/user/getAppointment`,{headers:{token}});
            if(data.succes){
                return await data.allApointment;
            }else{
                toast.error(data.message,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }
                    })


            }
            console.log(data);

        } catch (error) {
            console.log(error);
            toast.error(error,
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                });
            
            
        }


    }

    //cancel appointment
    const cancelAppointment =async(AppId)=>{
        try {
            const {data} =await axios.patch(`${backendUrl}/api/user/cancelAppointment`,{AppId},{headers:{token}});
            if(data.succes){
            toast.success(data.message,
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })

            }else{
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
            console.log(error);
            toast.error(error,
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                });
        }
    }

   


    const value = {
        doctors, registerUser, token, setToken,loginUser,backendUrl,getAppointment,cancelAppointment,user
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )



}

export default AppContextProvider;