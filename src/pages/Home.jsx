import React from "react";
import CardReport from '../components/dashboard/CardReport';

import './Home.css'

const Home = props => {

    return (
        
        <div>
           <CardReport
                accountBalance={0}
                recipe="4000"
                cost="2000"
           />
        </div>
    )
}

export default Home;