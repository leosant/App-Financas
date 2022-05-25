import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Wallets from '../pages/Wallets';
import CreateWallet from '../pages/CreateWallet';
import PageError from '../pages/PageError';


import './Content.css'

const Content = props => {
    return (
        <main className="Content">
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/wallets">
                    <Wallets />
                </Route>

                <Route path="/create-wallet">
                    <CreateWallet />
                </Route>

                <Route path="*">
                    <PageError />
                </Route>

            </Switch>
        </main>
    )
}

export default Content;