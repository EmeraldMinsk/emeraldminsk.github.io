// react
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'babel-polyfill';

import Main from './components/Main';

// redux
import { Provider } from 'react-redux';

// css
import './scss/main.scss';

// store
import {store} from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
				<Switch>
          <Route path="/about">
						<div>about</div>
          </Route>
          <Route path="/users">
            <div>users</div>
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </BrowserRouter>
	</Provider>
	, document.getElementById('container') 
);

