import React from "react";
import './Desafio.css';

import ods from '../../assets/img/ods.png'
import Group from '../../assets/img/Group.png'
import  recife from '../../assets/img/recife.jpg'
import Navbar from '../../assets/components/Navbar/Navbar.jsx';



const Desafio = () => {
return (
    <>
    <Navbar/>
    

    <img src={ods} className="ods"></img>
   

    <div>
    <h1 className="Explicando">Explicando a ods 11</h1>
        <h2 className="topico">Planejamento Urbano para Segurança:Explorar como o planejamento urbano pode ser utilizado para criar comunidades mais seguras. Isso inclui a implementação de medidas de design urbano que promovam a segurança, como iluminação adequada, espaços públicos bem projetados, ruas acessíveis e seguras, além de áreas verdes que incentivem a interação comunitária e a vigilância natural.
        <br></br>
        <br></br>
        Participação Comunitária e Empoderamento: Discutir a importância da participação comunitária e do empoderamento para promover comunidades seguras e inclusivas. Isso inclui o envolvimento ativo dos residentes na tomada de decisões relacionadas à segurança, a promoção da coesão social, a construção de redes de apoio comunitário e o fortalecimento das capacidades locais para resolver conflitos e responder a desafios de segurança de forma colaborativa.<br></br>
        <br></br>
        Resiliência a Desastres e Gerenciamento de Riscos: Abordar estratégias para fortalecer a resiliência das comunidades em face de desastres naturais e riscos emergentes. Isso envolve a implementação de planos de preparação para desastres, sistemas de alerta precoce, infraestrutura robusta e políticas de uso da terra que reduzam a exposição a ameaças, protegendo vidas e propriedades.
        </h2>
        </div>
        <div>
        <img src={Group} className="Group"></img>
        </div>
     
     
       
     
      
        

    
       
       
  
    
 </>
)

}
export default Desafio;