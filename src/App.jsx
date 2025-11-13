import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Service from './pages/services/Service';
import About from './pages/about/About';
import Hospital from './pages/hospital/Hospital';
import School from './pages/school/School';
import College from './pages/college/College';
import Office from './pages/office/Office';
import RetailShop from './pages/retailShop/RetailShop';
import Logistics from './pages/logistics/Logistics';
import Ecommerce from './pages/ecommerce/Ecommerce';
import Construction from "./pages/construction/Construction";
import ITCompany from './pages/itCompany.jsx/ITCompany';
import ClinicLab from './pages/clinicLab/ClinicLab';
import Restaurant from './pages/restaurant/Restaurant';
import Contact from './pages/contact/Contact ';
import Industries from './pages/industries/Industries';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white '>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Services' element={<Service/>}></Route>
          <Route path='/industries' element={<Industries />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/hospital' element={<Hospital />}></Route>
          <Route path='/school' element={<School />}></Route>
          <Route path='/college' element={<College /> }></Route>
          <Route path='/restaurant' element={<Restaurant />}></Route>
          <Route path='/office' element={<Office />}></Route>
          <Route path='/retail-shop' element={<RetailShop />}></Route>
          <Route path='/construction' element={<Construction />}></Route>
          <Route path='/logistics' element={<Logistics />}></Route>
          <Route path='/it-company' element={<ITCompany />}></Route>
          <Route path='/e-commerce' element={<Ecommerce />}></Route>
          <Route path='/clinic-lab' element={<ClinicLab />}></Route>
        </Routes>
        <Footer/> 
    </div>
  )
}

export default App