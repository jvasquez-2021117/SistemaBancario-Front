import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/NavBar/Navbar.jsx'
import { SiberBar } from './components/Sidebar/SiberBar.jsx'
import './components/CSS/Style.css'
import { Footer } from './components/Footer/Footer.jsx'

export const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
