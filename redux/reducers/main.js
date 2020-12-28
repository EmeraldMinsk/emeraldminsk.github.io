import {
	Light,
	SET_THEME,
	SET_SLOW_INTERNET
} from '../../constants/constants';


let initialState = {
	theme: Light,
	isSlowInternet: false,
	// data: {},
	// isFetching: false,
	// isLoaded: false,
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
