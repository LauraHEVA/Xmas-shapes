import logo from '../logo.svg';
import React from 'react';

const Snow = ({reverse=false, hidden=false}) => {
  return (
    <div className="snow-wrapper" hidden={hidden}>
    <img src={logo} className={`App-logo${reverse ? "-reverse" : ""}`} alt="logo" />
    </div>
  )
}

export default Snow;