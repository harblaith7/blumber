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
        this.pageRef = React.createRef()  
    }

    getCurrentVideo = (id) => {
        console.log('Inside LoggedInHomePage: ', id)
        this.setState({
            currentCourseId : id
        })
    }

    componentDidUpdate(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }

    render() {
        return (
            <div className="LoggedInHomePage" ref={this.pageRef}>
                <CurrentVideo currentVideoId = {this.state.currentCourseId}/>
                <MyCourses transferCurrentId = {this.getCurrentVideo}/>
                
            </div>
        );
    }
}

export default LoggedInHomePage;