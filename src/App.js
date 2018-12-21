import React, { Component } from 'react';

import './base.css';
import './App.css';

import axios from 'axios';

import routes from './routes';
import {HashRouter, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';

import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <HashRouter >  
          <div className="App">
            <Header />
            {routes}
          </div>
      </HashRouter>
    </Provider>
    );
  }
}

export default App;
