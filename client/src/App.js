import React, { Component } from 'react';
import './App.scss';
import SignInHomePage from './pages/SignInHomePage/SignInHomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignInHomePage/>
      </div>
    );
  }
}

export default App;

