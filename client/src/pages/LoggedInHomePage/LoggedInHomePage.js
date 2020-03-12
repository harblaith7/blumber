import React, { Component } from 'react';
import './LoggedInHomePage.scss'
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import MyCourses from '../../components/MyCourses/MyCourses'

class LoggedInHomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentCourseId : null
        }
    }

    getCurrentVideo = (id) => {
        this.setState({
            currentCourseId : id
        })
    }

    render() {
        return (
            <div className="LoggedInHomePage">
                <LoggedInHeader/>
                <MyCourses transferCurrentId = {this.getCurrentVideo}/>
                <CurrentVideo currentVideoId = {this.state.currentCourseId}/>
            </div>
        );
    }
}

export default LoggedInHomePage;