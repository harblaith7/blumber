import React, { Component } from 'react'
import userSilhoutte from "../../assets/man-user.svg";
import "./Dropdown.scss"

export default class Dropdown extends Component {
    render() {
        return (
            <div className="Dropdown">
                hi
                <button className="Dropdown__button">
                    <img src={userSilhoutte} alt=""/>
                </button>
                <ul className="Dropdown__list">
                    <li className="Dropdown__list-item"><a href="#">Weather App</a></li>
                    <li><a href="#">Music App</a></li>
                    <li><a href="#">React App</a></li>
                    <li><a href="#">Youtube App</a></li>
                </ul>
            </div>
        )
    }
}
