import React, { Component } from 'react';
import './LessonNav.scss';
import LessonBox from '../LessonBox/LessonBox'


class LessonNav extends Component {

    displayLessonBox = () => {
        return this.props.lessonsInfo.map(lesson => {
            return <LessonBox lessonInfo = {lesson}/>
        })
    }

    render() {
        return (
            <div className="LessonNav__lesson-navigation-container">
                <div className="LessonNav__toggle-container"> 
                    {this.displayLessonBox()}          
                </div>
            </div>
        );
    }
}

export default LessonNav;