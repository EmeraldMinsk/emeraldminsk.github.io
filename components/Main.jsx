import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import axios from "axios";

class Main extends React.PureComponent {
  	render() {

		return (
			<div className={"Block_Filter"}>
				<Fragment>
					<Filter>hello 2</Filter>
				</Fragment>
			</div>
		);

  	}

}



export default Main;
