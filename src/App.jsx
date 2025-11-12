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
        </Routes>
        <Footer/>
    </div>
  )
}

export default App