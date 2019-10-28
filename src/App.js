import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ExampleComponent from './components/ExampleComponent/ExampleComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExampleComponent />
      </div>
    );
  }
}

export default App;
