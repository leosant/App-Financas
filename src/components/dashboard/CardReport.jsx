import React from "react";
// import ApiFinance from "../../services/ApiFinance"
import FieldsReport from "./FieldsReport";

import "./CardReport.css";

const CardReport = props => {

    const balance = props.accountBalance ? props.accountBalance : "-";

    return (
        <div className="Card">
            <FieldsReport
                className="Box-saldo"
                title="Saldo em conta"
                value={balance}
            />
            <FieldsReport
                className="Box-receita"
                title="Receita"
                value={props.recipe}
            />
            <FieldsReport
                className="Box-despesa"
                title="Despesa"
                value={props.cost}
            />
            <div className="Text-bottom">
                <p><span>R$55</span> próxima despesa -
                    <b> 03/05/22</b>
                </p>
            </div>
        </div>
    )
}

export default CardReport;