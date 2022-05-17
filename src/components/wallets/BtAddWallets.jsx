import React from 'react';

import CircleAdd from '../../assets/circleAdd.svg';

import '../../styles/components/wallets/Wallets.button.css'

const BtAddWallets = props => {

    return (
        <div className='Button-wallets'>
            <button>
                <img src={CircleAdd} alt='circleAdd' />
                <h2>Criar Conta</h2>
            </button>
        </div>
    )
}

export default BtAddWallets;