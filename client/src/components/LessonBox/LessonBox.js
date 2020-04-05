import React, { Component } from 'react';
import './LessonBox.scss';
import { v4 as uuidv4 } from 'uuid';
import Checkout from '../Checkbox/Checkbox'

class LessonBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen : false
        }
    }

    toggleLessons = () => {
        this.setState({
            isOpen : !this.state.isOpen,
        })
    }

    displayLessons = () => {
        return this.props.lessonInfo.sectionInfo.map(videoSection => {
            return (
                <div className="LessonBox__lesson-container" key={uuidv4()}>
                    <Checkout/>
                    <h5 className="LessonBox__lesson-title">
                        {videoSection.title}
                    </h5>
                    <h6 className="LessonBox__lesson-time">
                        {videoSection.time}
                    </h6>
                </div>
            )
        })
    }

    render() {
        return (
            <>
                <div className="LessonBox__toggle" onClick={this.toggleLessons}>
                    <h4 className="LessonBox__title">
                        {this.props.lessonInfo && this.props.lessonInfo.mainInfo.title}
                    </h4>
                    <div className="LessonBox__section-info">
                        <p className="LessonBox__info">
                            {this.props.lessonInfo && this.props.lessonInfo.mainInfo.courses}
                        </p>
                        <p className="LessonBox__info">
                            {this.props.lessonInfo && this.props.lessonInfo.mainInfo.time}
                        </p>
                    </div>
                    
                </div>

                <div className={`LessonBox__lessons-container ${this.state.isOpen && "LessonBox__lessons-container--active"}`} >
                    {this.props.lessonInfo && this.displayLessons()}
                </div>
            </> 
        );
    }
}

export default LessonBox;