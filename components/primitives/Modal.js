import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {isLightTheme} from '../../utils/utils';
import {SvgClear} from '../../images/svg/SvgClear';
import {setModalData} from '../../redux/actions';

import './Modal.scss';


export const Modal = ({data, style}) => {
    const dispatch = useDispatch();
    const reduxTheme = useSelector(state => state.main.theme)
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);
   
    return (
        <div className={clsx("Modal", MEMOisLightTheme ? 'Modal-darkTheme' : 'Modal-lightTheme')}>
            modal
            <SvgClear onClick={() => dispatch(setModalData(null))}/>
        </div>
    );
}

Modal.propTypes = {
    data: propTypes.object
}