import React from "react";
import './Solucao.css';
import pag1 from '../../assets/img/pag1.png'
import Navbar from '../../assets/components/Navbar/Navbar.jsx';


const Solucao = () => {
return (
    <>
   <Navbar/>
    <div>
        
        <h1 className="tituloSolucao">Solução Proposta</h1>
        <h1 className="Solucao">
        Em um mundo em constante evolução, a segurança urbana tornou-se uma prioridade essencial para comunidades em todo o mundo. Para enfrentar os desafios crescentes e promover a segurança nas cidades, apresentamos uma solução inovadora: um aplicativo inteligente de monitoramento, alinhado com o Objetivo de Desenvolvimento Sustentável (ODS) número 11 da ONU.<br></br><br></br>

O ODS 11, intitulado "Cidades e Comunidades Sustentáveis", busca tornar as cidades inclusivas, seguras, resilientes e sustentáveis. Nosso aplicativo contribui diretamente para alcançar esse objetivo, fornecendo uma plataforma abrangente para monitorar e melhorar a segurança urbana.<br></br><br></br>

Este aplicativo permite que os cidadãos relatem incidentes de segurança em tempo real, como crimes, acidentes ou condições de infraestrutura precárias. Esses relatórios são georreferenciados e instantaneamente enviados para as autoridades competentes, permitindo uma resposta rápida e eficaz.
          
        </h1>
    <div className="topics">

        <div className="pag1">
            
            <h3 className="title">Colaboração Comunitária</h3>
            Permite que os usuários 
             compartilhem informações e 
             relatos sobre incidentes, 
             colaborando para a segurança 
              da comunidade</div>

        <div className="pag2">
            
            <h3 className="title">Integração com Autoridades</h3>
            O Cidade Segura se integra com as 
            autoridades locais, facilitando a 
            comunicação e ação conjunta 
            para resolver problemas de 
            segurança. 
            </div>   
        </div>
        <div className="topics">
        <div className="pag3">
            
            <h3 className="title">Alertas e Notificações</h3>
            O aplicativo envia alertas e 
            notificações sobre incidentes 
            recentes, permitindo uma 
            resposta rápida das autoridades 
             e comunidades locais.
        </div>
        <div className="pag4">
        
            <h3 className="title">Monitoramento em Tempo Real</h3>
            Os usuários podem visualizar 
            em tempo real as incidências de
            vandalismo e insegurança em 
            locais turísticos.
        </div>
    </div>

    {/* <img src={pag1} className="pag1" ></img> */} 
      

    </div>

    </>   
)

}
export default Solucao;