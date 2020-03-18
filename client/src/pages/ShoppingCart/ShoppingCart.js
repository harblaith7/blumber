import React, { Component } from 'react';
import "./ShoppingCart.scss";
import Nav from '../../components/Nav/Nav';
import Payment from '../../components/Payments/Payments';
import {connect} from 'react-redux';

class ShoppingCart extends Component {

    componentDidMount(){
        console.log(this.props.cart)
    }

    displayCartItems = () => {
        if(this.props.cart.length){
            return this.props.cart.map(cartItem => {
                return (
                    <div className="ShoppingCart__item-row-container">
                        <div className="ShoppingCart__row-item">
                            <img src={cartItem.thumbnail} alt="" className=" ShoppingCart__row-item--item ShoppingCart__row-item--image"/>    
                        </div>
                        <div className="ShoppingCart__row-item ShoppingCart__row-item--description-container">
                            <h4 className="ShoppingCart__title">
                                {cartItem.courseName}
                            </h4>
                            <p>
                                {cartItem.courseInfo.courseShortDescription}
                            </p>
                        </div>
                        <div className="ShoppingCart__row-item">
                            <p className="ShoppingCart__price">
                                {cartItem.courseInfo.coursePrice}
                            </p>
                        </div>
                    </div>
                )
            })
        } else {
            return <h1>No item in cart</h1>
        }
    }

    render() {
        return (
            <div className="ShoppingCart">
                
                <div className="ShoppingCart__container">
                    <div className="ShoppingCart__item-cart-container">
                        <div className="ShoppingCart__table-container">
                            <div className="ShoppingCart__row-container">
                                <h3 className="ShoppingCart__row-item">
                                    Course
                                </h3>
                                <h3 className="ShoppingCart__row-item ShoppingCart__row-item--description">
                                    Description
                                </h3>
                                <h3 className="ShoppingCart__row-item">
                                    Price
                                </h3>
                            </div>

                            {this.displayCartItems()}
                        </div>
                    </div>

                    <div className="ShoppingCart__buy-container">
                        <Nav/>
                        <div className="ShoppingCart__buy-content-container">
                            <div className="ShoppingCart__line"/>
                            <div className="ShoppingCart__cart-info-container">
                                <h5 className="ShoppingCart__title">
                                    Cart Total
                                </h5>
                                <h3 className="ShoppingCart__total">
                                    ${this.props.cart.length * 28.99}
                                </h3>
                            </div>
                            <p className="ShoppingCart__detail">
                                Taxes included at checkout
                            </p>
                            <Payment 
                                price={this.props.cart.length * 28.99*100}
                                insideCart={true}
                            >
                                <div className="ShoppingCart__buy-btn box-3">
                                    <div className="design">
                                        <span>Checkout</span>
                                    </div>
                                </div>
                            </Payment>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart : state.cart
})

export default connect(mapStateToProps, null)(ShoppingCart);