import React from "react";
import './style.css';
import emoji from './emoji.png'

export default function Main() {
  return (
    <div id="inicio">
      <div className="background">
        <div className="box">
          <div className="titulo">
            <h1>Valtece Ventena</h1>
            <h2>Desenvolvedor Front-end e Mobile</h2>
            <p className="fala">Crio sites e aplicativos para o seu negócio.
            </p>
          </div>
          <div className="box-emoji" >
            <img className="img-emoji" src={emoji}/>
          </div>
        </div>
      </div>
    </div>
  )
}