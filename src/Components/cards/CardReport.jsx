import React from "react";
import FieldsReport from "./FieldsReport";

import "./CardReport.css";

const CardReport = props => {

    return (
        <div className="Card-report">
            <div className="Card">
                <FieldsReport
                    className="Box-saldo"
                    title="Saldo em conta"
                    value="2000"
                />
                <FieldsReport
                    className="Box-receita"
                    title="Receita"
                    value="4000"
                />
                <FieldsReport
                    className="Box-despesa"
                    title="Despesa"
                    value="2000"
                />
                <div className="Text-bottom">
                    <p><span>R$55</span> próxima despesa -
                        <b> 03/05/22</b>
                    </p>
                </div> 
            </div>
        </div>

    )
}

export default CardReport;