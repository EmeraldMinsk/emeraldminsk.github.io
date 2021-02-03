import {
	SET_THEME,
	SET_SLOW_INTERNET,
	SET_DATA_LOADING,
	SET_DATA_LOADED,
	SET_MODAL
} from '../constants/constants'
import axios from "axios";
import * as data from '../mock/request.json';

export const setModalData = (e) => (dispatch, getState) => {
	dispatch({
		type: SET_MODAL,
		payload: e
	})
}

export const setTheme = (e) => (dispatch, getState) => {
	dispatch({
		type: SET_THEME,
		payload: e
	})
}

export const setSlowInternet = (e) => (dispatch, getState) => {
	dispatch({
		type: SET_SLOW_INTERNET,
		payload: e
	})
}

export const loadData = () => async (dispatch, getState) => {
	dispatch({
		type: SET_DATA_LOADING
	})

	// slow connection imitation
	if (getState().main.isSlowInternet){
		//sleep
		await new Promise(resolve => setTimeout(resolve, 5000));
	}

	let answer;
	
	try {
		answer = await axios({
			url: 'https://randomuser.me/api/?results=500',
			method: 'get'
		})

	} catch (e) {
		console.log('error', e);
	}

	if (!answer) {
		// use mock
		answer = {data};
	}

	if (Array.isArray(answer.data.results)) {
		dispatch({
			type: SET_DATA_LOADED,
			payload: answer.data.results
		})
	}
}