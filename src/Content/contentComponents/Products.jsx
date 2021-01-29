import React, { Component } from 'react';
import "../../Styles/shoppingPage.css"

class Products extends Component {
    state = {  }

    
    render() { 
        return ( 

            <div className="shoppingContent"  onClick={() => {this.props.specificItemChosen(4); this.props.theProductItself(this.props.allProducts)}}>
                <div>
                    <img src={this.props.allProducts.image} alt=""/>
                </div>
                <p>{this.props.allProducts.name}</p>
                <h4>{this.props.allProducts.price + " :-"}</h4>
            </div>
        );
    }
}
 
export default Products;
