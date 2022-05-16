import React from 'react';

import ErrorSvg from '../assets/404.svg';

const PageError = props => {
    return (
        <div className="Error">
            <p>Opssss... Não consegui encotrar essa página!</p>
            <img src={ErrorSvg} alt="Error default" />
        </div>
    )
}

export default PageError;