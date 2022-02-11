import React from 'react';
import { Link } from 'react-router-dom';


import './Menu.css';
const Menu = props => {
    return (
        <aside className="Menu">
            <nav>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/mirrorDot">Espelho de ponto</Link>
                    </li>
                </ul>

                <ul>
                    <p>Configuração</p>
                    <p>Cadastros</p>
                    <li>
                        <Link to="/employerCreate">Adicionar</Link>
                    </li>
                    <li>
                        <Link to="/employerEdit">Editar</Link>
                    </li>
                    <li>
                        <Link to="/employerRemove">Exclusão</Link>
                    </li>
                </ul>

            </nav>
        </aside>
    )
}

export default Menu;