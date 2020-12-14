import React from 'react';
import './Filter.scss';




class Filter extends React.PureComponent {

    state={
       
    }

    render(){
        return (   
            <div className="FilterBlock">
                {this.props.children}
            </div>)
    }

}
export default Filter;