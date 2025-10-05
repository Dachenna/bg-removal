"use strict"

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { About } from './About'
import { Pricing } from './Pricing'
import { NotFound } from './NotFound'

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Layout
