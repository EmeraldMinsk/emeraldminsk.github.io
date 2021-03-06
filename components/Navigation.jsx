import React from 'react';
import {Button} from './primitives/Button';
import {Modal} from './primitives/Modal';
import clsx from 'clsx';
import {setSlowInternet} from "../redux/actions";
import propTypes from "prop-types";
import {useSelector, useDispatch} from 'react-redux';
import {setTheme, setInitialTheme, isLightTheme} from '../utils/utils'
import './Navigation.scss';
import {SvgBrush} from '../images/svg/SvgBrush'
import {SvgInternet} from '../images/svg/SvgInternet'
import {SvgList} from '../images/svg/SvgList'

export const Navigation = ({history, children}) => {
  const dispatch = useDispatch();
  const [currentPath, setCurrentPath] = React.useState('/');
  const theme = useSelector(state => state.main.theme)
  const modal = useSelector(state => state.main.modalData)
  const isSlowInternet = useSelector(state => state.main.isSlowInternet)
  const reduxTheme = useSelector(state => state.main.theme)
  const MEMOisLightTheme = React.useMemo(() => {
      return isLightTheme(reduxTheme);
  }, [reduxTheme]);
  React.useEffect(() => {
    setInitialTheme();

    setCurrentPath(history().location.pathname);
  }, []);

  React.useEffect(() => {
    setCurrentPath(history().location.pathname);
  }, [history]);

  const setPath = (e) => {
    setCurrentPath(e);
  }
  const links = [
    {path: "/", title: "main"},
    {path: "/list", title: "list"}
  ];

  return (
    <div className={"Navigation"}>
      {/* Modal */}
      {modal ? <Modal data={modal} /> : null}
      <div
        className={clsx("Navigation-topMenu", MEMOisLightTheme ? 'Navigation-LightTheme' : 'Navigation-DarkTheme')}
        style={{backgroundImage: clsx(MEMOisLightTheme ? "url('../images/images/txDay.jpg')" : "url('../images/images/txNight.jpg')")}}
      >
        <img className={clsx("Navigation-logo", MEMOisLightTheme ? "Navigation-logoLight" : "Navigation-logoDark") } src={MEMOisLightTheme ? "../images/images/logoDay.png" : "../images/images/logoNight.png"} />
        <div className={"Navigation-buttons"}>
          {links.map(it => (<Button icon={<SvgList className={"Navigation-svgIcon "} fill={MEMOisLightTheme ? 'black' : 'white' } />} key={it.path} nav={it.path} cbClick={() => setPath(it.path)} title={it.title} />))}
          <Button icon={<SvgInternet className={"Navigation-svgIcon"} fill={MEMOisLightTheme ? 'black' : 'white' } />} cbClick={() => dispatch(setSlowInternet(!isSlowInternet))} title={`slow internet: ${isSlowInternet?'on':'off'}`} />
          <Button icon={<SvgBrush className={"Navigation-svgIcon"} fill={MEMOisLightTheme ? 'black' : 'white' } />} cbClick={setTheme} title={`${theme} theme`} />
        </div>
      </div>
      <div className={"Navigation-content"}>{children}</div>
      <div
        className={clsx("Navigation-bottomBlock", MEMOisLightTheme ? 'Navigation-LightTheme' : 'Navigation-DarkTheme')}
        style={{backgroundImage: clsx(MEMOisLightTheme ? "url('../images/images/txDay.jpg')" : "url('../images/images/txNight.jpg')")}}
      >2020 (c)</div>
    </div>
  );
}

Navigation.propTypes = {
  history: propTypes.func
}



