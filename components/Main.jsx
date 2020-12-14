import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import axios from "axios";
import { NavLink } from 'react-router-dom';

class Main extends React.PureComponent {
  	render() {

		return (
			<div className={"Block_Filter"}>
				<Fragment>
					<Filter>hello 3</Filter>
					<div><NavLink to="/users">users</NavLink></div>
				</Fragment>
			</div>
		);

  	}

}



export default Main;
