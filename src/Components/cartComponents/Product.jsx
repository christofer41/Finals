import React, { Component } from 'react';
import "../../Styles/cartProduct.css"

class Product extends Component {


    componentDidMount() {
        console.log(this.props.addItemToCart.number)

    }


    render() { 
        return ( 
            

            
            <div id="productDiv">
                <div id="productName"><p>{this.props.addItemToCart.name}</p></div>
                <div id="productContent">

                    <div id="productImage">
                        <img src={this.props.addItemToCart.image} alt=""/>
                    </div>
                    <div id="productPriceInd">
                        <p>{this.props.addItemToCart.price + ":-"}</p>
                    </div>
                    <div id="productAmount">
                        <button onClick={() => this.props.upTheNumber(this.props.addItemToCart.number)}>+</button>
                        <p id="amountOfProduct">{this.props.addItemToCart.amount}</p>

                    </div>
                    <div id="productPriceAll">
                        <p>{this.props.addItemToCart.priceForAll + ":-"} </p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Product;