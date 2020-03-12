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
       /* window.scrollTo({
            bottom: -500,
            behavior: 'smooth'
          }) */

          window.scrollTo(100, this.pageRef.current.offsetTop)
    }

    render() {
        return (
            <div className="LoggedInHomePage" ref={this.pageRef}>
                <LoggedInHeader/>
                <MyCourses transferCurrentId = {this.getCurrentVideo}/>
                <CurrentVideo currentVideoId = {this.state.currentCourseId}/>
            </div>
        );
    }
}

export default LoggedInHomePage;