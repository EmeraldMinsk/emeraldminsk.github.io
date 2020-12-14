export const save = (e) => (dispatch, getState) => {
  let {items} = getState();
  
	dispatch({
		type: 'SAVE_VALUE',
		payload: e
	})
}
export const load = () => async (dispatch, getState) => {
	
	dispatch({
        type: 'ITEMS_LOADING'
	});

	let answer;
	try {
		answer = await fetch('https://cors-anywhere.herokuapp.com/http://www.dota2.com/jsfeed/itemdata', {
					method: 'GET',
				});
		
	} catch (e) {
		console.log('error', e);
	}
	if(answer===undefined){
		setTimeout(() => {
			dispatch({
				type: 'ITEMS_LOADED',
				payload: {someData:123}
			})
		  }, 2000)
	}
	else{
		answer.json().then( data => {
			setTimeout(() => {
				dispatch({
					type: 'ITEMS_LOADED',
					payload: data
				})
			  }, 2000)
		});
	}
};