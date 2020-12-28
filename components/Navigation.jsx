import React,{Fragment} from 'react';
import {Button} from './primitives/Button';
import axios from "axios";

import {setSlowInternet} from "../redux/actions";
import {connect} from "react-redux";
import memoizeOne from 'memoize-one';
import propTypes from "prop-types";
import {useSelector, useDispatch} from 'react-redux';
import {setTheme, setInitialTheme} from '../utils/utils'
import './Navigation.scss';


export const Navigation = ({history, children}) => {
  const dispatch = useDispatch()
  const [currentPath, setCurrentPath] = React.useState('/');
  const theme = useSelector(state => state.main.theme)
  const isSlowInternet = useSelector(state => state.main.isSlowInternet)

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
    {path: "/list", title: "list"},
    {path: "/", title: "main"}
  ];
  return (
    <div className={"Navigation"}>
      <div className={"topMenu"}>
        {links.map(it => (<Button key={it.path} nav={it.path} cbClick={() => setPath(it.path)} title={it.title} />))}

        <Button cbClick={() => dispatch(setSlowInternet(!isSlowInternet))} title={`slow internet: ${isSlowInternet?'on':'off'}`} />
        <Button cbClick={setTheme} title={`${theme} theme`} />
      </div>
      <div className={"content"}>{children}</div>
      
    </div>
  );
}

Navigation.propTypes = {
  history: propTypes.func
}
