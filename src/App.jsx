import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Hospital from './Pages/Hospital/Hospital';
import School from './Pages/School/School'
import College from './Pages/College/College'
import Restaurant from './Pages/Restaurant/Restaurant';
import Office from './Pages/Office/Office'
import RetailShop from './Pages/RetailShop/RetailShop'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white '>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element=""></Route>
          <Route path='/Services' element=""></Route>
          <Route path='/Industreis' element=""></Route>
          <Route path='/Contact' element=""></Route>
          <Route path='/hospital' element={<Hospital />} />
          <Route path='/school' element={<School />}></Route>
          <Route path='/college' element={<College />}></Route>
          <Route path='/restaurant' element={<Restaurant />}></Route>
          <Route path='/office' element={<Office />}></Route>
          <Route path='/retail-shop' element={<RetailShop />}></Route>

        </Routes>
        <Footer/>
    </div>
  )
}

export default App