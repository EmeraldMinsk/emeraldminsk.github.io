import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {isLightTheme} from '../../utils/utils';
import {setModalData} from '../../redux/actions';

import './Slot.scss';


export const Slot = ({data, style}) => {
    const reduxTheme = useSelector(state => state.main.theme)
    const dispatch = useDispatch();
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);
    const date = new Date(data.registered.date);
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = date.getDate();

    const convert = (e) => {

      return e <= 9 ? `0${e}` : e;
    }
    return (
        <div onClick={() => dispatch(setModalData(data))} className={clsx("Slot", MEMOisLightTheme ? 'Slot-darkTheme' : 'Slot-lightTheme')} style={style}>
            <div className={clsx("Slot-name", "Slot-default")}>
                <span>{`${data.name.first} ${data.name.last}`}</span>
            </div>
            <div className={clsx("Slot-phone", "Slot-default")}>
                <span>{data.phone}</span>
            </div>
            <div className={clsx("Slot-email", "Slot-default")}>
                <span>{data.email}</span>
            </div>
            <div className={clsx("Slot-location", "Slot-default")}>
                <span>{data.location.country}</span>
            </div>
            <div className={clsx("Slot-registered", "Slot-default")}>
                <span>{`${y}-${convert(m)}-${convert(d)}`}</span>
            </div>
        </div>
    );
}

Slot.propTypes = {
    style: propTypes.object,
    data: propTypes.object
}