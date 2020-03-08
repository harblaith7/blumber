import React, { Component } from 'react';
import './CourseList.scss'

class CourseList extends Component {

    constructor(props){
        super(props)
        this.state = {
            courseList : [
                {
                    thumbnail: "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/",
                    title: "CHEM 112 - General Chemistry",
                    author: "Kristap Porzingus, Avery Bradely",
                    price: "$28.99"
                },
                {
                    thumbnail: "https://blogs.biomedcentral.com/on-biology/wp-content/uploads/sites/5/2017/12/DNA.png",
                    title: "BCHM 316 - Metabolism and Enzyme Kinetics",
                    author: "Damion Lillard",
                    price: "$28.99"
                },
                {
                    thumbnail: "https://miro.medium.com/max/1920/1*q70-tqozKAXwBa5ztRM_rg.jpeg",
                    title: "MATH 121 - Differentiation and Integral Calculus ",
                    author: "Anthony Davis",
                    price: "$28.99"
                },
                {
                    thumbnail: "https://cdn.journals.aps.org/journals/PHYSICS/synopses/images/10.1103/PhysRevPhysEducRes.15.010130",
                    title: "PHYS 117 - Introductory Physics ",
                    author: "Kawhi Leanord",
                    price: "$28.99"
                },
                {
                    thumbnail: "https://i2.wp.com/psychlearningcurve.org/wp-content/uploads/2019/12/skills.png?resize=777%2C437",
                    title: "PSYC 100 - Principles of Psychology",
                    author: "Post Malone",
                    price: "$28.99"
                },
            ]
        }
    }

    displayCourses = () => {
        return this.state.courseList.map(course => {
            return (
                <div className="CourseList__course-container">
                    <img src={course.thumbnail} alt="" className="CourseList__thumbnail"/>
                    <div className="CourseList__description-container">
                        <h4 className="CourseList__course-title">{course.title}</h4>
                        <h5 className="CourseList__course-author">{course.author}</h5>
                        <h4 className="CourseList__course-price">{course.price}</h4>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="CourseList">
                <div className="CourseList__container">
                    {this.displayCourses()}
                </div>
            </div>
        );
    }
}

export default CourseList;