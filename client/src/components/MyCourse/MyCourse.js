import React, { Component } from 'react';

class MyCourse extends Component {
    render() {
        return (
            <div className="MyCourses" key={course.courseId} id={course.courseId} onClick={this.transferId} ref={this.courseRef}>
                <img src={course.thumbnail} alt="" className="MyCourse__card-img"/>
                <div className="MyCourse__info-container">
                    <h4 className="MyCourse__card-title">{course.courseName}</h4>
                    <p className="MyCourse__instructor">{course.courseInfo.courseAuthor}</p>
                    <div className="MyCourse__progress-bar-container" >
                        <LinearProgressBar percentage={course.courseInfo.coursePercentage}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCourse;