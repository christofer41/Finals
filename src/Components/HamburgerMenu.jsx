import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import '../App.css';

class HamburgerMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="HamburgerMenu">
                <div id="hamburgerTop">
                <button onClick={() => {this.props.clickSidebar(2, "computer"); this.props.displayHamburger()}}>Dator & Surfplatta</button>
                    <button onClick={() => {this.props.clickSidebar(2, "games"); this.props.displayHamburger()}}>Dator & TvSpel</button>
                    <button onClick={() => {this.props.clickSidebar(2, "board"); this.props.displayHamburger()}}>Brädspel & Leksaker</button>
                </div>
                <div id="hamburgerMid">
                    <button onClick={() => {this.props.selectPage(5); this.props.displayHamburger()}}><FontAwesomeIcon icon={faCashRegister} /> Till Kassa</button>
                </div>
                <div id="hamburgerBottom">
                <button onClick={() => {this.props.clickSidebar(6, "help"); this.props.displayHamburger()}}>Be om hjälp</button>
                </div>
            </div>    
        );
    }
}


 
export default HamburgerMenu;