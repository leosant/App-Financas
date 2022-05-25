import React from 'react';

import '../styles/components/wallets/Wallets.createWallet.css';


const CreateWallet = props => {

    return (
        <form className='Form-account'>
            
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

            <div className='Form-radios'>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <label>Cor da conta</label>
            </div>

            <div>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider">Visível</span>
                </label>
            </div>

            <button>Adicionar</button>
        </form>
    );

}

export default CreateWallet;