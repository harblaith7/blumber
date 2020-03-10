import React, { Component } from 'react';
import "./CurrentVideo.scss";
import LessonNav from '../LessonNav/LessonNav'

class CurrentVideo extends Component {

    constructor(props){
        super(props)
        this.state = {
            lessonsInfo : [
                {
                    mainInfo : {
                        title: "Section 1: Introduction",
                        courses: "0/6",
                        time: "33min"
                    },
                    sectionInfo: [
                        {
                            title: "About the instructor",
                            time: "9min"
                        }
                    ]   
                }
            ]
        }
    }

    render() {
        return (
            <div className="CurrentVideo">
                <div className="CurrentVideo__container">
                    <div className="CurrentVideo__video-container">
                        <div className="CurrentVideo__video">
                            hi
                        </div>
                        <LessonNav lessonsInfo={this.state.lessonsInfo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentVideo;