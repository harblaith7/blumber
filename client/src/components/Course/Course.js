import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import './Course.scss';
import {Link} from 'react-router-dom';

class Course extends Component {

    constructor(props){
        super(props)
        this.courseRef = React.createRef()
    }

    test = () => {
        console.log(this.courseRef.current.id)
    }

    render() {
        return (
            <Link to={`/course/${this.props.course.courseId}`} className="Course" id={this.props.course.courseId} ref={this.courseRef}  onClick={this.test}>
                <img src={this.props.course.thumbnail} alt="" className="Course__thumbnail"/>
                <div className="Course__description-container">
                    <h4 className="Course__course-title">{this.props.course.courseName}</h4>
                    <StarRatings
                        rating={parseFloat(this.props.course.courseInfo.courseRating)}
                        starRatedColor="gold"
                        starDimension="2rem"
                        starSpacing="0.2rem"
                        numberOfStars={5}
                        name='rating'
                    />
                    <h5 className="Course__course-author">{this.props.course.courseInfo.courseAuthor}</h5>
                    <h4 className="Course__course-price">{this.props.course.courseInfo.coursePrice}</h4>
                </div>
            </Link>
        );
    }
}

export default Course;