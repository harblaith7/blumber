import React, { Component } from 'react';
import "./ShoppingCart.scss";
import Nav from '../../components/Nav/Nav';
import StripeCheckout from 'react-stripe-checkout'

class ShoppingCart extends Component {
    render() {
        return (
            <div className="ShoppingCart">
                <StripeCheckout amount={2899}
                token={token => this.props.handleToken(token, "Monkeys")}
                stripeKey="pk_test_oMT5cfppt04vWhvnFVzd4eRQ00nR1VMwO7"></StripeCheckout>
                <Nav/>
                <div className="ShoppingCart__container">
                    <div className="ShoppingCart__item-cart-container">
                    </div>
                    <div className="ShoppingCart__buy-container">
                        <div className="ShoppingCart__buy-content-container">
                            <div className="ShoppingCart__line"/>
                            <div className="ShoppingCart__cart-info-container">
                                <h5 className="ShoppingCart__title">
                                    Cart Total
                                </h5>
                                <h3 className="ShoppingCart__total">
                                    $150.99
                                </h3>
                            </div>
                            <p className="ShoppingCart__detail">
                                Taxes included at checkout
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;