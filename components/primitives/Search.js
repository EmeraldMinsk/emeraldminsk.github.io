import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {isLightTheme} from '../../utils/utils';
import {SvgClear} from '../../images/svg/SvgClear'

import './Search.scss';


export const Search = ({value, onChange}) => {
    const reduxTheme = useSelector(state => state.main.theme)
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);


    return (
        <div className={clsx("Search", MEMOisLightTheme ? 'Search-darkTheme' : 'Search-lightTheme')}>
            <input placeholder="Search by name" className={"Search-Input"} type={"text"} value={value} onChange={e => onChange(e.target.value)} />
            <SvgClear onClick={() => onChange('')} className={"Search-ClearIcon"} />
        </div>
    );
}

Search.propTypes = {
    value: propTypes.string,
    onChange: propTypes.func
}