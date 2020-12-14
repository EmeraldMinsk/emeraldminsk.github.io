//react
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Main from './components/Main';

//css
import './scss/main.scss';
ReactDOM.render(
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
	, document.getElementById('container') 
);

