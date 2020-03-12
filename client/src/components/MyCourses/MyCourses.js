import React, { Component } from 'react';
import "./MyCourses.scss";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar"
import axios from 'axios'
import MyCourse from '../MyCourse/MyCourse'

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
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    transferId = (id) => {
        console.log('Inside MyCourses: ', id)
        this.props.transferCurrentId(id)
        
    }

    displayUsersCourses = () => {
        return this.state.myCourses.map(course => {
            return (
                <MyCourse key={course.courseId} course={course} transferCurrentId={this.transferId}/>
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