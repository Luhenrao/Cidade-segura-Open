import React, { useState } from 'react';
import './FormularioReport.css';



function FormularioReport() {
    const[data,setData]=useState("");
    const endereco = sessionStorage.getItem("endereco")
    console.log(endereco);
    const [formData, setFormData] = useState({
        type: '',
        description: '',
        images: []

    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Aqui você pode enviar os dados para onde quiser
        console.log("Envio");
        {
          fetch("http://localhost:8080/incidentes",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({tipoIncidente:formData.type,descricao:formData.description,data:data,endereco:endereco,civil:sessionStorage.getItem("usuario")})})
        }
        console.log(sessionStorage.getItem("usuario"))
    
        alert("Relatorio feito com sucesso");
      
        // Limpar o formulário após o envio (opcional)
        setFormData({
            type: '',
            description: '',
            images: []
        });
    };
    var opcao;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value

        });
        opcao =value;
        console.log(value)
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        setFormData({
            ...formData,
            images: files
        });
    };

    return (
        <div className="container2">
            <h2>Relatar Incidente</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>Endereço:{endereco}</label>
                    
                    <label htmlFor="incident-type">Tipo de Incidente:</label>
                    <select id="incident-type" name="type" value={formData.type} onChange={handleInputChange} required>
                        <option value="" disabled>Selecione um incidente</option>
                        <option value="pixacao">Pixação</option>
                        <option value="depredacao">Depredação</option>
                        <option value="assalto">Assalto</option>
                        <option value="furto">Furto</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
                <div className="form-group">
                <div className='input-field'>
                    <label>Data:</label>
        <input type="date" placeholder="Data do acontecimento"
        onChange={(e) => setData(e.target.value)}/> 
                     </div>
                    <label htmlFor="incident-description">Descrição do Incidente:</label>
                    <textarea id="incident-description" name="description" value={formData.description} onChange={handleInputChange} rows="4" placeholder="Descreva o incidente aqui..." required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="incident-images">Anexar Imagens:</label>
                    <input type="file" id="incident-images" name="images" accept="image/*" multiple onChange={handleImageChange} required />
                </div>
                <button type="submit">Enviar</button>
                
            </form>
        </div>
    );
}


export default FormularioReport;
