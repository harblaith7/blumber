import React, { Component } from 'react';
import './App.scss';
import SignInHomePage from './pages/SignInHomePage/SignInHomePage'
import LoggedInHomePage from './pages/LoggedInHomePage/LoggedInHomePage';
import CourseDescription from './pages/CourseDescription/CourseDescription'
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/course/:description" component={CourseDescription}/>
          <Route path="/log" component={LoggedInHomePage}/>
          <Route exact strict path="/" component={SignInHomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;

