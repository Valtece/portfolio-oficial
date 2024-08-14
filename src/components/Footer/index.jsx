import React from "react";
import './style.css';
import footer from './footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
  return(
    <div className="container-footer">
      <div className="footer">
        <img className="img-footer" src={ footer }/>
        <p className="descr-footer">Não existe melhor motivação para realizar um bom <br/> trabalho do que sentir PAIXÃO pelo que se faz.
        </p>
        <div>
          <a href="https://www.linkedin.com/in/valtece-filho/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icons" icon={faLinkedin} /></a>

          <a href="https://github.com/Valtece" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icons" icon={faGithub} /></a>

          <a><FontAwesomeIcon className="icons" icon={faSquareInstagram} /></a>
        </div>
        <p className="copy">
        Copyright © 2024. All rights reserved <br/>
        by Valtece
        </p>
      </div>
    </div>
  )
}