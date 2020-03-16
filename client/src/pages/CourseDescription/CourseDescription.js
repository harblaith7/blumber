import React, { Component } from 'react';
import "./CourseDescription.scss";
import StarRatings from 'react-star-ratings';
import axios from 'axios'
import rightArrow from '../../assets/next.svg'
import backBtn from '../../assets/backBtn.svg';
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'

const API_URL = 'http://localhost:8080'

class CourseDescription extends Component {

    constructor(props){
        super(props)
        this.state = {
            courseInfo: ""
        }
    }

    componentDidMount(){
        console.log('From CourseDescription page', this.props.match.params.courseId)
        axios.get(`${API_URL}/course/current/laith/${this.props.match.params.courseId}`)
        .then(response => {
            this.setState({
                courseInfo : response.data[0]
            })
        })
        .catch(e => {
            console.log(e)
        })
    }

    render() {
        const { courseInfo } = this.state
        return (
            <div className="CourseDescription">
                <div className="CourseDescription__container">
                    <div className="CourseDescription__header-container">
                        <Link to="/" className="CourseDescription__back-link">
                            <img src={backBtn} alt="" className="CourseDescription__back-btn"/>
                        </Link>
                        <div className="CourseDescription__info-container">

                            <div className="CourseDescription__text-info-container">
                                <h2 className="CourseDescription__header">
                                    {courseInfo && courseInfo.courseName}
                                </h2>
                                <p className="CourseDescription__short-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis a corrupti at nam id possimus exercitationem mollitia ipsum laudantium!
                                </p>
                                <div className="CourseDescription__stats-container">
                                    <StarRatings
                                        rating={4.6}
                                        starRatedColor="gold"
                                        starDimension="2rem"
                                        starSpacing="0.2rem"
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                    <p className="CourseDescription__stats-info">{courseInfo && parseFloat(courseInfo.courseInfo.courseRating)}</p>
                                    <p className="CourseDescription__stats-info CourseDescription__stats-info--margin">
                                        <span>74%</span> of our students got an A in this course 
                                    </p>
                                    <p className="CourseDescription__stats-info CourseDescription__stats-info--margin">
                                        Over <span>{courseInfo && courseInfo.courseInfo.courseLength}</span> of content
                                    </p>
                                </div>
                                <p className="CourseDescription__author">
                                   Course created by: {courseInfo && courseInfo.courseInfo.courseAuthor}
                                </p>
                            </div>

                            <div className="CourseDescription__purchase-container">
                                <img 
                                    src={courseInfo && courseInfo.thumbnail} 
                                    alt="" 
                                    className="CourseDescription__course-thumbnail"
                                />
                                <h2 className="CourseDescription__price">
                                    CA {courseInfo && courseInfo.courseInfo.coursePrice}
                                </h2>
                                <button className="CourseDescription__purchase-btn CourseDescription__purchase-btn--cart">
                                    <span>Add to Cart</span>
                                    <img src={rightArrow} alt=""/>
                                </button>
                                <StripeCheckout
                                    name="blumber"
                                    description={courseInfo && courseInfo.courseName}
                                    amount={2899}
                                    token={token => console.log(token)}
                                    stripeKey="pk_test_oMT5cfppt04vWhvnFVzd4eRQ00nR1VMwO7"
                                >
                                    <button className="CourseDescription__purchase-btn CourseDescription__purchase-btn--buy">
                                        Buy Now
                                    </button>
                                </StripeCheckout>
                                <p className="CourseDescription__refund-policy">
                                    14 days no questions asked refund policy
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="CourseDescription__description-container">
                        <h2 className="CourseDescription__heading">
                            Course Description
                        </h2>
                        <div className="CourseDescription__description-text-container">
                           <p className="CourseDescription__description-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium, dignissimos eligendi obcaecati nobis nesciunt harum aperiam, at inventore repellat excepturi nemo iste sequi temporibus voluptates rerum ab eum molestiae delectus vitae officiis. Aliquid cumque consequatur autem laboriosam sequi maxime dolor ratione, neque sed dolores voluptate sunt modi, quod ut, impedit odit mollitia reiciendis unde porro expedita assumenda. Accusamus corporis ipsa nisi. Hic quasi veritatis magnam dignissimos! Cupiditate, odit tempora.
                           </p>
                        </div>
                    </div>

                    <div className="CourseDescription__reviews-container">
                        <h2 className="CourseDescription__heading">
                            Reviews
                        </h2>
                        <div className="CourseDescription__review-container">
                            <h3 className="CourseDescription__review-title">
                                I aced my class! - <span>David Goggins</span>
                            </h3>
                            <StarRatings
                                rating={5}
                                starRatedColor="gold"
                                starDimension="2rem"
                                starSpacing="0.1rem"
                                numberOfStars={5}
                                name='rating'
                            />
                            <p className="CourseDescription__review">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nobis id! Dolor possimus sit, reprehenderit harum iste expedita repellat id rerum earum esse sunt sapiente nulla consequatur magnam, debitis ea. Reiciendis doloremque asperiores ratione, ab voluptatem quae, vel quis aliquid veniam atque facere. Atque nesciunt, unde aperiam fugiat quod possimus!
                            </p>
                        </div>

                        <div className="CourseDescription__review-container">
                            <h3 className="CourseDescription__review-title">
                                Take this course if you're confused - <span>Tiffany Chan</span>
                            </h3>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="gold"
                                starDimension="2rem"
                                starSpacing="0.1rem"
                                numberOfStars={5}
                                name='rating'
                            />
                            <p className="CourseDescription__review">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nobis id! Dolor possimus sit, reprehenderit harum iste expedita repellat id rerum earum esse sunt sapiente nulla consequatur magnam, debitis ea. Reiciendis doloremque asperiores ratione, ab voluptatem quae, vel quis aliquid veniam atque facere. Atque nesciunt, unde aperiam fugiat quod possimus!
                            </p>
                        </div>

                        <div className="CourseDescription__review-container">
                            <h3 className="CourseDescription__review-title">
                                Really helped me understand the concepts - <span>Balkirat Thompson</span>
                            </h3>
                            <StarRatings
                                rating={4}
                                starRatedColor="gold"
                                starDimension="2rem"
                                starSpacing="0.1rem"
                                numberOfStars={5}
                                name='rating'
                            />
                            <p className="CourseDescription__review">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nobis id! Dolor possimus sit, reprehenderit harum iste expedita repellat id rerum earum esse sunt sapiente nulla consequatur magnam, debitis ea. Reiciendis doloremque asperiores ratione, ab voluptatem quae, vel quis aliquid veniam atque facere. Atque nesciunt, unde aperiam fugiat quod possimus!
                            </p>
                        </div>
                        
                    </div>

                    

                </div>
            </div>
        );
    }
}

export default CourseDescription;