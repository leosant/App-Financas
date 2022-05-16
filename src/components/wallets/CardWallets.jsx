import React from 'react';

import Ico from '../../assets/mastercard.svg';
import '../../styles/components/wallets/Wallets.card.css';

const CardWallets = props => {

    return (

        <div className='Card'>
            <div className='Text-top'>
                <h2 className='Balance'>Saldo</h2>
                <h3>R$ {props.balance}</h3>
            </div>
            <div className='Text-bottom'>
                <p>Bank name</p>
                <h2>{props.nameBank}</h2>
                <img src={Ico} alt="ico" />
            </div>
        </div>
    )
}

export default CardWallets;