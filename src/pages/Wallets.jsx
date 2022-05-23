import React, { useState, useEffect } from 'react';

import CardWallets from '../components/wallets/CardWallets'
import BtAddWallets from '../components/wallets/BtAddWallets';
import { listAllWallets } from '../services/finance/ApiFinance';

import '../styles/components/wallets/Wallets.css';

const Wallets = props => {

    const [wallets, setWallets] = useState([]);


    useEffect(() => {
        listAllWallets().then(({ data }) => {
            setWallets(data)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listAllWallets])

    return (
        <div className='Default'>

            <BtAddWallets />

            <div className='Text-wallets'>
                <h2>Carteiras</h2>
            </div>

            <div className='Pagination-wallets'>


                <div id='Wallet-list'>
                    {
                        wallets.map( (wallet, id) => {
                            return (
                                <CardWallets
                                    key={id}
                                    colorCard={wallet.colorCard
                                        ? wallet.colorCard
                                        : "linear-gradient(180deg, #3C246D 0%, #4E318C 100%)"}
                                    balance={wallet.accountBalance}
                                    nameBank={wallet.nameBank}
                                />
                            )
                        })
                    }
                </div>

            
            </div>
            
            <div className='Bgroom' />
            
        </div>

    )

}



export default Wallets;