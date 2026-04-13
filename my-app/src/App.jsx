import './App.css'
import Banner from './components/banner/Banner'
import MainSection from './components/MainSection/MainSection'
import FTABanner from './components/banner/Footerbanner'
import Features from './components/Features/Features'
import Header from './components/Header/Header'
import Pricing from './components/Pricing/Pricing'
import Process from './components/Process/Process'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <ToastContainer/>
    
      <Header cartCount={cartItems.length}></Header>
      <Banner/>
      <Features/>
      <MainSection cartItems={cartItems} setCartItems={setCartItems}/>
      <Process/>
      <Pricing/>
      <FTABanner/>
      <Footer/>
    </>
  )
}

export default App