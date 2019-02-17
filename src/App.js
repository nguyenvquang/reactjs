import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComp from "./TableComp";

class App extends Component {
  render() {
    const data = [
        {id: 'MA01', name: 'Quang'},
        {id: 'MA02', name: 'Ha'},
        {id: 'MA03', name: 'Manh'}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <TableComp title={["Ma", "Ho ten"]} data={data}/>
      </div>
    );
  }
}

export default App;
