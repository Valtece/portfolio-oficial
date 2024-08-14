import React from 'react'
import './style.css'
import logo from './logo.png'

export default function Menu() {

  
  
  return (
    <div className='box-menu'>
      <header>
        <nav className='menu'>
          <div className='img'>
            <img className='img-logo' src={logo}/>
          </div>
          <ul className='topicos'>
            <li className='topico conf'> <a className='link-interno' href='#inicio'>1. Início </a></li>
            <li className='topico conf'> <a className='link-interno' href='#sobre'>2. Sobre </a></li>
            <li className='topico conf'> <a className='link-interno' href='#skills'>3. Skills </a></li>
            <li className='topico conf'> <a className='link-interno' href='#projeto'>4. Projetos </a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
