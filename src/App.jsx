import React, { useContext } from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import  { Toaster } from 'react-hot-toast';
import { AppContext } from './context/AppContext'
import { Navigate } from 'react-router-dom'

const App = () => {
  const{ token }= useContext(AppContext);
  
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/> 

        
        <Route path='/login' element={token?<Navigate to='/'/>:<LoginPage/>}/> 

        <Route path='/myprofile' element={token?<Myprofile/>:<Navigate to='/login'/>}/> 
        <Route path='/myappointments' element={token?<MyAppointment/>:<Navigate to='/login'/>}/> 

      </Routes>
      <Footer/>
      <Toaster />
    </div>
  )
}

export default App
