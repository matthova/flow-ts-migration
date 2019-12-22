// @flow

import React, { type Node } from 'react';
import logo from './logo.svg';
import './App.css';
import { OtherFile } from './ts-folder/OtherFile';

const numberToString = (input: number): string => {
  return String(input);
}

function App(): Node {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{numberToString(5)}</p>
        <OtherFile />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
