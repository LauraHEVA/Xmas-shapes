import React from 'react';

const Form = ({numOfLines, setNumOfLines, colorTheme, setColorTheme, shape, setShape, numOfPoints, setNumOfPoints}) => {
    return (
      <form className='form-wrapper'>
        <div className="row">
          <div className="col">
            <label
              htmlFor="num-of-lines"
              className="control-heading"
            >
              Number of Lines:
            </label>
            <input
              id="num-of-lines"
              type="range"
              min="1"
              max="15"
              value={numOfLines}
              onChange={(event) => {
              setNumOfLines(parseInt(event.target.value));
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label
              className="control-heading"
              htmlFor="color-theme"
            >
              Color Theme:
            </label>
            <select
              id="color-theme"
              value={colorTheme}
              onChange={(event) => {
                setColorTheme(event.target.value);
              }}
            >
              <option value="basic">Basic</option>
              <option value="monochrome">
                Monochrome
              </option>
              <option value="froot-loops">
                Froot Loops
              </option>
              <option value="spooky">Spooky Night</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="control-heading">Shape:</div>
            <div className="radio-wrapper">
              <div className="radio-option">
                <input
                  type="radio"
                  name="shape"
                  value="circles"
                  checked={shape === 'circles'}
                  onChange={(event) => {
                    setShape(event.target.value);
                  }}
                />
              <label htmlFor="shape-circles">Circles</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  name="shape"
                  value="polygons"
                  checked={shape === 'polygons'}
                  onChange={(event) => {
                    setShape(event.target.value);
                  }}
                />
              <label htmlFor="shape-polygons ">Polygons</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label
              htmlFor="num-of-points"
              className="control-heading"
            >
              Number of Sides:
            </label>
            <input
              disabled={shape !== 'polygons'}
              id="num-of-points"
              type="range"
              min="3"
              max="8"
              value={numOfPoints}
              onChange={(event) => {
              setNumOfPoints(parseInt(event.target.value));
              }}
            />
          </div>
        </div>
      </form>
    );
}

export default Form;