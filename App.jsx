// react
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'babel-polyfill';

import Main from './components/Main';
import Nav from './components/Nav';
import List from './components/List';

// redux
import { Provider } from 'react-redux';

// css
import './scss/main.scss';

// store
import {store} from './redux/store';

// history
import { createBrowserHistory } from 'history'

ReactDOM.render(
  
	<Provider store={store}>
      <BrowserRouter>
        <Nav history={createBrowserHistory}>
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Nav>
      </BrowserRouter>
    
	</Provider>
	, document.getElementById('container') 
);

