import React, { Component } from 'react';
import './InnerNav.scss'

class InnerNav extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentUni : "queens"
        }
    }

    transferUniName = (e) => {
        e.preventDefault()

        this.props.transferUniName(e.target.id)

        this.setState({
            currentUni : e.target.id
        })
    }

    render() {
        return (
            <nav className="InnerNav">
                <div className="InnerNav__container">
                    <ul className="InnerNav__list">
                        <li className={`InnerNav__list-item ${this.state.currentUni === "queens" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="queens" onClick={this.transferUniName}>
                                Queens'
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "western" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="western" onClick={this.transferUniName}>
                                Western
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "uft" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="uft" onClick={this.transferUniName}>
                                UofT
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "ryerson" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="ryerson" onClick={this.transferUniName}>
                                Ryerson
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "mcgill" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="mcgill" onClick={this.transferUniName}>
                                McGill
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "carleton" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="carleton" onClick={this.transferUniName}>
                                Carleton
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "uottawa" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="uottawa" onClick={this.transferUniName}>
                                UOttawa
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "ubc" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="ubc" onClick={this.transferUniName}>
                                UBC
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "york" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="york" onClick={this.transferUniName}>
                                York
                            </a>
                        </li>
                        <li className={`InnerNav__list-item ${this.state.currentUni === "mcmaster" && "InnerNav__list-item--active"}`}>
                            <a href="/" className="InnerNav__link" id="mcmaster" onClick={this.transferUniName}>
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