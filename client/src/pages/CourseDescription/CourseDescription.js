import React, { Component } from 'react';
import "./CourseDescription.scss";
import StarRatings from 'react-star-ratings'

class CourseDescription extends Component {
    render() {
        return (
            <div className="CourseDescription">
                <div className="CourseDescription__container">
                    <div className="CourseDescription__header-container">
                        <div className="CourseDescription__info-container">

                            <div className="CourseDescription__text-info-container">
                                <h2 className="CourseDescription__header">
                                    CHEM 222 - Methods of Structure Determination
                                </h2>
                                <p className="CourseDescription__short-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis a corrupti at nam id possimus exercitationem mollitia ipsum laudantium!
                                </p>
                                <div className="CourseDescription__stats-container">
                                    <StarRatings
                                        rating={4.8}
                                        starRatedColor="gold"
                                        starDimension="2rem"
                                        starSpacing="0.2rem"
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                    <p className="CourseDescription__stats-info">4.8</p>
                                    <p className="CourseDescription__stats-info CourseDescription__stats-info--margin">
                                        <span>74%</span> of our students got an A in this course
                                    </p>
                                    <p className="CourseDescription__stats-info CourseDescription__stats-info--margin">
                                        Over <span>15 hours</span> of content
                                    </p>
                                </div>
                            </div>

                            <div className="CourseDescription__purchase-container">
                                hi
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDescription;