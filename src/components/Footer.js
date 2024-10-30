import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer-links">
                    <li>
                        <Link to="/integrantes">Integrantes del grupo</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
