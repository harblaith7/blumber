import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Nav.scss'

class Nav extends Component {

    displayContent = () => {
        switch(this.props.auth){
            case null:
                return 
            case false:
                return (
                    <li className="Nav__list-item">
                        <a href="" className="Nav__link">
                             Wolf Tracker
                        </a>
                        <a href="" className="Nav__link">
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
                        <a href="" className="Nav__link">
                            Wolf Tracker
                        </a>
                        <a href="" className="Nav__link">
                            Courses
                        </a>
                        <a href="" className="Nav__link">
                            My Courses
                        </a>
                        <a href="/api/logout" className="Nav__link">
                            Log out
                        </a>
                    </li> 
                )
        }
    }

    render() {
        console.log('In Nav', this.props.auth)
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