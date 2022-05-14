import React from 'react';
import { Link } from 'react-router-dom';


import './Menu.css';

const Menu = props => {
    return (
        <aside className="Menu">
            <nav>

                <ul>
                    <li>
                        <Link to="/"></Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/mirrorDot"></Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/employerCreate"></Link>
                    </li>
                    <li>
                        <Link to="/employerEdit"></Link>
                    </li>
                    <li>
                        <Link to="/employerRemove"></Link>
                    </li>
                </ul>

            </nav>
        </aside>
    )
}

export default Menu;