import React, { Component } from 'react';
import './App.scss';
import SignInHomePage from './pages/SignInHomePage/SignInHomePage'
import LoggedInHomePage from './pages/LoggedInHomePage/LoggedInHomePage';
import CourseDescription from './pages/CourseDescription/CourseDescription'
import WolfAndBirdTracker from './pages/WolfAndBirdTracker/WolfAndBirdTracker'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'


class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/course/:courseId" component={CourseDescription}/>
            <Route exact path="/log" component={LoggedInHomePage}/>
            <Route exact path="/wolfandbird" component={WolfAndBirdTracker}/>
            <Route exact strict path="/" component={SignInHomePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

