// redux
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import main from "./reducers/main";

// middlewares
import thunk from 'redux-thunk';

// store
export const store = createStore(
	combineReducers({main}),
  	composeWithDevTools(
		applyMiddleware(thunk)
	  )
);
