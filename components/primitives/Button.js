import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {isLightTheme} from '../../utils/utils';

import './Button.scss';

export const Button = ({addClass, title, cbClick, nav}) => {
    const reduxTheme = useSelector(state => state.main.theme)
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);

    return (
        nav 
            ? 
        <NavLink 
            key={nav}
            to={nav}
            className={clsx("Button", addClass, MEMOisLightTheme ? 'Button-darkTheme' : 'Button-lightTheme')}
            onClick={(e) => cbClick(e, nav)}
        >
            {title}
        </NavLink>
            : 
        <div className={clsx("Button", addClass, MEMOisLightTheme ? 'Button-darkTheme' : 'Button-lightTheme')} onClick={cbClick}>
            {title}
        </div>
    );
}

Button.propTypes = {
    addClass: PropTypes.string,
    title: PropTypes.string,
    cbClick: PropTypes.func,
    nav: PropTypes.string // navigation btn (path)
}