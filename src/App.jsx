import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white '>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element=""></Route>
          <Route path='/Services' element=""></Route>
          <Route path='/Industreis' element=""></Route>
          <Route path='/Contact' element=""></Route>

        </Routes>
        <Footer/>
    </div>
  )
}

export default App