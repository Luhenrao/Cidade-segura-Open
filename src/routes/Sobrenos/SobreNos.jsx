import React from "react";
import './Sobrenos.css'
import CarrosselSobreNos from "../../assets/components/Carrossel/CarrosselSobreNos";
import Navbar from '../../assets/components/Navbar/Navbar';

const SobreNos = () => {
return (
  <>
  <Navbar/>
    <div><h1 className="tituloSobrenos">Nossa equipe de desenvolvedores</h1>
      <CarrosselSobreNos/>

    </div>
    </>
)

}
export default SobreNos;