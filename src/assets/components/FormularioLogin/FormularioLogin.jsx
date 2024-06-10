import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./FormularioLogin.css";
import { Link, redirect, useNavigate } from "react-router-dom";

const FormularioLogin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()


  const handleSubmit = async (event) => {
   
    event.preventDefault();

   
    console.log("Dados de Login:", { username, password });
    const resposta = await fetch("http://localhost:8080/civis")
    const arrayContas = await resposta.json();
    const conta = arrayContas.find((conta)=>conta.email==username)
    console.log(conta)
    if(conta==undefined){
      alert("Conta não cadastrada")

    }else{
      conta.senha==password;
      if(conta.senha==password){
        sessionStorage.setItem("usuario",conta.id)
       navigate("/PrincipalApp",{replace:true})

      }else{
        alert("A senha está incorreta")
      }
    }
    


  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Entrar</button>
         
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registar</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormularioLogin;
