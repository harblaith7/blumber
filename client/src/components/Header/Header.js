import React, { Component } from 'react';
import './Header.scss';
import headerImage from '../../assets/read-textbook.svg'
import Slider from '../Slider/Slider';
import backgroundDesign from '../../assets/purple-background.svg'
import Nav from '../Nav/Nav';


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Nav/>
                <img src={backgroundDesign} className="Header__background-design" alt=""/>
                <img src={headerImage} alt="" className="Header__image"/>
                <Slider/>
            </div>
        );
    }
}

export default Header;