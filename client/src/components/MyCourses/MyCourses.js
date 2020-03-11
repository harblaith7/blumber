import React, { Component } from 'react';
import "./MyCourses.scss";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar"

class MyCourses extends Component {
    render() {
        return (
            <div className="MyCourses">
                <div className="MyCourses__container">
                    <h3 className="MyCourses__heading">
                        My Courses
                    </h3>
                    <div className="MyCourses__courses-container">

                        <div className="MyCourses__course-card">
                            <img src="https://www.scitecheuropa.eu/wp-content/uploads/2018/06/ST27-McGillU1-image-%C2%A9-iStock-Garsya.jpg" alt="" className="MyCourses__card-img"/>
                            <div className="MyCourses__info-container">
                                <h4 className="MyCourses__card-title">CHEM 222 - Methods of Structure Determination</h4>
                                <p className="MyCourses__instructor">Spencer Dinwiddie</p>
                                <div className="MyCourses__progress-bar-container" >
                                    <LinearProgressBar/>
                                </div>
                            </div>
                        </div>

                        <div className="MyCourses__course-card">
                            <img src="https://www.scitecheuropa.eu/wp-content/uploads/2018/06/ST27-McGillU1-image-%C2%A9-iStock-Garsya.jpg" alt="" className="MyCourses__card-img"/>
                            <div className="MyCourses__info-container">
                                <h4 className="MyCourses__card-title">CHEM 222 - Methods of Structure Determination</h4>
                                <p className="MyCourses__instructor">Spencer Dinwiddie</p>
                                <div className="MyCourses__progress-bar-container" >
                                    <LinearProgressBar/>
                                </div>
                            </div>   
                        </div>

                        <div className="MyCourses__course-card">
                            <img src="https://www.scitecheuropa.eu/wp-content/uploads/2018/06/ST27-McGillU1-image-%C2%A9-iStock-Garsya.jpg" alt="" className="MyCourses__card-img"/>
                            <div className="MyCourses__info-container">
                                <h4 className="MyCourses__card-title">CHEM 222 - Methods of Structure Determination</h4>
                                <p className="MyCourses__instructor">Spencer Dinwiddie</p>
                                <div className="MyCourses__progress-bar-container" >
                                    <LinearProgressBar/>
                                </div>
                            </div>
                        </div>

                        <div className="MyCourses__course-card">
                            <img src="https://www.scitecheuropa.eu/wp-content/uploads/2018/06/ST27-McGillU1-image-%C2%A9-iStock-Garsya.jpg" alt="" className="MyCourses__card-img"/>
                            <div className="MyCourses__info-container">
                                <h4 className="MyCourses__card-title">CHEM 222 - Methods of Structure Determination</h4>
                                <p className="MyCourses__instructor">Spencer Dinwiddie</p>
                                <div className="MyCourses__progress-bar-container" >
                                    <LinearProgressBar/>
                                </div>
                            </div>
                        </div>

                        <div className="MyCourses__course-card">
                            <img src="https://www.scitecheuropa.eu/wp-content/uploads/2018/06/ST27-McGillU1-image-%C2%A9-iStock-Garsya.jpg" alt="" className="MyCourses__card-img"/>
                            <div className="MyCourses__info-container">
                                <h4 className="MyCourses__card-title">CHEM 222 - Methods of Structure Determination</h4>
                                <p className="MyCourses__instructor">Spencer Dinwiddie</p>
                                <div className="MyCourses__progress-bar-container" >
                                    <LinearProgressBar/>
                                </div>
                            </div>
                        </div>

                        <div className="MyCourses__course-card">
                            <img src="https://www.scitecheuropa.eu/wp-content/uploads/2018/06/ST27-McGillU1-image-%C2%A9-iStock-Garsya.jpg" alt="" className="MyCourses__card-img"/>
                            <div className="MyCourses__info-container">
                                <h4 className="MyCourses__card-title">CHEM 222 - Methods of Structure Determination</h4>
                                <p className="MyCourses__instructor">Spencer Dinwiddie</p>
                                <div className="MyCourses__progress-bar-container" >
                                    <LinearProgressBar/>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default MyCourses;