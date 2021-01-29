import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import picture from "../img/logo.png"

import '../App.css';

class MobileHeader extends Component {
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
            <header id="mobileHeader">
                <div id="topHeader">
                    <p>Skapad med kärlek</p>
                </div>
                <div id="bottomHeader">
                    <div onClick={() => this.props.displayHamburger()} id="hamburgerButton">
                        <FontAwesomeIcon icon={faBars} size="3x" />
                    </div>
                    <div onClick={() => this.props.clickHeader(1)} id="headerLogo">
                        <img src={picture}/>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default MobileHeader;