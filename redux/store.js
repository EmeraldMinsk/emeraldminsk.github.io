// redux
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import items from "./reducers/items";

// middlewares
import thunk from 'redux-thunk';

// store
export const store = createStore(
	combineReducers({items}),
  	composeWithDevTools(
		applyMiddleware(thunk)
	  )
);
