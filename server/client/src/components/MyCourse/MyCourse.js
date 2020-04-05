import React, { Component } from 'react';
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar"
import './MyCourse.scss'


class MyCourse extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
        this.courseRef = React.createRef()
    }

    transferId = () => {
        //this.props.transferCurrentId(this.courseRef.current.id)
        this.props.transferCurrentId(this.courseRef.current.id)
    }

    render() {
        return (
            <div className="MyCourse" id={this.props.course.courseId} onClick={this.transferId} ref={this.courseRef}>
                <img src={this.props.course.thumbnail} alt="" className="MyCourse__card-img"/>
                <div className="MyCourse__info-container">
                    <h4 className="MyCourse__card-title">{this.props.course.courseName}</h4>
                    <p className="MyCourse__instructor">{this.props.course.courseInfo.courseAuthor}</p>
                    <div className="MyCourse__progress-bar-container" >
                        <LinearProgressBar percentage={this.props.course.courseInfo.coursePercentage}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCourse;