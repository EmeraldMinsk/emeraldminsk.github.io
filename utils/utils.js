import {ThemeConst, Light, Dark} from '../constants/constants';
import {setTheme as reduxSetTheme} from '../redux/actions';
import {store} from '../redux/store';

export const setInitialTheme = () => {
  const ls = localStorage.getItem(ThemeConst);
  const res = (ls === Light || ls === Dark) ? ls : Light;
  store.dispatch(reduxSetTheme(res));
}
export const setTheme = (e) => {
  const type = store.getState().main.theme;
  const res = (type === Light ? Dark : Light);
  localStorage.setItem(ThemeConst, res);
  store.dispatch(reduxSetTheme(res));
}

// true === 'dark' / false === 'light'
export const isLightTheme = (type) => {
  return type === Light;
}

// random
export const randomNoPrevValue = (min, max, prevValue, setValue) => {
  
  let result = null;
  do{
    result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    
    // can be -0
    if(result===0){
      result=0;
    }
  } while (result === prevValue);
  setValue(result);
}
