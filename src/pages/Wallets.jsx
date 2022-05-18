import React, { useState, useEffect } from 'react';

import CardWallets from '../components/wallets/CardWallets'
import BtAddWallets from '../components/wallets/BtAddWallets';
import { listAllWallets } from '../services/finance/ApiFinance';
import BgRoom from '../assets/bgroom.png';

import '../styles/components/wallets/Wallets.css';

const Wallets = props => {

    const [accountBalance, setAccountBalance] = useState([]);

    useEffect(() => {
        listAllWallets().then(({ data }) => {
            setAccountBalance(data[0].accountBalance)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='Default'>
            <BtAddWallets />
            <div className='Text-wallets'>
                <h2>Carteiras</h2>
            </div>
            <CardWallets
                colorCard="linear-gradient(180deg, #3C246D 0%, #4E318C 100%)"
                balance={accountBalance}
                nameBank="Carteira"
            />
            <div className='Bgroom'>
                <img src={BgRoom} alt='Bgroom' />
            </div> 
        </div>

    )

}



export default Wallets;