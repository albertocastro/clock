import React from 'react';
import './Digit.css';

const Digit = ({children}) => (
  <div className="Digit">
    {
      (children <10) &&`0${children}`
      
    }
    {
      (children > 10 ) && children
    }
  </div>
);

Digit.propTypes = {};

Digit.defaultProps = {};

export default Digit;
