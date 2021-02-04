import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {isLightTheme, convertDate} from '../../utils/utils';
import {SvgClear} from '../../images/svg/SvgClear';
import {setModalData} from '../../redux/actions';

import './Modal.scss';


export const Modal = ({data, style}) => {
    const dispatch = useDispatch();
    const reduxTheme = useSelector(state => state.main.theme);
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);
    const close = () => {
        dispatch(setModalData(null));
    };
    return (
        <div onClick={close} className={clsx("Modal", MEMOisLightTheme ? 'Modal-darkTheme' : 'Modal-lightTheme')}>
            <div onClick={e => e.stopPropagation()} className={"Modal-wrapper"}>
                <div className={clsx("Modal-header", "Modal-block")}>
                    <div className={"Modal-photo"} style={{backgroundImage: `url(${data.picture.thumbnail})`}} />
                    <SvgClear className={"Modal-cross"} onClick={close}/>
                </div>
                <div className={"Modal-block"}>
                    <span>name</span>
                    <div>{data.name.first+' '+data.name.last}</div>
                </div>
                <div className={"Modal-block"}>
                    <span>birth date</span>
                    <span>{convertDate(data.dob.date)}</span>
                </div>
                <div className={"Modal-block"}>
                    <span>phone</span>
                    <span>{data.phone}</span>
                </div>
                <div className={"Modal-block"}>
                    <span>email</span>
                    <span>{data.email}</span>
                </div>
                <div className={"Modal-block"}>
                    <span>country</span>
                    <span>{data.location.country}</span>
                </div>
                <div className={"Modal-block"}>
                    <span>city</span>
                    <span>{data.location.city}</span>
                </div>
                <div className={"Modal-block"}>
                    <span>postcode</span>
                    <span>{data.location.postcode}</span>
                </div>
                <div className={"Modal-block"}>
                    <span>registered</span>
                    <span>{convertDate(data.registered.date)}</span>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    data: propTypes.object
}