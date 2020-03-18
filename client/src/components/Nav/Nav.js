import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Nav.scss';
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import shoppingCart from '../../assets/shopping-cart.svg'


class Nav extends Component {

    displayContent = () => {
        switch(this.props.auth){
            case null:
                return 
            case false:
                return (
                    <li className="Nav__list-item">
                        <Link to="/" className="Nav__link"> 
                            Home
                        </Link>
                        <Link to="/wolfandbird" className="Nav__link">
                             Wolf Tracker
                        </Link>
                        <HashLink to="/#course-display" className="Nav__link Nav__link">
                            Courses
                        </HashLink>
                        <Link to="/shopping-cart" className="Nav__link Nav__link--cart">
                            <span className="Nav__cart-number">
                                3
                            </span>
                            <img src={shoppingCart} alt="" className="Nav__icon"/>
                        </Link>
                        <a href="/auth/google" className="Nav__link">
                            Login 
                        </a>
                    </li>
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
                        <Link to="/shopping-cart" className="Nav__link Nav__link--cart">
                            <img src={shoppingCart} alt="" className="Nav__icon"/>
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
                    <ul className="Nav__list">
                        {this.displayContent()}
                    </ul>
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