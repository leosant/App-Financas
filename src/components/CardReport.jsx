import React, { useState, useEffect } from "react";
import ApiFinance from "../services/Axios"
import FieldsReport from "./FieldsReport";

import "./CardReport.css";

const CardReport = props => {

    const [accountBalance, setAccountBalance] = useState(0.0);

    useEffect(() => {
        ApiFinance.get("find").then((response) => {
            if (response.status === 200) {
                setAccountBalance(response.data[0].accountBalance)
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const balance = accountBalance? accountBalance : "-";

    return (
        <div className="Card-report">
            <div className="Card">
                <FieldsReport
                    className="Box-saldo"
                    title="Saldo em conta"
                    value={balance}
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