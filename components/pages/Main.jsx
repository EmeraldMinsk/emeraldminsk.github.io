import React,{Fragment} from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import clsx from 'clsx';
import memoizeOne from 'memoize-one';
import {load,save} from "../../redux/actions";
import propTypes from "prop-types";
import {isLightTheme} from "../../utils/utils"

import './Main.scss';

class Main extends React.PureComponent {
	static propTypes = {
    reduxTheme: propTypes.string
	}
	MEMOisLightTheme = memoizeOne((theme)=>{
		return isLightTheme(theme);
	});
	render() {
		const {reduxTheme} = this.props;
		const isLight = this.MEMOisLightTheme(reduxTheme);
		return (
			<div className={clsx("Main", isLight ? "Main-day" : "Main-nigth")} style={{backgroundImage: clsx(isLight ? "url('../../images/images/day.jpg')" : "url('../../images/images/night.jpg')")}}>
				<div>Portfolio</div>
		
				<h3>technologies and solutions used:</h3>
				<ul>
					
					<li>TODO</li>
					
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
	reduxTheme: state.main.theme
}),
(dispatch)=>{
	return{
		load: () => dispatch(setTheme())
	}
})(Main);
