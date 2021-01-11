import React from 'react';
import {connect} from "react-redux";
import clsx from 'clsx';
import memoizeOne from 'memoize-one';
import propTypes from "prop-types";
import {isLightTheme} from "../../utils/utils"
import {Button} from '../primitives/Button';

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
		console.log('--+ isLight', isLight);
		return (
			<div className={"Main"} style={{backgroundImage: clsx(isLight ? "url('../../images/images/day.jpg')" : "url('../../images/images/night.jpg')")}}>
				<div className={clsx("Main-container", isLight ? "Main-day" : "Main-night")}>
					<div className={"Main-left"}>
						<div className={"Main-title"}>Portfolio</div>
						<div>technologies and solutions used:</div>
						<dl>
								<dd>TODO</dd>
								
								<dd>Цитаты по таймауту рандомно</dd>


								<dd>responsive design for mobile / tablet / desktop</dd>
								<dd>axios</dd>
								<dd>simulated slow internet connection (cover cases with slow connection)</dd>
								<dd>used local storage for user settings</dd>
								<dd>memoization</dd>
								<dd>Using Mocks (if connection issues)</dd>
								<dd>prop types</dd>
								<dd>sass preprocessor</dd>
								<dd>react-redux</dd>
								<dd>webpack</dd>
								<dd>react-router-dom</dd>
								<dd>React Components, React Hooks</dd>
								<dd>SVG icons</dd>
		
						</dl>
					</div>
					<div className={"Main-right"}>
						<Button
						 title={"REQUEST DATA"}
						 fill={isLight ? 'white' : 'black'}
						 nav={"/list"}
						 cbClick={()=>console.log('1')}
						/>
					</div>
				</div>
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
