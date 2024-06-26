import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from "./components/Footer"
import { Button} from "flowbite-react";

function App() {
  return (
    <BrowserRouter>
    <Header/>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>



    </Routes>
    <Footer/>
    
    </BrowserRouter>
  
  )
}

export default App
