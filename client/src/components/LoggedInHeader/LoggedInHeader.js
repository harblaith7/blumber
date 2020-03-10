import React, { Component } from 'react';
import './LoggedInHeader.scss'

class LoggedInHeader extends Component {
    render() {
        return (
            <div className="LoggedInHeader">
                <div className="LoggedInHeader__container">
                    <div className="LoggedInHeader__heading-container">
                        <h1 className="LoggedInHeader__heading">
                            <span>welcome back,</span> Laith
                        </h1>
                        <p className="LoggedInHeader__paragraph">continue working towards that A+</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoggedInHeader;