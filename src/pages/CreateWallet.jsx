import React from 'react';

import '../styles/components/wallets/Wallets.createWallet.css';


const CreateWallet = props => {

    return (
        <div className='Form-account'>
            
            <h2>Adicionar nova conta</h2>

            <div className='Form-inputs'>
                <input autoComplete='off' required type='text'
                name='name' />
                <span>Nome da conta</span>
            </div>
            <div className='Form-inputs'>
                <input autoComplete='off' required type='number'
                name='name' />
                <span>Valor inicial</span>
            </div>

            <div className='Form-buttons'>
                <button id="Black"/>
                <button id="Orange"/>
                <button id="Purple"/>
                <button id="Green"/>
                <button id="Red"/>
                <label>Cor da conta</label>
            </div>

            <div className='Form-switch'>
                <input id="Toggle" className='Toggle' type="checkbox" />
                <label for="Toggle" />
                <label id="Name-Toggle">Visível</label>
            </div>

            <button>Adicionar</button>
        </div>
    );

}

export default CreateWallet;