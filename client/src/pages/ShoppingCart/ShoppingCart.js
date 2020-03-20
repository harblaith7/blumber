import React, { Component } from 'react';
import "./ShoppingCart.scss";
import Nav from '../../components/Nav/Nav';
import Payment from '../../components/Payments/Payments';
import {connect} from 'react-redux';
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem"
import shoppingCartIcon from "../../assets/shopping-cart.svg"

class ShoppingCart extends Component {

    componentDidMount(){
        console.log(this.props.cart)
    }

    displayCartItems = () => {
        if(this.props.cart.length){
            return this.props.cart.map(cartItem => {
                return (
                    <ShoppingCartItem cartItem = {cartItem}/>
                )
            })
        } else {
            return (
                <div className="ShoppingCart__empty-cart-container">
                    <h1>No items in cart</h1>
                    <img src={shoppingCartIcon} alt="" className="ShoppingCart__background-image"/>
                </div>
            )
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
                                price={(this.props.cart.length * 28.99*100).toFixed(2)}
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