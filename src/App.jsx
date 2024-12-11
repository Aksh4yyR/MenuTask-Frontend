import { useState } from 'react'

import './App.css'
import Home from './Home'
import Menu from './Menu'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<Menu/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/Footer' element={<Footer/>}/>
    </Routes>
      
    </>
  )
}

export default App
