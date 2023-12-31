import { COLORS_BY_THEME } from '../utils/constants.js';
import {
  range,
  normalize,
  convertPolarToCartesian,
} from '../utils/values.js';
import React from 'react';

function Circle({ index, colors }) {
  return (

    // ...

      <circle
      cx={100}
      cy={50}
      r={index * 7.5 + 5}
      stroke={
        colors.lineColors[
          index %
            colors.lineColors.length
        ]
      }
    />
  );
}

function PolygonVertex({ index, numOfPoints, colors }) {
  const pointDistance = index * 9 + 5;
  const angles = range(numOfPoints).map((index) =>
    normalize(index, 0, numOfPoints, 0, Math.PI * 2)
  );

  const points = angles.map((angle) => {
    const twistyAngle = angle + index * -0.15;
    const [x, y] = convertPolarToCartesian([twistyAngle, pointDistance]);
    
    return (
      <svg
        style={{ zIndex: 10 }}
        key={`${index}-${x}-${y}`}
        x={x + 98}
        y={y + 48}
        width="6"
        height="6"
        fill={colors.snowflake} version="1.1" id="Capa_1" viewBox="0 0 298 298" >
         <g>
        <path d="M256.842,144.247c-29.815,17.761-68.276,27.503-108.966,27.503c-40.691,0-79.153-9.742-108.968-27.503   c-3.857,11.492-5.95,23.794-5.95,36.586c0,5.763,0.43,11.425,1.248,16.96c2.854,2.192,5.879,4.318,9.082,6.367   c27.817,17.792,64.961,27.59,104.588,27.59c39.626,0,76.768-9.798,104.586-27.59c3.203-2.049,6.228-4.175,9.082-6.367   c0.818-5.535,1.248-11.197,1.248-16.96C262.792,168.041,260.699,155.739,256.842,144.247z M78.012,191.78   c-2.58,6.109-8.51,9.789-14.76,9.789c-2.07,0-4.17-0.409-6.2-1.26c-8.14-3.43-11.97-12.81-8.53-20.96   c3.431-8.14,12.811-11.96,20.95-8.53C77.622,174.25,81.441,183.63,78.012,191.78z M134.622,201.939   c-0.99,8.1-7.891,14.051-15.86,14.051c-0.65,0-1.3-0.04-1.96-0.12c-8.78-1.07-15.01-9.061-13.94-17.82   c1.07-8.78,9.051-15.02,17.83-13.94C129.462,185.18,135.702,193.16,134.622,201.939z M177.992,215.99   c-0.641,0.069-1.271,0.109-1.9,0.109c-8,0-14.91-5.99-15.87-14.12c-1.04-8.77,5.23-16.73,14.01-17.77   c8.771-1.04,16.73,5.229,17.771,14C193.042,206.99,186.771,214.95,177.992,215.99z M237.792,200.689   c-2.01,0.83-4.09,1.23-6.13,1.23c-6.27,0-12.23-3.72-14.78-9.87c-3.39-8.16,0.47-17.52,8.63-20.91c8.16-3.39,17.53,0.47,20.92,8.63   C249.822,187.93,245.952,197.3,237.792,200.689z"/>
        <path d="M40.182,221.005c16.292,43.654,58.36,74.745,107.694,74.745c49.333,0,91.4-31.091,107.692-74.745   c-29.632,17.282-67.582,26.745-107.692,26.745C107.765,247.75,69.813,238.287,40.182,221.005z"/>
        <path d="M155.542,31V0h-16v31h-25v5.94v16.141v17.653c-30,9.13-55.505,30.58-69.574,58.578   c27.604,17.06,64.066,26.438,102.824,26.438c38.758,0,75.01-9.378,102.614-26.438c-14.068-27.998-38.865-49.449-69.865-58.578   V53.081V36.94V31H155.542z"/>
      </g>
      </svg>
     
    );
  });
  return <>{points}</>;
}

function Polygon({ index, colors, numOfPoints=5 }) {
  const pointDistance = index * 9 + 5;
  const angles = range(numOfPoints).map((index) =>
    normalize(
      index,
      0,
      numOfPoints,
      0,
      Math.PI * 2
    )
  );

  const points = angles.map(angle => {
    const twistyAngle = angle + index * -0.15;
    const [x, y] = convertPolarToCartesian(
      [twistyAngle, pointDistance]
    );

    return [
      x + 100,
      y + 50
    ];
  }).join(' ')

  return (
    <>
      <polygon
        points={points}
        stroke={
          colors.lineColors[
            index % colors.lineColors.length
          ]
        }
      />
      <PolygonVertex index={index} numOfPoints={numOfPoints} colors={colors}/> 
    </>
  );
}

function GenerativeArt({
  numOfLines,
  numOfPoints,
  colorTheme,
  shape,
}) {
  const colors = COLORS_BY_THEME[colorTheme];

  return (
    <div
      className="art-wrapper"
      style={{
        background: colors.background,
        borderColor: colors.background,
      }}
    >
      <svg
        viewBox="0 0 200 100"
        fill="none"
      >
        {range(numOfLines).map(
          (index) => {
            const Shape = shape === 'circles'
              ? Circle
              : Polygon;

            return (
              <Shape
                key={index}
                index={index}
                colors={colors}
                numOfPoints={shape === 'circles' ? undefined : numOfPoints}
              />
            );
          }
        )}
      </svg>
    </div>
  );
}

export default GenerativeArt;