import React, { Component } from 'react';
import './LoggedInHomePage.scss'
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import MyCourses from '../../components/MyCourses/MyCourses'

class LoggedInHomePage extends Component {
    render() {
        return (
            <div className="LoggedInHomePage">
                <LoggedInHeader/>
                <MyCourses/>
                <CurrentVideo/>
            </div>
        );
    }
}

export default LoggedInHomePage;