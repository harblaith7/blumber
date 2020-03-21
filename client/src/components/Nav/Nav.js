import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Nav.scss';
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import shoppingCart from '../../assets/shopping-cart.svg'


class Nav extends Component {

    constructor(props){
        super(props)
        this.state = {
            isToggled : false
        }
    }

    toggleNav = () => {
        this.setState({
            isToggled : !this.state.isToggled
        })
    }

    displayContent = () => {
        switch(this.props.auth){
            case null:
                return 
            case false:
                return (
                    <>
                        <li className="Nav__list-item">
                            <Link to="/" className="Nav__link"> 
                                Home
                            </Link>
                        </li>
                        <li className="Nav__list-item">
                            <Link to="/wolfandbird" className="Nav__link">
                                Wolf Tracker
                            </Link>
                        </li>
                        <li className="Nav__list-item Nav__list-item--margin">
                            <HashLink to="/#course-display" className="Nav__link Nav__link--margin">
                                Courses
                            </HashLink>
                        </li>
                        <li className="Nav__list-item">
                            <Link to="/shopping-cart" className="Nav__link">
                                Cart
                            </Link>
                        </li >
                        <li className="Nav__list-item">
                            <a href="/auth/google" className="Nav__link">
                                Login 
                            </a>
                        </li>
                    </>
                )
            default: 
               
                return (
                    <li className="Nav__list-item">
                        <Link to="/wolfandbird" className="Nav__link Nav__link">
                            Wolf Tracker
                        </Link>
                        <HashLink to="/#course-display" className="Nav__link Nav__link">
                            Courses
                        </HashLink>
                        <Link to="/log" className="Nav__link Nav__link">
                            My Courses
                        </Link>
                        <Link to="/shopping-cart" className="Nav__link">
                            Cart
                        </Link>
                        <a href="/api/logout" className="Nav__link Nav__link">
                            {this.props.auth.name}
                        </a>
                    </li> 
                )
        }
    }

    render() {
        return (
            <div className="Nav">
                <div className="Nav__container">
                    <ul className={`Nav__list  ${this.state.isToggled && "Nav__active"}`} >
                        {this.displayContent()}
                    </ul>
                    <div className="Nav__burger" onClick={this.toggleNav}>
                        <div className="Nav__line1"></div>
                        <div className="Nav__line2"></div>
                        <div className="Nav__line3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth, cart}){
    return {
        auth,
        cart
    }
}

export default connect(mapStateToProps)(Nav);