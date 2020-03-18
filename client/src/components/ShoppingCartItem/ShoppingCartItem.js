import React, { Component } from 'react'
import {connect} from 'react-redux'

class ShoppingCartItem extends Component {

    constructor(props){
        super(props)
        this.cartCourseRefs = React.createRef()
    }

    render() {
        return (
            <div className="ShoppingCart__item-row-container" ref={this.cartCourseRefs}>
                <div className="ShoppingCart__remove-btn"/>
                <div className="ShoppingCart__row-item">
                    <img src={this.props.cartItem.thumbnail} alt="" className=" ShoppingCart__row-item--item ShoppingCart__row-item--image"/>    
                </div>
                <div className="ShoppingCart__row-item ShoppingCart__row-item--description-container">
                    <h4 className="ShoppingCart__title">
                        {this.props.cartItem.courseName}
                    </h4>
                    <p>
                        {this.props.cartItem.courseInfo.courseShortDescription}
                    </p>
                </div>
                <div className="ShoppingCart__row-item">
                    <p className="ShoppingCart__price">
                        {this.props.cartItem.courseInfo.coursePrice}
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(ShoppingCartItem)