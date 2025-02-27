import React from 'react'
import Header from '../component/Header'
import SpecialityMenu from '../component/SpecialityMenu'
import Topdoctors from '../component/Topdoctors'
import Banner from '../component/Banner'

function Home() {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <Topdoctors/>
      <Banner/>
    </div>
  )
}

export default Home
