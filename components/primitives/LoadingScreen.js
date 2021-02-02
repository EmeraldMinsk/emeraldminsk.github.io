import React from 'react';
import {SvgSpinner} from '../../images/svg/SvgSpinner'

import './LoadingScreen.scss';

export const LoadingScreen = () => {
    return (
      <div className="LoadingScreen">
        <SvgSpinner/>
      </div>
    );
}
