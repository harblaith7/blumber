import React, { Component } from 'react';
import './LessonBox.scss';
import dropDownArrow from '../../assets/drop-down-icon.png';

class LessonBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen : false
        }
    }

    toggleLessons = () => {
        this.setState({
            isOpen : !this.state.isOpen,
            
        })
    }

    render() {

        console.log(this.props.lessonInfo)
        return (
            <>
                <div className="LessonBox__toggle" onClick={this.toggleLessons}>
                    <h4 className="LessonBox__title">
                        {this.props.lessonInfo && this.props.lessonInfo.mainInfo.title}
                    </h4>
                    <div className="LessonBox__section-info">
                        <p className="LessonBox__info">
                            0/6
                        </p>
                        <p className="LessonBox__info">
                            33min
                        </p>
                    </div>
                    <img src={dropDownArrow} alt="" className="LessonBox__dropdown-icon"/>
                </div>

                <div className={`LessonBox__lessons-container ${this.state.isOpen && "LessonBox__lessons-container--active"}`} >
                    <div className="LessonBox__lesson-container">
                        <input type="checkbox" className="LessonBox__checkbox"/>
                        <h5 className="LessonBox__lesson-title">
                            About the instructor
                        </h5>
                        <h6 className="LessonBox__lesson-time">
                            9min
                        </h6>
                    </div>
                </div>
            </> 
        );
    }
}

export default LessonBox;