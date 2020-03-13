import React, { Component } from 'react';
import './CourseList.scss';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

const API_URL = 'http://localhost:8080'

class CourseList extends Component {

    constructor(props){
        super(props)
        this.state = {
            courseList : []
        }
    }

    componentDidMount(){
        axios.get(`${API_URL}/course/search/queens`)
            .then(response => {
                this.setState({
                    courseList : response.data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    componentDidUpdate(prevProps){
        if(this.props.currentUni !== prevProps.currentUni){
            
            axios.get(`${API_URL}/course/search/${this.props.currentUni}`)
            .then(response => {
                this.setState({
                    courseList : response.data
                })
            })
            .catch(e => {
                console.log(e)
            })
        }
    }

    displayCourses = () => {
        return this.state.courseList.map(course => {
            return (
                <div className="CourseList__course-container">
                    <img src={course.thumbnail} alt="" className="CourseList__thumbnail"/>
                    <div className="CourseList__description-container">
                        <h4 className="CourseList__course-title">{course.courseName}</h4>
                        <StarRatings
                            rating={parseFloat(course.courseInfo.courseRating)}
                            starRatedColor="gold"
                            starDimension="2rem"
                            starSpacing="0.2rem"
                            numberOfStars={5}
                            name='rating'
                        />
                        <h5 className="CourseList__course-author">{course.courseInfo.courseAuthor}</h5>
                        <h4 className="CourseList__course-price">{course.courseInfo.coursePrice}</h4>
                    </div>
                </div>
            )
        })
    }

    render() {

        console.log(this.state.courseList[0])

        return (
            <div className="CourseList">
                <div className="CourseList__outer-container">
                    <div className="CourseList__container">
                        {this.displayCourses()}
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseList;