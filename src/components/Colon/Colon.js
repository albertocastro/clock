import React from 'react';
import PropTypes from 'prop-types';
import './Colon.css';

const Colon = ({active}) => (
  <div className={`Colon ${(active && 'active')}`}>
    :

  </div>
);

Colon.propTypes = {};

Colon.defaultProps = {};

export default Colon;
