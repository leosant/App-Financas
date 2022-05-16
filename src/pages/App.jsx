import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../routers/Menu';
import Content from '../routers/Content';
import Styles from '../styles/WebApp.module.css';

const App = props => {
  return (
    <div className={Styles.App}>
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
