import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {isLightTheme, randomNoPrevValue} from '../../utils/utils';

import './Quotes.scss';
export const Quotes = ({addClass, timer}) => {
    const reduxTheme = useSelector(state => state.main.theme)
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);

    const [numb, setNumb] = React.useState(0);

    const quotes = [
      '“The purpose of our lives is to be happy.”',
      '“Life is what happens when you’re busy making other plans.”',
      '“Get busy living or get busy dying.”'
    ];
    React.useEffect(() => {
      setNumb(randomNoPrevValue(0, quotes.length-1, numb));
      // TODO здесь запускаем таймаут
		}, []);

    return (
        <div className={clsx("Quotes", addClass, MEMOisLightTheme ? 'Quotes-darkTheme' : 'ButQuoteston-lightTheme')}>
          {quotes[numb]}
        </div>
    );
}

Quotes.propTypes = {
    addClass: PropTypes.string,
    timer: PropTypes.number
}