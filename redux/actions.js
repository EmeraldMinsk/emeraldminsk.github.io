import {
	SET_THEME,
	SET_SLOW_INTERNET
} from '../constants/constants'

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