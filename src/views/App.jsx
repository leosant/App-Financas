import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../routers/Menu';
import Content from '../routers/Content';


import './App.css';

const App = props => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
