import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Product from "./cartComponents/Product"

import picture from "../img/logo.png"

import '../App.css';

class Header extends Component {
    state = {  }

    showHideCart = () => {
        const cart = document.getElementById("shoppingCart");

        if (cart.style.display != "flex") {
            cart.style.display = "flex"
        }else {
            cart.style.display = "none"
        }
    }


    render() { 
        return ( 
            <header id="mainHeader">
                <div id="topHeader">
                    <div id="topHeaderLeft">
                        <p>Skapad med kärlek</p>
                        <div />
                    </div>
                    <div id="topHeaderRight">
                    </div>
                </div>
                <div id="bottomHeader">
                    <div onClick={() => this.props.clickHeader(1)} id="headerLogo">
                        <img src={picture}/>
                    </div>
                    <div>
                        <button onClick={this.showHideCart}><FontAwesomeIcon icon={faShoppingCart} /> Kundvagn</button>
                        <button onClick={() => this.props.selectPage(5)}><FontAwesomeIcon icon={faCashRegister} /> Till Kassa</button>
                    </div>
                </div>
                <div id="shoppingCart">
                    <div id="shoppingCartItems">
                        {this.props.addItemToCart.map(product => <Product upTheNumber={this.props.upTheNumber} key={product.id} addItemToCart={this.props.addItemToCart[product.number]}/>)}
                    </div>
                    <button  onClick={() => this.props.selectPage(5)}>Gå till kassa</button>
                </div>
            </header>
        );
    }
}
 
export default Header;