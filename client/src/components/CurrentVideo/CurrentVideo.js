import React, { Component } from 'react';
import "./CurrentVideo.scss";
import LessonNav from '../LessonNav/LessonNav';
import axios from 'axios';


const API_URL = 'http://localhost:8080'

class CurrentVideo extends Component {

    

    constructor(props){
        super(props)
        this.state = {
            lessonsInfo : [
                {
                    mainInfo : {
                        title: "Section 1: Introduction",
                        courses: "0/4",
                        time: "33min"
                    },
                    sectionInfo: [
                        {
                            title: "About the instructor",
                            time: "9min"
                        },
                        {
                            title: "What we will be learning",
                            time: "12min"
                        },
                        {
                            title: "CHEM 112 overview",
                            time: "8min"
                        },
                        {
                            title: "How to get help",
                            time: "4min"
                        },
                    ]   
                },
                {
                    mainInfo : {
                        title: "Section 2: Chemistry Review",
                        courses: "0/6",
                        time: "1hour 47min"
                    },
                    sectionInfo: [
                        {
                            title: "The structure of the atom",
                            time: "16min"
                        },
                        {
                            title: "What we will be learning",
                            time: "12min"
                        },
                        {
                            title: "CHEM 112 overview",
                            time: "8min"
                        },
                        {
                            title: "How to get help",
                            time: "4min"
                        },
                        {
                            title: "CHEM 112 overview",
                            time: "8min"
                        },
                    ]   
                }
            ],
            testData : ""
        }
    }

    componentDidMount(){
       axios.get(`${API_URL}/laith/321`)
        .then(response => {
            this.setState = {
                testData : response.data
            }
        }).catch (e => {
            console.log('Wrong')
        })
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