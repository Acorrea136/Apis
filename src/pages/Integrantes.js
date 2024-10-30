import React from 'react';
import './Integrantes.css';

const Integrantes = () => {
    return (
        <div className="integrantes-container">
            <h2>Integrantes del Grupo</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Alejandro Correa Arango</h3>
                    <p>El mejor programador del mundo.</p>
                </div>
                <div className="card">
                    <h3>Kevin Muñoz Oviedo</h3>
                    <p>El mejor programador de su casa.</p>
                </div>
            </div>
        </div>
    );
};

export default Integrantes;
