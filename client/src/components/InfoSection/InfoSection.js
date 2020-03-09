import React, { Component } from 'react';
import './InfoSection.scss'

class InfoSection extends Component {
    render() {
        return (
            <div className="InfoSection">
                <div className="InfoSection__container">
                        <div className="InfoSection__info-container">
                            <div className="InfoSection__heading-container">
                                <h2 className="InfoSection__heading">
                                    We teach a ranges of all subjects 
                                </h2>
                                <p className="InfoSection__description">
                                    You don't have to be a science, math, engineering, or business student to use our platform. We having in depth tutorials in a range of subjects including ones like psychology, history and english. Below is a list of all the subjects we teach.
                                </p>
                                <div className="InfoSection__subjects-container">
                                    <h4 className="InfoSection__subject"> <span>Science</span> - Physics, Chemistry, Biology, Psychology</h4>
                                    <h4 className="InfoSection__subject"> <span>Commerce </span> - Economics, Accounting, Marketing</h4>
                                    <h4 className="InfoSection__subject"> <span>Engineering </span> - Software, Mechanical, Electrical</h4>
                                    <h4 className="InfoSection__subject"> <span>Math</span> - Calculus, Algedra, Statistics</h4>
                                    <h4 className="InfoSection__subject"> <span>Arts</span> - English, History, Politics</h4>
                                </div>
                            </div>
                        </div>

                    
                        <div className="InfoSection__cube-container">
                            <div className="InfoSection__cube-box">
                                <div className="InfoSection__cube">
                                    <div className="InfoSection__cube-face InfoSection__cube-face--front">
                                        Science
                                    </div>
                                    <div className="InfoSection__cube-face InfoSection__cube-face--back">
                                        Arts
                                    </div>
                                    <div className="InfoSection__cube-face InfoSection__cube-face--top"></div>
                                    <div className="InfoSection__cube-face InfoSection__cube-face--bottom"></div>
                                    <div className="InfoSection__cube-face InfoSection__cube-face--right">
                                        Engineering
                                    </div>
                                    <div className="InfoSection__cube-face InfoSection__cube-face--left">
                                        Commerce
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default InfoSection;