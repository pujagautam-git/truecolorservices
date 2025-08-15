import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from "./Pages/Home/Home";
import About from "./Pages/Aboutus/Aboutus";
import Apartment from './Components/Apartmentpainting/Apartment';
import House from './Components/Housepainting/House';
import Kitchen from "./Components/kitchencabinet/kitchen";
import './App.css'
import Contactus from './Pages/Contactus/Contactus';
import Commercial from './Components/Commercial/Commercial';
import Blog from "./Pages/Blog/Blog";


function App() {
  

  return (
    <>
       <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contactus/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path ="/apartment" element={<Apartment/>} />
          <Route path="/house" element={<House/>} />
          <Route path="/kitchen" element={<Kitchen/>} />
          <Route path="/commercial" element={<Commercial/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
        
    </>
  )
}

export default App
