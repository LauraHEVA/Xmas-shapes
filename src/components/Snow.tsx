import React from 'react';
import SnowSvg from './SnowSvg.tsx';

const Snow = ({ reverse = false }) => {
  const green = '#557A46';
  const red = '#B80000';
  const [state, setState] = React.useState({ color: red });

  const changeColor = () => {
    const newColor = state.color === green ? red : green;
    setState({ color: newColor });
  };

  return (
    <div className="snow-wrapper" onClick={changeColor}>
      <SnowSvg reverse={reverse} fillColor={state.color}/>
    </div>
    );
  };

export default Snow;