import React from 'react';

import '../styles/components/wallets/Wallets.createWallet.css';


const CreateWallet = props => {

    return (
        <form className='Form-account'>
            <h2>Adicionar nova conta</h2>
            <input id='Insert-wallet01' placeholder='Nome da conta' />
            <input id='Insert-wallet02' placeholder='Valor inicial' />
            <div>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <label>Cor da conta</label>
            </div>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider">Visível</span>
            </label>
            <button>Adicionar</button>
        </form>
    );

}

export default CreateWallet;