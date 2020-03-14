import React, { Component } from 'react';
import "./CurrentVideo.scss";
import LessonNav from '../LessonNav/LessonNav';
import axios from 'axios';
import playBtn from "../../assets/play-btn.svg"
import volumeBtn from "../../assets/volume-btn.svg"
import fullScreen from "../../assets/fullscreen.svg"

const API_URL = 'http://localhost:8080'

class CurrentVideo extends Component {

    constructor(props){
        super(props)
        this.state = {
            lessonsInfo : ""
        }
    }

    componentDidMount(){
       axios.get(`${API_URL}/course/current/laith/9539262480`)
        .then(response => {
            this.setState({
                lessonsInfo : response.data
            })

        }).catch (e => {
            console.log('Wrong')
        })
    }

    componentDidUpdate(prevProps){
        console.log('From update', this.props.currentVideoId)
        if(this.props.currentVideoId !== prevProps.currentVideoId){
            axios.get(`${API_URL}/course/current/laith/${this.props.currentVideoId}`)
                .then(response => {
                    this.setState({
                        lessonsInfo : response.data
                    })
                })
                .catch(e => {
                    console.log('Error')
                })
        }  
    }

    render() {
        return (
            <div className="CurrentVideo"> 
                <h2 className="CurrentVideo__heading">
                    {this.state.lessonsInfo && this.state.lessonsInfo[0].courseName}
                </h2>
                <div className="CurrentVideo__container">
                    <div className="CurrentVideo__total-container">
                        <div className="CurrentVideo__video-container">
                            <div className="CurrentVideo__video-nav">
                                <div className="CurrentVideo__video-nav-container">
                                     <img src={playBtn} alt="" className="CurrentVideo__icon"/>
                                     <div className="CurrentVideo__progress-bar">
                                        <div className="CurrentVideo__progress"/>
                                     </div>
                                     <img src={volumeBtn} className="CurrentVideo__icon" alt=""/>
                                     <img src={fullScreen} className="CurrentVideo__icon CurrentVideo__icon--full" alt=""/>
                                </div>
                            </div>
                            <img src={this.state.lessonsInfo && this.state.lessonsInfo[0].thumbnail}  alt="" className="CurrentVideo__video"/>
                        </div>
                        <div className="CurrentVideo__nav-container">
                            {this.state.lessonsInfo && <LessonNav lessonsInfo={this.state.lessonsInfo[0].courseMaterial}/>}
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default CurrentVideo;