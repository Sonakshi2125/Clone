import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import ImageSection from './Components/ImageSection/ImageSection'
import AboutUs from './Components/AboutUs/AboutUs'
import PurposeSec from './Components/PurposeSec/PurposeSec'
import Values from './Components/Values/Values'
import Partner from './Components/Partner/Partner'


const App = () => {
  return (
    <>
  <Navbar/>
  <ImageSection/>
  <AboutUs/> 
  <PurposeSec/>
  <Values/>
  <Partner/>
  
  </>
    
  )
}

export default App