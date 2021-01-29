import React, { Component } from 'react';
import "../../Styles/reciept.css"

import Product from "../cartComponents/Product"

class Reciept extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="recieptMain">
                <div id="recieptLeft">
                    <div id="recieptLeftContainer">
                        <h2>Kvitto</h2>
                        <h2>Din beställning har skickats till</h2>
                    <div id="recieptInfo">
                        <div><h4>{this.props.saveInfo.name}</h4></div>
                        <div><h4>{this.props.saveInfo.adress}</h4></div>
                        <div><h4>{this.props.saveInfo.postNr}</h4></div>
                        <div><h4>{this.props.saveInfo.locale}</h4></div>
                        <div><h4>{this.props.saveInfo.email}</h4></div>
                        <div><h4>{this.props.saveInfo.mobile}</h4></div>
                    </div>
                        <h2>Ditt paket levereras inom {this.props.deliveryInfo.time}</h2>
                        <h2>Ditt Totala pris är: {this.props.displayTotalPrice} :-</h2>
                        <button onClick={() => this.props.turnDownReciept()}>Okej</button>
                        </div>
                </div>
                <div id="recieptRight">
                {this.props.addItemToCart.map(product => <Product key={product.id} addItemToCart={this.props.addItemToCart[product.number]}/>)}
                </div>
            </div>
        );
    }
}
 
export default Reciept;