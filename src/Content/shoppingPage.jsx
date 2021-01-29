import React, { Component } from 'react';
import Products from "./contentComponents/Products"
import "../Styles/shoppingPage.css"
import axios from 'axios'

import picture from "../img/banner.jpg"



// abcat0500000
const apiKey = 'rVhwWD9xG3DBo1PXD3fWGeAO' // process.env.REACT_APP_BESTBUY_API_KEY

class ShoppingPage extends Component {
    constructor(props) {
        super(props);
    }

    state = { 
        productsLoaded: false,
        products: []
     }

    componentDidMount() {
        this.loadCategory();
        this.loadProducts();
        this.displayTheProducts()


    }


    loadProducts = () => {
        const apiID = this.props.chosenCategory
        const productsApiUrl = 'https://api.bestbuy.com/v1/products(categoryPath.id=' +
        apiID + ')?format=json&show=sku,name,salePrice,image&sort=salePrice&apiKey=' + apiKey

        axios.get(productsApiUrl)
            .then((response) => {
                if (response != null && response.data != null) {
                    let products = response.data.products;
                    // console.log('products', response.data.products)

                    for (let i = 0; i < products.length; i++) {
                        
                        let priceInSwe = this.convertPrice(products[i].salePrice)

                        let product = {
                            id: products[i].sku,
                            name: products[i].name,
                            price: priceInSwe,
                            image: products[i].image,
                            prodNum: i
                        }
                        this.state.products.push(product)
                    }

                }
            })
    }


    loadCategory = () => {

        const apiID = this.props.chosenCategory
        const productsApiUrl = 'https://api.bestbuy.com/v1/products(categoryPath.id=' +
        apiID + ')?format=json&show=sku,name,salePrice,image&sort=salePrice&apiKey=' + apiKey

        axios.get(productsApiUrl)
            .then((response) => {
                if (response != null && response.data != null) {
                    console.log('response', response.data)
                }
            })

    }


    convertPrice(price) {
        price = price * 8.33
        price = price.toFixed(2);
      
        let integer = parseInt(price, 10);
        return integer;
      }

     
    render() { 





        return ( 
            <React.Fragment>
                   <div id="shoppingPageTop">
                       <button onClick={() => this.props.backwards(2)} id="backButton">Back</button>
                       <div id="shoppingSlideshow">
                            <img src={picture} alt=""/>
                       </div>

                   </div>
                   <div id="shoppingPageBottom">

                        {this.state.productsLoaded === true ? 
                            this.state.products.map(product => 
                                <Products key={product.id} allProducts={this.state.products[product.prodNum]} specificItemChosen={this.props.specificItemChosen} theProductItself={this.props.theProductItself}/>
                            )
                        : <h2>Loading ...</h2>}


                        { this.state.productsLoaded === true && this.state.products.length <= 0 ? 
                        <div>
                            <h2>Den här produkten har tyvärr slutat att produceras :(</h2>
                            <h4>Detta beror på att den nya Xbox konsolen "Xbox Series X" har kommit ut, och den spelar "Xbox One" spel</h4>
                            <h4>Om det låter intressant så titta gärna vidare på Xbox Series X.</h4>

                        </div>

                        : null}

                   </div>
            </React.Fragment>
        );
    }
    

    displayTheProducts = () => {
        setTimeout(() => { 
            
            this.state.productsLoaded = true;
            this.forceUpdate()
        
        }, 1000);

    }




}
 
export default ShoppingPage;