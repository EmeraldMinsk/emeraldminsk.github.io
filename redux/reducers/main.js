import {
	Light,
	SET_THEME,
	SET_SLOW_INTERNET,
	SET_DATA_LOADING,
	SET_DATA_LOADED
} from '../../constants/constants';

let initialState = {
	theme: Light,
	isSlowInternet: false,
	data: {},
	dataLoading: false,
	dataLoaded: false,
};

export default (state = initialState, action) => {
	switch(action.type) {
		
		case SET_THEME: {
			return {
				...state,
				theme: action.payload,
			}
		}
		case SET_SLOW_INTERNET: {
			return {
				...state,
				isSlowInternet: action.payload,
			}
		}
		case SET_DATA_LOADING: {
			return {
				...state,
				dataLoading: true,
				dataLoaded: false
			}
		}
		case SET_DATA_LOADED: {
			return {
				...state,
				dataLoading: false,
				dataLoaded: true,
				data: action.payload
			}
		}

		// case "ITEMS_LOADED": {
		// 	return {
		// 		...state,
		// 		isFetching: false,
		// 		isLoaded: true,
		// 		data: action.payload,
		// 	}
		// }
		// case "ITEMS_WRITE_FROM_FUNC_TO_ITEMS": {
		// 	//вложенность
		// 	return {
		// 		...state,
		// 		some: action.payload,
		// 		innerObj:{
		// 			...state.innerObj,
		// 			text:action.payload,
		// 		}
		// 	}
		// }
		default: return state;
	}
	return state;
};
