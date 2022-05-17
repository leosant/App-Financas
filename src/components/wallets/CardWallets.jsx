import React from 'react';

import Ico from '../../assets/mastercard.svg';
import '../../styles/components/wallets/Wallets.card.css';

const CardWallets = props => {

    const balance = props.balance? props.balance : '***'
    const nameBank = props.nameBank? props.nameBank : '---'

    return (

        <div className='Card' style={{
            background:props.colorCard || '#b7b7b7'
            }}>
            <div className='Text-top'>
                <h2 className='Balance'>Saldo</h2>
                <h3>R$ {balance}</h3>
            </div>
            <div className='Text-bottom'>
                <p>Bank name</p>
                <h2>{nameBank}</h2>
                <img src={Ico} alt="ico" />
            </div>
        </div>
    )
}

export default CardWallets;