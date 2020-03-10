import React, { Component } from 'react';
import './LoggedInHomePage.scss'
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo'

class LoggedInHomePage extends Component {
    render() {
        return (
            <div className="LoggedInHomePage">
                <LoggedInHeader/>
                <CurrentVideo/>
            </div>
        );
    }
}

export default LoggedInHomePage;