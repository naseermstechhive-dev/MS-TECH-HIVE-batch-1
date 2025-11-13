import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Service from './pages/services/Service'
import About from './pages/about/About'
import Contact from './pages/contact/Contact '


const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white '>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Services' element={<Service/>}></Route>
          <Route path='/Industreis' element=""></Route>
          <Route path='/Contact' element={<Contact/>}></Route>

        </Routes>
        <Footer/>

    
    
    
    </div>
  )
}

export default App