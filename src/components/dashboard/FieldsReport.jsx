import React from 'react';

import './FieldsReport.css';

const FieldsReport = props => {
    return (
        <div className={props.className}>
            <p>{props.title}</p>
            <h2>{props.value}</h2>
        </div>
    )
}

export default FieldsReport;