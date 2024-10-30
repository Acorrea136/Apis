import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                            Index
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/usuarios" className={({ isActive }) => isActive ? 'active' : ''}>
                            Usuarios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''}>
                            Productos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
