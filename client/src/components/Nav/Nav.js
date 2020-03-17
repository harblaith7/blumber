import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Nav.scss';
import {Link} from 'react-router-dom'

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
                        <a href="#CourseDisplay" className="Nav__link">
                            Courses
                        </a>
                        <a href="" className="Nav__link">
                            Login 
                        </a>
                    </li>
                )
            default: 
               
                return (
                    <li className="Nav__list-item">
                        <a href="" className="Nav__link Nav__link--logged">
                            Wolf Tracker
                        </a>
                        <a href="" className="Nav__link Nav__link--logged">
                            Courses
                        </a>
                        <a href="" className="Nav__link Nav__link--logged">
                            My Courses
                        </a>
                        <a href="/api/logout" className="Nav__link Nav__link--logged">
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

function mapStateToProps({auth}){
    return {
        auth
    }
}

export default connect(mapStateToProps)(Nav);