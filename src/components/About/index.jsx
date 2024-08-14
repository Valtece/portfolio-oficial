import React from "react";
import './style.css';
import about from './about.png'

export default function About() {
  
  return (
    <div id="sobre" className="container">
      <div className="box-about">
        <h1 className="sobre">SOBRE<span className="ponto">.</span></h1>
        <div className="about">
          <div className="left">
            <p className="descr-sobre">Olá, sou Valtece, desenvolvedor Web e Mobile. Estou me aprofundando nos conceitos de desenvolvimento Web, Front-end e Mobile para criar interfaces modernas e atraentes para seu site ou app, utilizando as melhores tecnologias disponíveis para fazer sua marca crescer. Aguardem novidades!</p>
          </div>
          <div className="right">
            <img className="img-about" src={about} />
          </div>
        </div>
      </div>
    </div>
  )
}