import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import About from './Pages/About';
import Project from './Components/Project';


const App = () => {
  return (
    <div className='bg-gray-50 bg-full justify-between items-center flex flex-col'>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    </div>
  
  )
}

export default App;