import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {isLightTheme} from '../../utils/utils';
import {SvgArrow} from '../../images/svg/SvgArrow';

import './SortIcon.scss';



export const SortIcon = ({isUp, className}) => {
    const reduxTheme = useSelector(state => state.main.theme)
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);
   
    return (
        <div className={clsx("SortIcon", className, MEMOisLightTheme ? 'SortIcon-darkTheme' : 'SortIcon-lightTheme')}>
            <SvgArrow transform={isUp ? "rotate(180)" : "rotate(0)" }/>
        </div>
    );
}

SortIcon.propTypes = {
    className: propTypes.string,
    data: propTypes.object
}