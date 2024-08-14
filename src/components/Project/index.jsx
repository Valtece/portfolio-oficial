import React from "react";
import './style.css';
import nerd from './nerd.png'

export default function Project(){

  return (
    <div id="projeto" className="container">
      <div className="box-project">
        <h1 className="project">PROJETOS<span className="ponto">.</span></h1>
        <div className="projetos">
          <div className="box-projeto flip-container">
              <div class="flipper" >
                <div class="front">
                  <img className="img-project" src={nerd}/>
                </div>
                <div class="back">
                  <div className="teste">
                    <p className="titulo-projeto">
                      NerdNook
                    </p>
                    <p className="descr-projeto">
                      Blog nerd com conteúdo sobre o mundo Geek, desenvolvido com React.
                    </p>
                    <p className="veja"> 
                      <a href="https://valtece.github.io/blognerd/" target="_blank" rel="noopener noreferrer">
                      Veja aqui 
                      </a>
                    </p>
                  </div>
                </div>
	            </div>
          </div>
          <div className="box-projeto">
            <p className="loading">Em desenvolvimento...</p>
          </div>
          <div className="box-projeto">
          <p className="loading">Em desenvolvimento...</p>
          </div>
        </div>
      </div>
    </div>
  )
}