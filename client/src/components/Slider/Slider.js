import React, { Component } from 'react';
import './Slider.scss';
import graduationHat from '../../assets/graduation-hat.svg';
import Modal from '../Modal/Modal'
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';

class Slider extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter : 0,
            size: 50,
            btnState : [true, false, false, false],
            content: [
                {
                    title: "Supplement your Learning",
                    description: "Lorem ipsum dolor  adipisicing elit. Facilis voluptas, nobis illo nulla hic quasi minus at maxime, consequatur ipsum tempore ratione facere pariatur amet."
                },
                {
                    title: "Ace your Exams",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta laboriosam eos officia alias quas atque perferendis dolor at eius."
                },
                {
                    title: "Find the Right Course",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus fugit omnis recusandae earum modi accusamus odit animi amet repellat!" 
                },
                {
                    title: "Become an Instructor",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus fugit omnis recusandae earum modi accusamus odit animi amet repellat!" 
                },
            ]
        }
    }

    componentDidMount(){
       // setInterval(() => {
       //     this.autoTransition()
       // }, 5000)
    }

    displaySlides = () => {
        return this.state.content.map(slide => {
            return (
                <div className="Slider__content" key={uuidv4()}>
                    <h2 className="Slider__title">{slide.title}</h2> 
                    <p className="Slider__description">{slide.description}</p>
                </div>
            )
        })
    }

    transitionSlide = (e, position) => {
        const slider = document.querySelector('.Slider__slide')
        slider.style.transition = "transform 0.4s ease-in-out";

        let btnState = [false, false, false, false]
        if(e){
            btnState[parseInt(e.target.id)] = true
        } else {
            btnState[position] = true
        }
        

        this.setState({
            counter : e ? parseInt(e.target.id) : position,
            btnState : btnState
        }, () => {
            slider.style.transform = `translateX(${-this.state.size * this.state.counter}rem)`
            
        })
    }

    autoTransition = () => {
        if(this.state.counter === 3 ){
            this.transitionSlide(null, 0)
        } else {
            this.transitionSlide(null, this.state.counter + 1)
        }
    }

    displayButton = () => {
        if(this.props.auth){
            return (
                <a href="/api/logout" type="button" className="Slider__log-out">
                    Log Out
                </a>
            )
        } else {
            return <Modal/>
        }
    }

    render() {
        console.log(this.props.auth)
        return (
            <div className="Slider">
                <div className="Slider__graduation-img-container">
                    <img src={graduationHat} alt="" className="Slider__graduation-hat"/>
                </div>
                <div className="Slider__container">
                    <div className="Slider__slide" style={{transform : `translateX(${-this.state.size * this.state.counter}rem)`}}>
                        {this.displaySlides()}
                    </div>
                </div>
                <div className="Slider__button-container">
                    <button className={`Slider__btn ${this.state.btnState[0] && "Slider__btn--active"}`} onClick={this.transitionSlide} id="0"></button>
                    <button className={`Slider__btn ${this.state.btnState[1] && "Slider__btn--active"}`} onClick={this.transitionSlide} id="1"></button>
                    <button className={`Slider__btn ${this.state.btnState[2] && "Slider__btn--active"}`} onClick={this.transitionSlide} id="2"></button>
                    <button className={`Slider__btn ${this.state.btnState[3] && "Slider__btn--active"}`} onClick={this.transitionSlide} id="3"></button>
                </div>
                <div className="Slider__sign-in-container">
                    {this.displayButton()}
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps, null)(Slider);


/*Slider__btn--active

import React, { Component } from 'react'
import './Slider.scss';



export default class Slider extends Component {

    constructor(props){
        super(props)
        this.state = {
            isClicked : [true, false, false, false]
        }
        this.handleClick = this.handleClick.bind(this)
        this.changeSlides = this.changeSlides.bind(this)
        
    }

    handleClick(e){
        let updatedClicked = [false, false, false, false]
        updatedClicked[(parseInt(e.target.id.split('-')[1]) - 1)] = true
        this.setState({
            isClicked : updatedClicked
        })
    }

    /*
    ---------------------------------------------------
        More Responsive Code but for now it doesn't work
    ---------------------------------------------------
    changeSlides(){
        let updatedClicked = [false, false, false, false]
        this.state.isClicked.map((slide,index) => {
            if(slide){
                console.log(index)
                if(index === this.state.isClicked.length - 1){
                    updatedClicked[0] = true;
                    this.setState({
                        isClicked : updatedClicked
                    })
                } else {
                    updatedClicked[index + 1] = true;
                    this.setState({
                        isClicked : updatedClicked
                    })
                }
            }
        })
    }
    

    changeSlides(){
        
    }
    

    render() {

        

        const slide = () => {
            if(this.state.isClicked[0] === true){
                return (
                    <>
                        <div className="Slider__heading">
                            Fully Understand your Course
                        </div>
                        <div className="Slider__explanation">
                            Watch specifically tailored online lectures to throughly understand your course's material and your professor's exceptations 
                        </div>
                    </>
                )
            } else if (this.state.isClicked[1] === true){
                return (
                    <>
                        <div className="Slider__heading">
                            Practice with Popular Questions
                        </div>
                        <div className="Slider__explanation">
                            Prepare for your exams by doing hundreds of practice questions similar to the ones you will find on your exams
                        </div>
                    </>
                )
            } else if (this.state.isClicked[2] === true){
                return (
                    <>
                        <div className="Slider__heading">
                            Find Bird and Wolf Courses
                        </div>
                        <div className="Slider__explanation">
                            Use our wolf tracker to determine if a course is either easy (bird) or difficult (wolf) before enrolling into it
                        </div>
                    </>
                )
            } else if (this.state.isClicked[3] === true){
                return (
                    <>
                        <div className="Slider__heading">
                            Ace your Course
                        </div>
                        <div className="Slider__explanation">
                            Use our resources to ace your course and then tell us all about it at student-success@blumber.ca
                        </div>
                    </>
                )
            }
        }
        return (
            <div className="Slider-container">
                <div className="Slider">
                    <div className="Slider__slide">
                        {slide()}
                        <button className="Slider__sign-up">
                            Sign up
                        </button>
                    </div>
                    <div className="Slider__btn-container">
                        <button className={`Slider__btn ${this.state.isClicked[0] && "Slider__btn--active"}`} id="slide-1" onClick={this.handleClick}></button>
                        <button className={`Slider__btn ${this.state.isClicked[1] && "Slider__btn--active"}`} id="slide-2" onClick={this.handleClick}></button>
                        <button className={`Slider__btn ${this.state.isClicked[2] && "Slider__btn--active"}`} id="slide-3" onClick={this.handleClick}></button>
                        <button className={`Slider__btn ${this.state.isClicked[3] && "Slider__btn--active"}`} id="slide-4" onClick={this.handleClick}></button>
                    </div>
                </div>
            </div>
            
        )
    }
}

*/