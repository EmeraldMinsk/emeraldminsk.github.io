import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {isLightTheme} from '../../utils/utils';
import {SortIcon} from '../primitives/SortIcon';

import './SlotFilter.scss';


export const SlotFilter = ({sort, setSort}) => {
    const reduxTheme = useSelector(state => state.main.theme)
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);

    return (
        <div className={clsx("SlotFilter", MEMOisLightTheme ? 'SlotFilter-darkTheme' : 'SlotFilter-lightTheme')}>
            <div onClick={() => setSort(sort === 'nameAsc' ? 'nameDesc' : 'nameAsc')} className={clsx("SlotFilter-name", "SlotFilter-wrap")}>
              {sort === 'nameAsc' || sort === 'nameDesc' ? <SortIcon isUp={sort === 'nameDesc'} className={"SlotFilter-icon"} /> : null}
              <span>Name</span>
            </div>
            <div onClick={() => setSort(sort === 'phoneAsc' ? 'phoneDesc' : 'phoneAsc')} className={clsx("SlotFilter-phone", "SlotFilter-wrap")}>
              {sort === 'phoneAsc' || sort === 'phoneDesc' ? <SortIcon isUp={sort === 'phoneDesc'}  className={"SlotFilter-icon"} /> : null}
              <span>Phone</span>
            </div>
            <div onClick={() => setSort(sort === 'emailAsc' ? 'emailDesc' : 'emailAsc')} className={clsx("SlotFilter-email", "SlotFilter-wrap")}>
              {sort === 'emailAsc' || sort === 'emailDesc' ? <SortIcon isUp={sort === 'emailDesc'} className={"SlotFilter-icon"} /> : null}
              <span>Email</span>
            </div>
            <div onClick={() => setSort(sort === 'locAsc' ? 'locDesc' : 'locAsc')} className={clsx("SlotFilter-location", "SlotFilter-wrap")}>
              {sort === 'locAsc' || sort === 'locDesc' ? <SortIcon isUp={sort === 'locDesc'} className={"SlotFilter-icon"} /> : null}
              <span>Country</span>
            </div>
            <div onClick={() => setSort(sort === 'dateAsc' ? 'dateDesc' : 'dateAsc')} className={clsx("SlotFilter-registered", "SlotFilter-wrap")}>
              {sort === 'dateAsc' || sort === 'dateDesc' ? <SortIcon isUp={sort === 'dateDesc'} className={"SlotFilter-icon"} /> : null}
              <span>Date registered</span>
            </div>
        </div>
    );
}

SlotFilter.propTypes = {
  setSort: propTypes.func,
  sort: propTypes.string
}