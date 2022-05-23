import React, {useState, useEffect} from "react";
import CardReport from '../components/dashboard/CardReport';
import { listAllWallets } from '../services/finance/ApiFinance';

import './Home.css'

const Home = props => {

    const[accountBalance, setAccountBalance] = useState([]);

    useEffect( () => {
        listAllWallets().then( ({data}) => {
            setAccountBalance(
                countAccountBalance(data)
            )
            
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <div>
           <CardReport
                accountBalance={accountBalance}
                recipe="4000"
                cost="2000"
           />
        </div>
    ) 
}

function countAccountBalance(values) {
    
    let total = 0

    values.map( item => total += item.accountBalance);
    
    return total;
}


export default Home;