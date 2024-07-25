import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Route,Routes } from 'react-router-dom'
import Book1 from './components/Book1'
import Addbook from './components/Addbook'
import Signup from './components/signup'
import Login from './components/Login'
import User from './components/User'
import Adminhome from './components/Adminhome'
import Adminbook from './components/Adminbook'
import Updatebook from './components/Updatebook'
import Learnmore from './components/Learnmore'
import Updateuser from './components/Updateuser'


const App = () => {
  return (
<>
   

   {/* <Navbar/> */}
    <Routes>
    <Route path="/User" element={<User/>}/>
    <Route path="/Learnmore" element={<Learnmore/>}/>
    <Route path="/Updateuser" element={<Updateuser/>}/>
    <Route path="/Updatebook" element={<Updatebook/>}/>
    <Route path="/Adminbook" element={<Adminbook/>}/>
    <Route path="/Adminhome" element={<Adminhome/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Book" element={<Book1/>}/>
    <Route path="/Addbook" element={<Addbook/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>

    </Routes>
    </>
  )
}

export default App