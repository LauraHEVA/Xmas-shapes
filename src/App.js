import './App.css';
import Form from './components/Form.tsx';
import Header from './components/Header.tsx';
import GenerativeArt from './components/GenerativeArt.tsx';
import React from 'react';

function App() {
  const [numOfLines, setNumOfLines] = React.useState(5);
  const [colorTheme, setColorTheme] =
  React.useState('christmas');
  const [shape, setShape] = React.useState('circles');
  const [numOfPoints, setNumOfPoints] = React.useState(3);
  return (
    <div className="App">
      <Header/>
      <GenerativeArt
        numOfLines={numOfLines}
        numOfPoints={numOfPoints}
        colorTheme={colorTheme}
        shape={shape}
      />
      <Form 
        numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape} 
        numOfPoints={numOfPoints}
        setNumOfLines={setNumOfLines} 
        setColorTheme={setColorTheme} 
        setShape={setShape}
        setNumOfPoints={setNumOfPoints}
        />
    </div>
  );
}

export default App;
