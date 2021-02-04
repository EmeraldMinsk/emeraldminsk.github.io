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

// convert date
const convertWithZero = (e) => {
  return e <= 9 ? `0${e}` : e;
}

export const convertDate = (e) => {
  const date = new Date(e);
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();

  return `${y}-${convertWithZero(m)}-${convertWithZero(d)}`;
}
