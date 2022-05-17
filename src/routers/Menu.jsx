import React from 'react';
import { Link } from 'react-router-dom';

import DashboardIco from '../assets/dashboard.svg';
import WalletsIco from '../assets/wallet.svg';

import './Menu.css';

const Menu = props => {
    return (
        <aside className="Menu">
            <nav>

                <ul>
                    <li>
                        <Link to="/">
                            <div className='Dashboard'>
                                <img src={DashboardIco} alt='dashboard' />
                                <h2>Dashboard</h2>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/wallets">
                            <div className='Wallets'>
                                <img src={WalletsIco} alt='wallets' />
                                <h2>Carteiras</h2>
                            </div>
                        </Link>
                    </li>
                </ul>

            </nav>
        </aside>
    )
}

export default Menu;