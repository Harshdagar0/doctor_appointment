import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets';
import { LuIndianRupee } from "react-icons/lu";
import RelatedDoctors from '../component/RelatedDoctors';
import toast from 'react-hot-toast';
import axios from 'axios';
import Loading from '../component/Loading';

function Appointment() {
  const { docId } = useParams();
  const { doctors,token,backendUrl } = useContext(AppContext);
  const [docInfo, setdocInfo] = useState(null);
  const [docSlots, setdocSlots] = useState([]);
  const [indexSlots, setindexSlots] = useState(0);
  const [sloteTime, setslotTime] = useState('');
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [loader,setLoader] = useState(false);

  const navigate = useNavigate();

  const fetchDocInfo = async() => {
    if(doctors){
      const docInfo = await doctors.find(doc => doc._id === docId);
      setdocInfo(docInfo);
    }

  }
 
  
  const getAvilableSlots = async () => {
    setdocSlots([]);
    //current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      //getting data with index
      let currentdata = new Date(today);
      currentdata.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endtime = new Date();
      endtime.setDate(today.getDate() + i)
      endtime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentdata.getDate()) {
        currentdata.setHours(currentdata.getHours() > 10 ? currentdata.getHours() + 1 : 10);
        currentdata.setMinutes(currentdata.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentdata.setHours(10);
        currentdata.setMinutes(0)
      }
      let timeslots = []
      while (currentdata < endtime) {
        let formattedTime = currentdata.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let day = currentdata.getDate();
        let month = currentdata.getMonth()+1;
        let year = currentdata.getFullYear()
        const sloteDate = (`${day}-${month}-${year}`);
        let slotTime = formattedTime;

        const isSloteAvailable =  docInfo.slots_booked[sloteDate] && docInfo.slots_booked[sloteDate].includes(slotTime)?false:true;
        // add slots to array

        if(isSloteAvailable){

          timeslots.push({
            datatime: new Date(currentdata),
            time: formattedTime
          })
        }
        //increment current time by 30 min

        currentdata.setMinutes(currentdata.getMinutes() + 30)

      }

      setdocSlots(prev => ([...prev, timeslots]));
    }
    
  }
  
  const addAppointment=async()=>{
    setLoader(true);
    if(!token){
      toast.error('Please login first to book appointment');
      scroll(0,0);
      return navigate('/login');
    }

    let date =  docSlots[indexSlots][0].datatime;
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear()
    const sloteDate = (`${day}-${month}-${year}`);
    // console.log(sl)
    try {
      if(sloteTime && sloteDate){
        
        const {data} = await axios.post(`${backendUrl}/api/user/bookAppointment`,{sloteDate,sloteTime,docId},{headers:{token}})
        if(data.success){
          toast.success(data.message,
            {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            });
          navigate('/myappointments');
          fetchDocInfo();          
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
      }else{
      toast.error('Please Select date and time',
        {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            }
        });

      }
      scrollTo(0,0)

      
    } catch (error) {
      console.log(error);
      toast.error( error,
        {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            }
        });

      
    }
    setLoader(false);
  }

 

  useEffect(() => {
    const done = async()=>{

     await fetchDocInfo();
     getAvilableSlots();
    }

    done();
  }, [docId, doctors,docInfo])

 
  return (
    <div className='my-10'>
      {docInfo !== null &&
        <div className='flex flex-col sm:flex-row  gap-4'>
          <div className='border flex justify-center border-green-500 w-full sm:w-72 bg-green-100 rounded-lg' >
            <img className='' src={docInfo.image} alt='' />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <div>

              <p className='flex text-3xl font-medium'>{docInfo.name} <img className='w-5 ms-2' src={assets.verified_icon} alt='' /></p>
              <p className='text-gray-500'>{docInfo.degree} - {docInfo.speciality} <button className='border py-1 px-2 rounded-2xl text-sm text-gray-400'>{docInfo.experience}</button></p>
            </div>
            <div>

              <p className='flex'>About <img className='w-4 ms-2' src={assets.info_icon} alt='' /> </p>
              <p className='text-gray-500 text-sm'>
                {docInfo.about}
              </p>
            </div>
            <p className='mt-2 text-gray-700 flex'>
              Appointment fee: <span className='text-black flex ms-1'><LuIndianRupee className='mt-1' /> {docInfo.fees}</span>
            </p>
          </div>
        </div>
      }
      <div className='lg:ms-80 mt-8 p-2'>
        <p className='text-xl text-gray-600'>Booking slots</p>
        <div className='flex space-x-6 mt-3 overflow-scroll'>
          {docSlots.length && docSlots.map((item, index) => (
            <div key={index} className={` text-center border text-gray-500 border-gray-400 w-30 cursor-pointer p-2 rounded-full ${indexSlots === index ? 'bg-green-400 text-white border-green-500' : ''}`} onClick={() => setindexSlots(index)} >
              <p>{item[0] && daysOfWeek[item[0].datatime.getDay()]}</p>
              <p>{item[0] && item[0].datatime.getDate()}</p>
            </div>
          ))}
        </div>
        <div className='flex mt-4 space-x-4 overflow-scroll'>
        {docSlots.length && docSlots[indexSlots].map((item, index) => (
            <div key={index} className={` text-sm font-light text-nowrap  text-center border px-4 py-1 text-gray-500 border-gray-400  cursor-pointer  rounded-full ${sloteTime === item.time ? 'bg-green-400 text-white border-green-500' : ''}`} onClick={()=>setslotTime(item.time)}  >
              <p>{item.time.toLowerCase()}</p>
            </div>
          ))}
          </div>
      <button onClick={addAppointment} className='mt-10 cursor-pointer  py-2 px-4 rounded-full text-white w-60 bg-green-500'>{loader?<Loading/>:'Book an appointment'}</button>
      </div>

      {docInfo !== null &&  <RelatedDoctors docId={docId}  speciality={docInfo.speciality}/>}

    </div>
  )
}

export default Appointment
