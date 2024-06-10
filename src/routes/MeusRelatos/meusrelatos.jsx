import React, { useEffect, useState } from "react";
import './meusrelatos.css';
import Box from '@mui/material/Box';

const MeusRelatos = () => {
  const [relatos, setRelatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await fetch(`http://localhost:8080/civis/${sessionStorage.getItem("usuario")}`);
        const usuario = await resposta.json();
        setRelatos(usuario.incidentes || []);
        console.log(usuario.incidentes);
      } catch (error) {
        console.error("Erro ao buscar os relatos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="meus-relatos-container">
      <h1>Meus Relatos</h1>
      {relatos.length === 0 ? (
        <p>Nenhum relato encontrado.</p>
      ) : (
        relatos.map((relato) => (
          <div key={relato.id} className="relato">
            <h2>{relato.tipoIncidente}</h2>
            <p><strong>Endereço:</strong> {relato.endereco}</p>
            <p><strong>Descrição:</strong> {relato.descricao}</p>
            <div className="imagens-container">
              {(relato.imagens || []).map((imagem, index) => (
                <img key={index} src={imagem} alt={`Imagem do incidente ${relato.id}`} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MeusRelatos;
