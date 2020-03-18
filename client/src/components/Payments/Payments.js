import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux';
import * as actions from '../../actions'

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="blumber"
                description={this.props.courseInfo}
                amount={this.props.price || 2899}
                token={token => {
                    this.props.handleToken(token, "Monkeys")
                    this.props.clearCart()
                }}
                stripeKey="pk_test_oMT5cfppt04vWhvnFVzd4eRQ00nR1VMwO7"
            >
                {this.props.children}
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments)