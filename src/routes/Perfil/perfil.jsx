import React, { useState, useEffect } from 'react';
import image from "../../assets/img/image.png"
import "./perfil.css"

const Perfil = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`http://localhost:8080/civis/${sessionStorage.getItem("usuario")}`); 
            const data = await response.json();
            setProfile(data);
        };
        fetchProfile();
    }, []);

    return (
        <div className="profile-container">
            <div className="profile-image-container">
                <img src={image} alt="Profile" className="profile-image" />
            </div>

            <div className="profile-item">
                <strong>Nome:</strong> {profile?.nome}
            </div>
            <div className="profile-item">
                <strong>Email:</strong> {profile?.email}
            </div>
            <div className="profile-item">
                <strong>CPF:</strong> {profile?.cpf}
            </div>
            <div className="profile-item">
                <strong>Número:</strong> {profile?.contato}
            </div>
        </div>
    );
}

export default Perfil;
