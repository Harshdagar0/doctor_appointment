import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/contant' element={<Contact/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/myprofile' element={<Myprofile/>}/> 
        <Route path='/myappointment' element={<MyAppointment/>}/> 
        <Route path='/appointment/:docId' element={<Appointment/>}/> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
