import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import PageError from '../Components/PageError';


import './Content.css'

const Content = props => {
    return (
        <main className="Content">
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="*">
                    <PageError />
                </Route>

            </Switch>
        </main>
    )
}

export default Content;