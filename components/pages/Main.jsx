import React from 'react';
import {connect} from "react-redux";
import clsx from 'clsx';
import memoizeOne from 'memoize-one';
import propTypes from "prop-types";
import {isLightTheme} from "../../utils/utils"
import {Button} from '../primitives/Button';
import Quotes from '../primitives/Quotes';

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
			<div className={"Main"} style={{backgroundImage: clsx(isLight ? "url('../../images/images/day.jpg')" : "url('../../images/images/night.jpg')")}}>
				<div className={clsx("Main-container", isLight ? "Main-day" : "Main-night")}>
					<div className={"Main-left"}>
						<div className={"Main-title"}>Portfolio</div>
						<div className={"Main-subtitle"}>React Developer</div>
						<br/>
						<div>technologies and solutions used:</div>
						<br/>
						<dl>
								<dd>-) Responsive design for mobile / tablet / desktop</dd>
								<dd>-) Axios</dd>
								<dd>-) List virtualization</dd>
								<dd>-) Simulated slow internet connection</dd>
								<dd>-) Used local storage for user settings</dd>
								<dd>-) Memoization</dd>
								<dd>-) Using Mocks (if connection issues)</dd>
								<dd>-) Prop types</dd>
								<dd>-) Sass preprocessor</dd>
								<dd>-) React-redux</dd>
								<dd>-) Webpack</dd>
								<dd>-) React-router-dom</dd>
								<dd>-) React Components, React Hooks</dd>
								<dd>-) SVG icons</dd>
								<dd>-) Search / sort data</dd>
						</dl>
					</div>
					<div className={"Main-right"}>
						<Quotes timerMS={5000} />
						<Button
							addClass={"Main-requestBtn"}
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
