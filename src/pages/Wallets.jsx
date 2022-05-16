import React from 'react';

import CardWallets from '../components/wallets/CardWallets'

const Wallets = props => {

    return (
        <div>
            <div>
                <h2>Carteiras</h2>
            </div>
            <div>
                <CardWallets
                    balance="100,00" 
                    nameBank="Carteira"
                />
            </div>
        </div>

    )
}

export default Wallets;