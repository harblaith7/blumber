import React, { Component } from 'react';
import './CourseDisplay.scss'
import InnerNav from '../InnerNav/InnerNav'
import CourseList from '../CourseList/CourseList'

class CourseDisplay extends Component {
    render() {
        return (
            <div className="CourseDisplay">
                <div className="CourseDisplay__container">
                    <div className="CourseDisplay__heading-container">
                        <h2 className="CourseDisplay__heading">
                            The Largest Selection of Online Courses to Help Supplement your University Classes
                        </h2>
                        <p className="CourseDisplay__description">
                            Blumber has over 500 specifically tailored courses ranging in all subjects for over 8 Canadian universities
                        </p>
                    </div>
                    <div className="CourseDisplay__course-display-container">
                        <InnerNav/>
                        <CourseList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDisplay;