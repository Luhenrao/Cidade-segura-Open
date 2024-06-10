
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../img/logo.png'






const Header = () => {
    return(
      
            <div>
  
        <nav className="nav">
        <div className="logo"><h1 className="cidade">Cidade</h1>
                <h1 className="segura">Segura</h1></div>
            <Link to ="/" className="botoesLC">Início</Link>
            <Link to="/Desafio" className="Botoes">Desafio</Link>
            <Link to="/Solucao" className="Botoes">Solução</Link>
            <Link to="/Sobrenos"className="Botoes">Sobre Nós</Link>
            <Link to="/Login"className="botoesLC">Entrar</Link>
            <Link to="/Cadastrar"className="BotaoCadastro">Cadastrar</Link>
            
        </nav>
        </div>
  
    );
};

export default Header;