import React, { Component } from 'react';
import "./ShoppingCart.scss";
import Nav from '../../components/Nav/Nav';
import Payment from '../../components/Payments/Payments';
import {connect} from 'react-redux';

class ShoppingCart extends Component {

    componentDidMount(){
        console.log(this.props.cart)
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
                                <h3 className="ShoppingCart__row-item">
                                    Description
                                </h3>
                                <h3 className="ShoppingCart__row-item">
                                    Price
                                </h3>
                            </div>

                            <div className="ShoppingCart__item-row-container">
                                <div className="ShoppingCart__row-item">
                                    <img src="https://lh3.googleusercontent.com/proxy/q1cMFTR4AI7bK9mnq1VXqQ3QgCCeLRqGsvt0gfwO6O_ggCteRrSf_h2h6Ivoe9fSKz33wFsyTmizoxXIUF2TgSdTi659xwyZJ3wIVOSOG3Ggm9u_SY4ifVO4F0Vj_dwyzyw5pWXMKUfRaTiejKxT1ejo7TisovCvaoD_wDlt5zCR" alt="" className=" ShoppingCart__row-item--item ShoppingCart__row-item--image"/>    
                                </div>
                                <div className="ShoppingCart__row-item ShoppingCart__row-item--description-container">
                                    <h4 className="ShoppingCart__title">
                                        Chem 222
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore aut eveniet nostrum quasi similique? 
                                    </p>
                                </div>
                                <div className="ShoppingCart__row-item">
                                    <p className="ShoppingCart__price">
                                        $28.99
                                    </p>
                                </div>
                            </div>
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
                                    $150.99
                                </h3>
                            </div>
                            <p className="ShoppingCart__detail">
                                Taxes included at checkout
                            </p>
                            <Payment>
                                <div class="ShoppingCart__buy-btn box-3">
                                    <div class="design">
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