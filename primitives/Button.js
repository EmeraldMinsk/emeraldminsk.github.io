import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Button.scss';




class Button extends React.PureComponent {
    
    // Documentation
    static propTypes = {
      addClass: PropTypes.string,
      title: PropTypes.string,
      cbClick: PropTypes.func,
    };
    state={
       
    }

    render(){
        const {addClass, title} = this.props;
        return (   
            <div className={clsx("Button", addClass)}>
                {title}
            </div>)
    }

}
export default Button;