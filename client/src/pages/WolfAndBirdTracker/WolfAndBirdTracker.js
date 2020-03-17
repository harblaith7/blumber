import React, { Component } from 'react';
import './WolfAndBirdTracker.scss'
import Nav from '../../components/Nav/Nav'
import Checkbox from "../../components/Checkbox/Checkbox"

class WolfAndBirdTracker extends Component {
    render() {
        return (
            <div className="WolfAndBirdTracker">
                <Nav className="WolfAndBirdTracker__nav"/>
                <div className="WolfAndBirdTracker__container">
                    <div className="WolfAndBirdTracker__header-container">
                        <h2 className="WolfAndBirdTracker__header">
                            Find the Right Course
                        </h2>
                        <p className="WolfAndBirdTracker__description">
                            Find out which course is right for you by viewing its average GPA over the past few years and by what previous students are saying about it.
                            Use the scale to the right as a guide to assess a course's difficulty level.
                        </p>
                    </div>
                    <div className="WolfAndBirdTracker__scale-container">
                        <div className="WolfAndBirdTracker__img-container">
                            <img src="https://image.flaticon.com/icons/png/512/141/141850.png" alt="" className="WolfAndBirdTracker__image"/>
                            <img src="https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22217-wolf-face-icon.png" alt="" className="WolfAndBirdTracker__image"/>
                            <img src="https://getdrawings.com/free-icon/wolf-icon-52.png" alt="" className="WolfAndBirdTracker__image"/>
                            <img src="https://cdn.clipart.email/7427c8f808cce11caee187528f2bab38_eagle-transparent-png-clipart-gallery-yopriceville-high-_3407-1678.png" alt="" className="WolfAndBirdTracker__image WolfAndBirdTracker__image--eagle"/>
                            <img src="https://img.icons8.com/plasticine/2x/pinguin.png" alt="" className="WolfAndBirdTracker__image WolfAndBirdTracker__image--bird"/>
                            <img src="https://cdn0.iconfinder.com/data/icons/animals-123/500/SingleCartoonAnimalOneYulia_11-512.png" alt="" className="WolfAndBirdTracker__image WolfAndBirdTracker__image--bird"/>   
                        </div>
                        <div className="WolfAndBirdTracker__scale-info-container">
                            <h4 className="WolfAndBirdTracker__scale-info">
                                Extremly Hard
                            </h4>
                            <h4 className="WolfAndBirdTracker__scale-info">
                                Very Hard
                            </h4>
                            <h4 className="WolfAndBirdTracker__scale-info WolfAndBirdTracker__scale-info--hard">
                                Hard
                            </h4>
                            <h4 className="WolfAndBirdTracker__scale-info WolfAndBirdTracker__scale-info--neutral">
                                Neutral
                            </h4>
                            <h4 className="WolfAndBirdTracker__scale-info WolfAndBirdTracker__scale-info--easy">
                                Easy
                            </h4>
                            <h4 className="WolfAndBirdTracker__scale-info WolfAndBirdTracker__scale-info--very-easy">
                                Very Easy
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WolfAndBirdTracker;