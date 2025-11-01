"use strict"
import React from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Authlog } from '../../Auth/login'
import { Signup } from '../../Auth/Signup'


export const Layout = () => {
  const navigate = useNavigate();

  return (
    
      <div>
        <Navbar navigate={navigate}/>
        
        <Routes>
          <Route path="/" element={<Home  navigate= {navigate}/>} />
          <Route path="/login" element={<Authlog/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
  )
}


