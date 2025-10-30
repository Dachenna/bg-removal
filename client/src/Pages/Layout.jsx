"use strict"
import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Authlog } from '../../Auth/login'

export const Layout = () => {
  const navigate = useNavigate();
  
  return (
    
      <div>
        <Navbar navigate={navigate}/>
        <Routes>
          <Route path="/" element={<Home  navigate= {navigate}/>} />
          <Route path="/login" element={<Authlog navigate={navigate}/>} />
        </Routes>
      </div>
  )
}


