import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes history={history} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
