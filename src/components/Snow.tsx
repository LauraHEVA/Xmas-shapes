import React from 'react';
import SnowSvg from './SnowSvg.tsx';

const Snow = ({ reverse = false }) => {
  const green = '#4f772d';
  const white = '#e0e1dd';
  const [state, setState] = React.useState({ color: white });

  const changeColor = () => {
    const newColor = state.color === green ? white : green;
    setState({ color: newColor });
  };

  return (
    <div className="snow-wrapper" onClick={changeColor}>
      <SnowSvg reverse={reverse} fillColor={state.color}/>
    </div>
    );
  };

export default Snow;