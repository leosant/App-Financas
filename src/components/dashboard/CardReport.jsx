import React from "react";

import FieldsReport from "./FieldsReport";
import Wallet from "../../assets/wallet.svg";
import "./CardReport.css";

const CardReport = props => {

    const balance = props.accountBalance ? props.accountBalance : "-";

    return (

        <div className="CardDashboard">
            <div className="Box-img">
                <img src={Wallet} alt="wallet" />
            </div>

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