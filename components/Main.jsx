import React,{Fragment} from 'react';
import Button from '../primitives/Button';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {load,save} from "../redux/actions";
import {connect} from "react-redux";
import './Main.scss';


class Main extends React.PureComponent {
  	render() {

		return (
			<div className={"Main"}>
				<div className={"topMenu"}>
					<Button title="hello" cbClick={console.log} />
				</div>
				<h2>Portfolio</h2>
				<img src={"../images/day.jpg"}/>
				<h3>technologies and solutions used:</h3>
				<ul>
					<li>responsive design for mobile / tablet / desktop</li>
					<li>simulated slow internet connection</li>
					<li>used local storage for user settings</li>
					<li>memoization</li>
					<li>Using Mocks</li>
					<li>sass preprocessor</li>
					<li>react redux libraries</li>
					<li>webpack</li>
					<li>react-router-dom</li>
				</ul>
				
				
				
				<Fragment>
					<div><NavLink to="/users">users</NavLink></div>
				</Fragment>
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