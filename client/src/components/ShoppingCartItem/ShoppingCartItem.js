import React, { Component } from 'react'
import {connect} from 'react-redux';
import {removeItem} from '../../actions/index'

class ShoppingCartItem extends Component {

    constructor(props){
        super(props)
        this.cartCourseRefs = React.createRef()
    }

    removeCourse = () => {
        this.props.removeItem(this.cartCourseRefs.current.id)
    }

    render() {
        return (
            <div className="ShoppingCart__item-row-container" ref={this.cartCourseRefs} id={this.props.cartItem.courseId}>
                <div className="ShoppingCart__remove-btn" onClick={this.removeCourse}/>
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

export default connect(mapStateToProps, {removeItem})(ShoppingCartItem)