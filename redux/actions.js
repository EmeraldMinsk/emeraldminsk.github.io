import {
	SET_THEME,
	SET_SLOW_INTERNET,
	SET_DATA_LOADING,
	SET_DATA_LOADED
} from '../constants/constants'
import axios from "axios";

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

	let answer;
	try {
		answer = await axios({
			url: 'https://randomuser.me/api/?results=500',
			method: 'get'
		})

	} catch (e) {
		console.log('error', e);
	}
	if (Array.isArray(answer.data.results)) {
		dispatch({
			type: SET_DATA_LOADED,
			payload: answer.data.results
		})
	}
}