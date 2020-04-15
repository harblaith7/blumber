import React, { Component } from 'react';
import './CourseList.scss';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import Course from '../Course/Course'
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://localhost:8080'

class CourseList extends Component {

    constructor(props){
        super(props)
        this.state = {
            courseList : []
        }
    }

    componentDidMount(){
        axios.get(`/api/search/queens`)
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
            
            axios.get(`/api/search/${this.props.currentUni}`)
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
            return <Course course={course} key={uuidv4()}/>
        })
    }

    render() {

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