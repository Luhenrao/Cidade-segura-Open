import React from "react";
import './Inicio.css';
import {useState} from 'react'

import Navbar from '../../assets/components/Navbar/Navbar';
import imagem1 from '../../assets/img/imagem1.jpg'
import imagem2 from '../../assets/img/imagem2.jpg'
import imagem3 from '../../assets/img/imagem3.jpg'
import imagem4 from '../../assets/img/imagem4.jpg'



const Home = () => {
return (
<>
<Navbar/>
        <div className="content">
          <div className="textoInicio">
    <h1 className="Slogan">
      <span className="destaque">Uma</span> comunidade unida<br></br> 
      <span className="destaque"> por uma</span> cidade mais segura
    </h1>
    <h2 className="frase">
    Juntos, cooperando para uma cidade mais segura e tranquila para todos.
    </h2>
    </div>
  </div>
  <div className="parteDeBaixo">
  <div className="esquerda">
    
  <img src={imagem1} className="imagem1"></img>
  <p className="t1">Com o Cidade Segura,<br></br> monitore incidentes em<br></br> tempo real e ajude a tornar<br></br> sua cidade um lugar mais<br></br> seguro para todos.</p>
  <img src={imagem2} className="imagem2"></img>
  <p className="t2">Cidade Segura transforma<br></br> sua cidade em uma rede colaborativa de segurança, monitorando e notificando incidentes para proteger<br></br> o bem-estar de todos.</p>
  

      
    </div>
    <div className="meio"></div>
    <div className="direita">
      <p className="t3">Cidade Segura: a tecnologia<br></br> a serviço da segurança<br></br> urbana, permitindo que você<br></br> reporte e acompanhe eventos críticos com facilidade.</p>
      <img src={imagem3} className="imagem3"></img>
      <p className="t4">Garanta uma resposta rápida e eficiente a incidentes na <br></br>sua cidade com o Cidade Segura,<br></br> o app de monitoramento que conecta cidadãos e autoridades.</p>
      <img src={imagem4} className="imagem4"></img>

    </div>
    </div>

   
 </>
)

}
export default Home;