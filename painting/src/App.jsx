import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from "./Pages/Home/Home";
import About from "./Pages/Aboutus/Aboutus";
import PrivacyPolicy from './Components/Privacypolicy/Privacy';
import  RoofSpray from './Components/Spraypainting/roofspray';
import ColorBond from "./Components/ColorBond/ColorBond";
import DiyHome from "./Components/DiyHome/DiyHome";
import Deckoil from './Components/DeckOilPaint/Deckoil';
import Woodstain from "./Components/WoodStain/Woodstain";
import Highpressure from './Components/HighPressure/Highpressure';
import House from './Components/Housepainting/House';
import Specialfinish from './Components/Specialfinish/Specialfinish';
import Kitchen from "./Components/kitchencabinet/kitchen";
import './App.css'
import Contactus from './Pages/Contactus/Contactus';
import Services from './Pages/Services/Services';
import Commercial from './Components/Commercial/Commercial';
import Residential from "./Components/Residentialpainting/Residential";
import Blog from "./Pages/Blog/Blog";
import TermsAndConditions from './Components/Terms&Condition/Terms';
import ChatWidget from './Components/Chatwith/Chat';
// import FloatingReviewButton from './Components/Floatingreview/Floatingreview';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  

  return (
    <>
       
      <div className="app-container">
        <Navbar />


       {/* ✅ Place ScrollToTop inside Router context */}
      <ScrollToTop />

        <main className="main-content">
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Services/>} />
            <Route path="/contact" element={<Contactus/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/terms" element={<TermsAndConditions/>} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path ="/roofspraying" element={<RoofSpray/>} />
          <Route path="/house" element={<House/>} />
          <Route path="/kitchen" element={<Kitchen/>} />
          <Route path="/commercial" element={<Commercial/>} />
          <Route path="/residential" element={<Residential/>} />
           <Route path="/colorbond" element={<ColorBond/>} />
             <Route path="/diyhome" element={<DiyHome/>} /> 
             <Route path="/deckoil" element={<Deckoil/>} />
             <Route path="/woodstain" element={<Woodstain/>} />
            <Route path="/specialfinish" element={<Specialfinish/>} />
             <Route path="/highpressureclean" element={<Highpressure/>} />
          </Routes>
        </main>
        <Footer />
         {/* <FloatingReviewButton /> */}
          <ChatWidget />
      </div>
   
        
    </>
  )
}

export default App
