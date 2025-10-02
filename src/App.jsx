import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Header from './components/Header/header'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Footer from './components/Footer/footer'
import Error from './components/Error/error'

export default function App() {
  return (
    <div>
      <Header /> {/* This shows the header on every page */}
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer /> {/* This shows the footer on every page */}
    </div>
  )
}
