import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {load,save} from "../redux/actions";
import {connect} from "react-redux";
import './Main.scss';


class Main extends React.PureComponent {
  	render() {

		return (
			<div className={"Main"}>
				<h2>Portfolio</h2>
				<img src={"../images/day.jpg"}/>
				<div>technologies and used:</div>
				<div>responsive for mobile / tablet / desktop</div>
				<div>react redux libraries</div>
				<div>request imate</div>
				<Fragment>
					<Filter>hello 3</Filter>
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