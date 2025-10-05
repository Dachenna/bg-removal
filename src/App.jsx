import React from 'react'
import { Router } from 'react-router-dom'
import { Navbar } from './Pages/Navbar'
import { Home } from './Pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
