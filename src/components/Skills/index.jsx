import React, { useState  } from "react";
import './style.css'
import Icon1 from './Icones/html.png';
import Icon2 from './Icones/css.png';
import Icon3 from './Icones/javascript.png';
import Icon4 from './Icones/react.png';
import Icon5 from './Icones/block.png';
import Icon6 from './Icones/block.png';
import Icon7 from './Icones/block.png';
import Icon8 from './Icones/block.png';
import Icon9 from './Icones/block.png';
import Icon10 from './Icones/block.png';
import Icon11 from './Icones/block.png';
import Icon12 from './Icones/block.png';

export default function Skills() {
  const [texto, setTexto] = useState('#passe o mouse sobre o ícone');

  const icones = [
    { icon: Icon1, texto: 'HTML (HyperText Markup Language) é a linguagem padrão usada para criar e estruturar páginas na web. Ele define o conteúdo e a estrutura de uma página usando elementos como parágrafos, cabeçalhos, links, imagens e outros tipos de mídia.' },
    { icon: Icon2, texto: 'CSS (Cascading Style Sheets) é a linguagem usada para estilizar e formatar o layout de páginas web. Ele controla a aparência visual dos elementos HTML, incluindo cores, fontes, espaçamento, e posicionamento.' },
    { icon: Icon3, texto: 'JavaScript é uma linguagem de programação que permite adicionar interatividade e dinamismo às páginas web. Com ele, você pode criar funções, manipular elementos HTML, responder a eventos do usuário e interagir com APIs para criar experiências web ricas e interativas.' },
    { icon: Icon4, texto: 'React é uma biblioteca JavaScript usada para construir interfaces de usuário (UI) dinâmicas e reutilizáveis. Ele permite criar componentes que gerenciam seu próprio estado e se atualizam eficientemente quando os dados mudam, facilitando o desenvolvimento de aplicações web complexas e interativas.' },
    { icon: Icon5, texto: 'Em aprendizado...' },
    { icon: Icon6, texto: 'Em aprendizado...' },
    { icon: Icon7, texto: 'Em aprendizado...' },
    { icon: Icon8, texto: 'Em aprendizado...' },
    { icon: Icon9, texto: 'Em aprendizado...' },
    { icon: Icon10, texto: 'Em aprendizado...' },
    { icon: Icon11, texto: 'Em aprendizado...' },
    { icon: Icon12, texto: 'Em aprendizado...' },
  ];

  return (
    <div id="skills" className="container">
      <div className="box-skills habilidades">
        <h1 className="habilidade">HABILIDADES<span className="ponto">.</span></h1>
        <div className="skill">
          <div className="left skills">
          <p className="desc-icone">{texto}</p>
          </div>
          <div className="right">
          <div>
            <div className="container02">
              {icones.map((icone, index) => (
                <div
                  className="quadrado"
                  key={index}
                  onMouseOver={() => setTexto(icone.texto)}
                  onMouseOut={() => setTexto('#passe o mouse sobre o ícone')}>
                  <img className="icones" src={icone.icon} alt={`Ícone ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}