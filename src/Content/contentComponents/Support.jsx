import React, { Component } from 'react';

import "../../Styles/support.css"

class Support extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="supportPopup">
                <div onClick={() => {this.props.hideChatt()}} id="supportHeader">
                    <p>Stäng</p>
                </div>
                <div id="supportChatt">
                    <h4>Du chattar med Arnold</h4>
                    <p>Hejsan! Hur kan jag hjälpa dig? :)</p>
                </div>
                <div id="supportBottom">
                    <textarea id="sendMessageText"></textarea>
                    <button id="sendMessageButton">Skicka</button>
                </div>
            </div>
         );
    }
}
 
export default Support;