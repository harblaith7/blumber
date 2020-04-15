import React, { Component } from 'react';
import './CourseTable.scss'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://localhost:8080'

class CourseTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            courseInfo : ""
        }
    }

    async componentDidMount(){
        const res = await axios.get(`/api/search/queens`)
        this.setState({
            courseInfo : res.data
        })
    }

    async componentDidUpdate(prevProps){
        if(prevProps.currentUni !== this.props.currentUni){
            const res = await axios.get(`/api/search/${this.props.currentUni}`)
            this.setState({
                courseInfo : res.data
            })
        }
    }

    displayCourseInfo = () => {

        this.state.courseInfo.sort((a, b) => {
            return a.courseDifficulty.gpaAverage - b.courseDifficulty.gpaAverage
        }).reverse()

        return this.state.courseInfo.map(course => {
            let image;
            let gpa = course.courseDifficulty.gpaAverage
            if(gpa > 3.9){
                image = "https://cdn0.iconfinder.com/data/icons/animals-123/500/SingleCartoonAnimalOneYulia_11-512.png"
            } else if (gpa < 3.9 && gpa >= 3.7){
                image = "https://img.icons8.com/plasticine/2x/pinguin.png"
            } else if (gpa < 3.7 && gpa >= 3.5) {
                image = "https://cdn.clipart.email/7427c8f808cce11caee187528f2bab38_eagle-transparent-png-clipart-gallery-yopriceville-high-_3407-1678.png"
            }  else if (gpa < 3.5 && gpa >= 3.0){
                image = "https://getdrawings.com/free-icon/wolf-icon-52.png"
            } else if (gpa < 3.0 && gpa >= 2.8){
                image = "https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22217-wolf-face-icon.png"
            } else {
                image = "https://image.flaticon.com/icons/png/512/141/141850.png"
            }
            return (
                <div className="CourseTable__course-info-container" key={uuidv4()}>
                    <h5 className="CourseTable__title CourseTable__title--info">
                        {course.courseName.split("-")[0]}
                    </h5>
                    <h5 className="CourseTable__title">
                        {course.courseDifficulty.enrollement}
                    </h5>
                    <div className="CourseTable__grades-container">
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty.aPlus}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty.A}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                             {course.courseDifficulty['A-']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty['B+']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty['B']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                             {course.courseDifficulty['B-']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                             {course.courseDifficulty['C+']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty['C']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty['C-']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty['D+']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty['D']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty['D-']}
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--grade CourseTable__title--grade-info">
                            {course.courseDifficulty['F']}
                        </h5>
                    </div>
                    <h5 className="CourseTable__title CourseTable__title--gpa">
                        {course.courseDifficulty.gpaAverage}
                    </h5>
                    <h5 className="CourseTable__title CourseTable__title--score">
                        <img className="CourseTable__score" src={image} alt=""/>
                    </h5>
                </div>
            )
        })
    }

    render() {
        console.log(this.state.courseInfo)
        return (
            <div className="CourseTable">
                <div className="CourseTable__container">
                    <div className="CourseTable__title-container">
                        <h5 className="CourseTable__title CourseTable__title--info">
                            Course
                        </h5>
                        <h5 className="CourseTable__title">
                            Enrollment
                        </h5>
                        <div className="CourseTable__grades-container">
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                A+
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                A
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                A-
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                B+
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                B
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                B-
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                C+
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                C
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                C-
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                D+
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                D
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                D-
                            </h5>
                            <h5 className="CourseTable__title CourseTable__title--grade">
                                F
                            </h5>
                        </div>
                        <h5 className="CourseTable__title CourseTable__title--gpa">
                            GPA
                        </h5>
                        <h5 className="CourseTable__title CourseTable__title--score">
                            Score
                        </h5>
                    </div>

                    <div className="CourseTable__courses-info-container">
                        {this.state.courseInfo && this.displayCourseInfo()}
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseTable;