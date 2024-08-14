import React from 'react'
import './index.css'
import Menu from '../src/components/Menu'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import { BrowserRouter } from "react-router-dom";

export default function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Main/>
        <About/>
        <Skills/>
        <Project/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

 
