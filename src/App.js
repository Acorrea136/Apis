import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; // Importación correcta
import Index from './pages/Index';
import Usuarios from './pages/Usuarios';
import Productos from './pages/Productos';
import Integrantes from './pages/Integrantes'; // Nueva página

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/usuarios" element={<Usuarios />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/integrantes" element={<Integrantes />} />
                    </Routes>
                </div>
                <Footer /> 
            </div>
        </Router>
    );
};

export default App;
