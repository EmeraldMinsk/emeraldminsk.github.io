import React,{Fragment} from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import Button from '../primitives/Button';
import {LoadingScreen} from '../primitives/LoadingScreen';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import memoizeOne from 'memoize-one';
import {useSelector, useDispatch} from 'react-redux';
import {isLightTheme} from '../../utils/utils';
import {loadData} from "../../redux/actions";

import './List.scss';


export const List = ({addClass, timer}) => {
    const reduxTheme = useSelector(state => state.main.theme)
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);

    const dispatch = useDispatch();

    const data = useSelector((state) => state.main.data);
    const dataLoading = useSelector((state) => state.main.dataLoading);
    const dataLoaded = useSelector((state) => state.main.dataLoaded);

    // const [numb, setNumb] = React.useState(0);

    React.useEffect(() => {
        dispatch(loadData());
    }, []);

    const renderData = () => {
        // TODO search/sort/virtualized
        return data.map(it => {
            return <div>{it.email}</div>;
        })
    }

    return (
        <div className={clsx("List", addClass, MEMOisLightTheme ? 'List-darkTheme' : 'List-lightTheme')} style={{backgroundImage: clsx(MEMOisLightTheme ? "url('../../images/images/day.jpg')" : "url('../../images/images/night.jpg')")}}>
            <div className={'List-container'}>
                {dataLoading ? <LoadingScreen /> : null}
                {dataLoaded && data.length ? renderData() : null}
            </div>
        </div>
    );
}

List.propTypes = {
    addClass: propTypes.string,
    timer: propTypes.number
}