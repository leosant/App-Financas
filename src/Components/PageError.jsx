import React from 'react';

import errorSvg from '../assets/404.svg';
import './PageError'

const PageError = props => {
    return (
        <div className="Error">
            <p>Opssss... Não consegui encotrar essa página!</p>
            <img src={errorSvg} alt="Error default" />
        </div>
    )
}

export default PageError;