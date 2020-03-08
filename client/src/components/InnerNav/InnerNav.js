import React, { Component } from 'react';
import './InnerNav.scss'

class InnerNav extends Component {
    render() {
        return (
            <nav className="InnerNav">
                <div className="InnerNav__container">
                    <ul className="InnerNav__list">
                        <li className="InnerNav__list-item InnerNav__list-item--active">
                            <a href="" className="InnerNav__link">
                                Queens'
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                Western
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                UofT
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                Ryerson
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                McGill
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                Carleton
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                UOttawa
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                UBC
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                York
                            </a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">
                                McMaster
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default InnerNav;