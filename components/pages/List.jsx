import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import {Search} from '../primitives/Search';
import {SlotFilter} from '../primitives/SlotFilter';
import {Slot} from '../primitives/Slot';
import {LoadingScreen} from '../primitives/LoadingScreen';
import {useSelector, useDispatch} from 'react-redux';
import {isLightTheme} from '../../utils/utils';
import {loadData} from "../../redux/actions";
import VirtualList from 'react-tiny-virtual-list'; 
import ReactResizeDetector from 'react-resize-detector';


import './List.scss';


export const List = ({addClass, timer}) => {
    const reduxTheme = useSelector(state => state.main.theme)
    const MEMOisLightTheme = React.useMemo(() => {
        return isLightTheme(reduxTheme);
    }, [reduxTheme]);

    const dispatch = useDispatch();

    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    const data = useSelector((state) => state.main.data);
    const dataLoading = useSelector((state) => state.main.dataLoading);
    const dataLoaded = useSelector((state) => state.main.dataLoaded);

    // search
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState('nameAsc'); // nameAsc / nameDesc | phoneAsc / phoneDesc | emailAsc / emailDesc | locAsc / locDesc | dateAsc / dateDesc

    React.useEffect(() => {
        dispatch(loadData());
    }, []);

    const memoData = React.useMemo(() => {
        const sorted = data;
        // Sort
        if(sort === 'nameAsc'){
            sorted.sort((a1, b1) => {
                const a = `${a1.name.first} ${a1.name.last}`.toLowerCase();
                const b = `${b1.name.first} ${b1.name.last}`.toLowerCase();
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'nameDesc'){
            sorted.sort((b1, a1) => {
                const a = `${a1.name.first} ${a1.name.last}`.toLowerCase();
                const b = `${b1.name.first} ${b1.name.last}`.toLowerCase();
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'phoneAsc'){
            sorted.sort((a1, b1) => {
                const a = a1.phone.replace(/[^0-9]/g,'');
                const b = b1.phone.replace(/[^0-9]/g,'');
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'phoneDesc'){
            sorted.sort((b1, a1) => {
                const a = a1.phone.replace(/[^0-9]/g,'');
                const b = b1.phone.replace(/[^0-9]/g,'');
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'emailAsc'){
            sorted.sort((a1, b1) => {
                const a = a1.email.toLowerCase();
                const b = b1.email.toLowerCase();
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'emailDesc'){
            sorted.sort((b1, a1) => {
                const a = a1.email.toLowerCase();
                const b = b1.email.toLowerCase();
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'locAsc'){
            sorted.sort((a1, b1) => {
                const a = a1.location.country.toLowerCase();
                const b = b1.location.country.toLowerCase();
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'locDesc'){
            sorted.sort((b1, a1) => {
                const a = a1.location.country.toLowerCase();
                const b = b1.location.country.toLowerCase();
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'dateAsc'){
            sorted.sort((a1, b1) => {
                const a = a1.registered.date;
                const b = b1.registered.date;
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        else if (sort === 'dateDesc'){
            sorted.sort((b1, a1) => {
                const a = a1.registered.date;
                const b = b1.registered.date;
                return a > b ? 1 : b > a ? -1 : 0;
            });
        }
        // Search
        return sorted.filter(it => {
            const name = `${it.name.first} ${it.name.last}`;
            if (name.toLowerCase().includes(search.toLowerCase())) {
                return true
            }
            return false;
        });
    }, [data, sort, search]);

    const renderData = () => {
        return <VirtualList
            width={width}
            height={height - 140}
            itemCount={memoData.length}
            itemSize={30}
            style={{}}
            renderItem={({ index, style }) => {
                return <Slot style={style} data={memoData[index]} key={memoData[index].cell} />
                }
            }
        />
    }

    return (
        <div className={clsx("List", addClass, MEMOisLightTheme ? 'List-darkTheme' : 'List-lightTheme')} style={{backgroundImage: clsx(MEMOisLightTheme ? "url('../../images/images/day.jpg')" : "url('../../images/images/night.jpg')")}}>
            {dataLoading ? <LoadingScreen /> : null}
            {dataLoaded && data.length ? 
                <div className={'List-container'}>
                    <div style={{height: '100px'}}>
                        <Search value={search} onChange={setSearch} />
                    </div>
                    <div style={{height: '40px'}}>
                        <SlotFilter setSort={setSort} sort={sort} />
                    </div>
                    <div className={'List-content'}>{renderData()}</div>
                    <ReactResizeDetector handleWidth handleHeight onResize={(w,h) => {
                        setWidth(w);
                        setHeight(h);
                    }} />
                </div> : null}
            
        </div>
    );
}

List.propTypes = {
    addClass: propTypes.string,
    timer: propTypes.number
}