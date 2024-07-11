import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Route,Routes } from 'react-router-dom'
import Book1 from './components/Book1'
import Addbook from './components/Addbook'
import Signup from './components/signup'
import Login from './components/Login'


const App = () => {
  return (
<>
   
   
   <Navbar/>
    <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Book" element={<Book1/>}/>
    <Route path="/Addbook" element={<Addbook/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/" element={<Signup/>}/>

    </Routes>
    </>
  )
}

export default App