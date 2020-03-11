import React, { Component } from 'react';
import "./CurrentVideo.scss";
import LessonNav from '../LessonNav/LessonNav';
import axios from 'axios';


const API_URL = 'http://localhost:8080'

class CurrentVideo extends Component {

    constructor(props){
        super(props)
        this.state = {
            lessonsInfo : ""
        }
    }

    componentDidMount(){
       axios.get(`${API_URL}/course/laith/9539262480`)
        .then(response => {

            this.setState({
                lessonsInfo : response.data
            })

        }).catch (e => {
            console.log('Wrong')
        })
    }

    render() {
        return (
            <div className="CurrentVideo">
                <h2 className="CurrentVideo__header">
                    {this.state.lessonsInfo && this.state.lessonsInfo[0].courseName}
                </h2>
                <div className="CurrentVideo__container">
                    <div className="CurrentVideo__video-container">
                        <div className="CurrentVideo__video">
                            hi
                        </div>
                        {this.state.lessonsInfo && <LessonNav lessonsInfo={this.state.lessonsInfo[0].courseMaterial}/>}
                    </div>
                </div>
            </div>
        
            );
    }
}

export default CurrentVideo;