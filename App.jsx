// react
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'babel-polyfill';

import Main from './components/pages/Main';
import {Navigation} from './components/Navigation';
import {List} from './components/pages/List';

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
        <Navigation history={createBrowserHistory}>
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Navigation>
      </BrowserRouter>
    
	</Provider>
	, document.getElementById('container') 
);

