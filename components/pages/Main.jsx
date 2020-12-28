import React,{Fragment} from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {load,save} from "../../redux/actions";
import {connect} from "react-redux";
import memoizeOne from 'memoize-one';

import './Main.scss';


class Main extends React.PureComponent {
  	render() {

		return (
			<div className={"Main"} style={{backgroundImage: "url('../../images/images/day.jpg')"}}>
				
				<div>Portfolio</div>
		
				<h3>technologies and solutions used:</h3>
				<ul>

					<li>TODO</li>
					<li> </li>
					<li>Цитаты по таймауту рандомно</li>


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
					<li>React Components, React Hooks</li>
					<li>SVG icons (на кнопках)</li>
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
		load: () => dispatch(setTheme())
	}
})(Main);