import React from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';
import {connect} from "react-redux";
import memoizeOne from 'memoize-one';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {isLightTheme, randomNoPrevValue} from '../../utils/utils';

import './Quotes.scss';

class Quotes extends React.PureComponent {
	static propTypes = {
    addClass: propTypes.string,
    timerMS: propTypes.number,
    reduxTheme: propTypes.string
  }
  state = {
    numb: 0
  }

  componentDidMount(){
    this.timer = setInterval(() => {
        randomNoPrevValue(0, this.quotes.length-1, this.state.numb, e => this.setState({numb: e}));
      }, this.props.timerMS);
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

  timer = null
	MEMOisLightTheme = memoizeOne((theme)=>{
		return isLightTheme(theme);
  });

  quotes = [
    '“The purpose of our lives is to be happy.”',
    '“Life is what happens when you’re busy making other plans.”',
    '“Get busy living or get busy dying.”'
  ];

	render() {
		const {addClass, reduxTheme} = this.props;
		const {numb} = this.state;
    const isLight = this.MEMOisLightTheme(reduxTheme);

    return (
			<div className={clsx("Quotes", addClass, isLight ? 'Quotes-darkTheme' : 'Quotes-lightTheme')}>
          {this.quotes[numb]}
        </div>
    )
  }
}

export default connect((state) => ({
	reduxTheme: state.main.theme
}))(Quotes);
