import React,{Fragment} from 'react';
import Button from '../primitives/Button';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {load,save} from "../redux/actions";
import {connect} from "react-redux";
import memoizeOne from 'memoize-one';

import './Nav.scss';


class Nav extends React.PureComponent {
    state={
      currentPath: '/'
    }
    componentDidMount(){
      this.setState({currentPath: this.props.history().location.pathname});
    }
    setPath = (e) => {
      this.setState({currentPath: e});
    }
    links = [
      {path: "/list", title: "list"},
      {path: "/", title: "main"}
    ];
  	render() {

      return (
        <div className={"Nav"}>
          <div className={"topMenu"}>
            {this.links.map(it => (<NavLink key={it.path} onClick={() => this.setPath(it.path)} to={it.path}>{it.title}</NavLink>))}
            <div>slow internet</div>
            <div>dark light theme</div>
          </div>
          {this.props.children}
        </div>
      );

  	}

}



export default Nav