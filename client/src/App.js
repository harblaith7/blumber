import React, { Component } from 'react';
import './App.scss';
import SignInHomePage from './pages/SignInHomePage/SignInHomePage'
import LoggedInHomePage from './pages/LoggedInHomePage/LoggedInHomePage';
import CourseDescription from './pages/CourseDescription/CourseDescription'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
import axios from 'axios'

class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
    axios.get("http://localhost:8080/api/current_user")
      .then(response => {
        console.log(response)
      })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/course/:courseId" component={CourseDescription}/>
            <Route exact path="/log" component={LoggedInHomePage}/>
            <Route exact strict path="/" component={SignInHomePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

