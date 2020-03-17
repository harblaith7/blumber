import React, { Component } from 'react';
import './LessonNav.scss';
import LessonBox from '../LessonBox/LessonBox'
import { v4 as uuidv4 } from 'uuid';


class LessonNav extends Component {

    displayLessonBox = () => {
        return this.props.lessonsInfo.map(lesson => {
            return <LessonBox lessonInfo = {lesson} key={uuidv4()} />
        })
    }

    render() {
        return (
            <div className="LessonNav">
                {this.displayLessonBox()}   
            </div>
        );
    }
}

export default LessonNav;