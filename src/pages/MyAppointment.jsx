import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import { useNavigate } from "react-router";
import toast from 'react-hot-toast';
import Loading from '../component/Loading';

function MyAppointment() {
  const { getAppointment, cancelAppointment,backendUrl,token } = useContext(AppContext);
  const [allA, setAllA] = useState(false);
  const [loader,setLoader] = useState(false);
  

  const navigate = useNavigate();

  const initPay=(order)=>{
    const options={
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name:'Appointment Payment',
      description:'Appointment Payment',
      order_Id:order.id,
      receipt:order.receipt,
      handler:async(res)=>{
        try {
          const {data} =await axios.post(`${backendUrl}/api/user/verifyPayment`,res,{headers:{token}})
        if(data.succes){
          getAppointment();
          navigate('/myappointments');
          scroll(0,0);
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
            })
        }
          
        } catch (error) { console.log(error);
          toast.error(error,
              {
                  style: {
                      borderRadius: '10px',
                      background: '#333',
                      color: '#fff',
                  }
              });
          
        }
      }}
      const rzp = new window.Razorpay(options)
      rzp.open()
  };

  const payment =async(appId)=>{
    try {
      const {data} =await axios.post(`${backendUrl}/api/user/payment`,{appId},{headers:{token}});
      if(data.succes){
        initPay(data.order);
      }
      
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(() => {
    const task = async () => {
      const allAppointement = await getAppointment();
      setAllA(allAppointement.reverse())
      
    }
    task();
  })



  return (
    <div>
      <h1 className='mt-2'>My Appointments</h1>
      <div >
        <hr className='my-2'></hr>
        {allA && allA.map((item, index) => (
          <div key={index} className='  '>
            <div className='flex my-4  text-gray-600 flex-col md:flex-row' >
              <div className='flex flex-col sm:flex-row'>
                <div className='bg-green-100 flex justify-center xl:m-4 m-1  rounded-2xl'>
                  <img className='w-48 ' src={item.docData.image} alt='' />
                </div>
                <div className=' flex flex-col mx-auto justify-center my-auto'>
                  <p className='text-xl text-gray-800'>{item.docData.name}</p>
                  <p className='text-sm text-gray-500'>{item.docData.speciality}</p>
                  <p className='text-gray-900 mt-2 text-lg'>Address</p>
                  <p className='text-sm'>{item.docData.line1}</p>
                  <p className='text-sm'>{item.docData.line2}</p>
                  <p className='mt-2 text-gray-500'><span className='text-black'>Date and Time:</span> {item.sloteDate} | {item.sloteTime}</p>
                  <p></p>
                </div></div>
              {
                item.isCompleted ? <div className='text-center text-3xl font-medium  my-auto mx-auto text-green-700'>Completed</div> :
                  <div className='text-center text-2xl  my-auto mx-auto'>
                    {item.cancelled ?
                      <div className='text-center text-3xl font-medium my-auto mx-auto'>
                        {item.cancelled&& item.payment&& <div className='text-sm text-green-400'>Your Paid amount refund in few days according to company policy</div>}
                        Cancelled
                        </div> :
                      <div className='flex-1 flex flex-col text-sm w-full  my-auto  gap-4'>
                        {item.payment?
                        <div className='text-center text-3xl font-medium  my-auto mx-auto text-green-600'>Paid</div>:
                        <button className='border me-10 w-full  py-2 rounded-xl px-3 mx-2  bg-green-500 text-white transition-all duration-150 cursor-pointer' onClick={()=>payment(item._id)}>Pay online</button>
                      }
                        <button className='border me-10 py-2 w-full rounded-xl  px-3 mx-2 bg-red-600 text-white transition-all duration-150 cursor-pointer' onClick={() =>{setLoader(true),cancelAppointment(item._id),setLoader(false)}}>{loader?<Loading/>:'Cancel Appointment'}</button>
                      </div>
                    }
                  </div>
              }

            </div>
            <hr></hr>
          </div>
        ))}
        {allA.length===0&&<div className='text-center'>No Appointment yet</div>}


      </div>

    </div>
  )
}

export default MyAppointment
