import React, { Component } from 'react';
import "./MyCourses.scss";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar"
import axios from 'axios'

const API_URL = 'http://localhost:8080'

class MyCourses extends Component {

    constructor(props){
        super(props)
        this.state = {
            myCourses : ""
        }
        this.courseRef = React.createRef()
    }

    componentDidMount(){
        axios.get(`${API_URL}/course/purchased`)
            .then(response => {
                this.setState({
                    myCourses : response.data
                }, () => {
                    console.log(this.state.myCourses[0].thumbnail)
                    console.log(this.state.myCourses[0].courseName)
                    console.log(this.state.myCourses[0].courseInfo.courseAuthor)
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    transferId = () => {
        this.props.transferCurrentId(this.courseRef.current.id)
        console.log('Inside MyCourses: ', this.courseRef.current.id)
    }

    displayUsersCourses = () => {
        return this.state.myCourses.map(course => {
            return (
                <div className="MyCourses__course-card" key={course.courseId} id={course.courseId} onClick={this.transferId} ref={this.courseRef}>
                    <img src={course.thumbnail} alt="" className="MyCourses__card-img"/>
                    <div className="MyCourses__info-container">
                        <h4 className="MyCourses__card-title">{course.courseName}</h4>
                        <p className="MyCourses__instructor">{course.courseInfo.courseAuthor}</p>
                        <div className="MyCourses__progress-bar-container" >
                            <LinearProgressBar percentage={course.courseInfo.coursePercentage}/>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="MyCourses">
                <div className="MyCourses__container">
                    <h3 className="MyCourses__heading">
                        My Courses
                    </h3>
                    <div className="MyCourses__courses-container">
                        {this.state.myCourses && this.displayUsersCourses()}
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCourses;