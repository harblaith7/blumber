import React, { Component } from 'react';
import './Testinomails.scss'
import quotationMark from '../../assets/quotation-mark.svg'
import { v4 as uuidv4 } from 'uuid';

class Testinomials extends Component {

    constructor(props){
        super(props)
        this.state = {
            allTestinomails : [
                {
                    testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt necessitatibus harum quam voluptatibus excepturi delectus hic velit! Sunt, ducimus.",
                    userImage: "https://www.utsa.edu/today/images/students/paulmartinez.jpg",
                    userName: "Ja Morant"
                },
                {
                    testimonial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, nobis? Dolores excepturi illum maiores quidem perspiciatis consequuntur. Assumenda, ullam? Reiciendis.",
                    userImage: "https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-asia-mills-college.jpg",
                    userName: "Andrea Iguodala"
                },
                {
                    testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt necessitatibus harum quam voluptatibus excepturi delectus hic velit! Sunt, ducimus.",
                    userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDKrv2cvuIU9ClNF7kcJYuG3eaVteWNTIN1xscYHzIJ4KewiF6",
                    userName: "Alex Carosu"
                },
                {
                    testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt necessitatibus harum quam voluptatibus excepturi delectus hic velit! Sunt, ducimus.",
                    userImage: "https://www.guttersdirectmn.com/wp-content/uploads/2018/07/student-profile-gabriela-mills-college.jpg",
                    userName: "Michealle Jordan"
                },
            ]
        }
    }

    displayTestimonials = () => {
        return this.state.allTestinomails.map(testimonial => {
            return (
                
                    <div className="Testinomails__testimonial-container" key={uuidv4()}>
                        <img src={quotationMark} className="Testinomails__quotes-icon" alt=""/>
                        <p className="Testinomails__testimonial">
                            {testimonial.testimonial}
                        </p>
                        <img className="Testinomails__user-image" src={testimonial.userImage} alt=""/>
                        <p className="Testinomails__name">
                            {testimonial.userName}
                        </p>
                    </div>
            )
        })
    }

    render() {
        return (
            <div className="Testinomails">
                <div className="Testinomails__container">
                    <div className="Testinomails__heading-container">
                        <h3 className="Testinomails__heading">
                            What our customers say about us
                        </h3>
                        <div className="Testinomails__line"/>
                    </div>
                    <div className="Testinomails__testimonials-container">
                         {this.displayTestimonials()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Testinomials;