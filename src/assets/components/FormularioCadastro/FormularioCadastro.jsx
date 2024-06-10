import React from 'react'
import {FaUser,FaLock} from 'react-icons/fa';
import{useState} from "react";
import "./FormularioCadastro.css";

const Cadastro = () => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[name,setName] = useState("");
  const[cpf,setCpf]= useState("");
  const[data,setData]= useState("");
  const[contato,setContato]=useState("");
  const handleSubmit = (event) => { 
    event.preventDefault();
     console.log(username, password,name,cpf,data,contato);
    console.log("Envio");
    {
      fetch("http://localhost:8080/civis",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:name,email:username,cpf:cpf,dataDeNascimento:data,senha:password,contato:contato})})
    }

    alert("Conta criada com sucesso, retorne a pagina de login para entrar no aplicativo");
  };
 
  return (
    <div className="container">
      <form className='form' onSubmit={handleSubmit}>
        <h1>Cadastrar</h1>


        <div className='input-field'>
        <input type="text" placeholder="Nome"
        onChange={(e) => setName(e.target.value)}/> 
        </div>

        <div className='input-field'>
        <input type="email" placeholder="E-mail"
        onChange={(e) => setUsername(e.target.value)}/> 
        </div>

        <div className='input-field'>
        <input type="text" placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}/>
        </div>

        <div className='input-field'>
        <input type="passWord" placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className='input-field'>
        <input type="date" placeholder="Data de nascimento"
        onChange={(e) => setData(e.target.value)}/> 

        </div>

        <div className='input-field'>
        <input type="text" placeholder="Contato"
        onChange={(e) => setContato(e.target.value)}/> 

        </div>





         
        <button type='submit'>Cadastrar</button>



         </form>
    </div>
  )
}

export default Cadastro