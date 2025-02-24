import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes}from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LogInPopUp from './components/LogInPopUp/LogInPopUp'
const App = () => {
  
  const [showLogin,setshowLogin] = useState(false);

  return (
    <>
    {showLogin?<LogInPopUp setshowLogin={setshowLogin}/>:<></>}
    <div className='app'>
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      </div>
      <Footer/>
      </>
  )
}

export default App