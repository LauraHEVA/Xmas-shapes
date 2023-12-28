import './App.css';
import Form from './components/Form.tsx';
import Header from './components/Header.tsx';
import GenerativeArt from './components/GenerativeArt.tsx';
import React from 'react';

function App() {
  const [numOfLines, setNumOfLines] = React.useState(5);
  const [colorTheme, setColorTheme] =
    React.useState('basic');
  const [shape, setShape] = React.useState('circles');
  return (
    <div className="App">
      <Header/>
      <GenerativeArt
        numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape}
      />
      <Form numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape} 
        setNumOfLines={setNumOfLines} 
        setColorTheme={setColorTheme} 
        setShape={setShape}/>
    </div>
  );
}

export default App;
