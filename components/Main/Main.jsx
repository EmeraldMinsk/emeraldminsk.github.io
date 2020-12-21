import React,{Fragment} from 'react';
import Button from '../../primitives/Button';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {load,save} from "../../redux/actions";
import {connect} from "react-redux";
import memoizeOne from 'memoize-one';

import './Main.scss';


class Main extends React.PureComponent {
  	render() {

		return (
			<div className={"Main"} style={{backgroundImage: "url('../../images/day.jpg')"}}>
				
				<Button title />
				<div>Portfolio</div>
		
				<h3>technologies and solutions used:</h3>
				<ul>
					<li>responsive design for mobile / tablet / desktop</li>
					<li>html request</li>
					<li>simulated slow internet connection (cover cases with slow connection)</li>
					<li>used local storage for user settings</li>
					<li>memoization</li>
					<li>Using Mocks (if connection issues)</li>
					<li>prop types as documentation</li>
					<li>sass preprocessor</li>
					<li>react redux libraries</li>
					<li>webpack</li>
					<li>react-router-dom</li>
					<li>React Component and React Hook realization</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
					<li>--------</li>
				</ul>
			
			</div>
		);

  	}

}



export default connect((state) => ({
	reducer: state.reducer
}),
(dispatch)=>{
	return{
		load: () => dispatch(load()),
		save: (e) => dispatch(save(e))
	}
})(Main);