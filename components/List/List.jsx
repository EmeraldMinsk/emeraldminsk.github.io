import React,{Fragment} from 'react';
import Button from '../../primitives/Button';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {load,save} from "../../redux/actions";
import {connect} from "react-redux";
import memoizeOne from 'memoize-one';

// import './Nav.scss';


class List extends React.PureComponent {
  	render() {

		return (
			<div className={"List"}>
				
			</div>
		);

  	}

}



export default List