import React, { Component } from 'react';
import Frontpage from "../Content/Frontpage"
import Category from "../Content//Category"
import ShoppingPage from "../Content/shoppingPage"
import ProductPage from "../Content/ProductPage"
import HelpPage from "../Content/HelpPage"

class Content extends Component {

    state = {
        chosenCategory: "",
        chosenProduct: {
            id: "",
            name: "",
            price: 0,
            image: ""

        }
      }

    //The chosen category gets stored in our local state, and then sent to the shoppingPage
    categoryChosen = (item) => {
        this.setState({chosenCategory:item})
        console.log(item)
    }

    productChosen  = (item) => {
        console.log(item.id)
        console.log(item.name)
        console.log(item.price)
        console.log(item.image)




        const product = {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image
        }

        this.setState({chosenProduct: product})

        console.log(this.state.chosenProduct)
    }




    render() { 
        return ( 
            <main id="mainContent">

            {this.props.menuChosen.page == 1 ? <Frontpage /> : null}
            {this.props.menuChosen.page == 2 ? <Category menuChosen={this.props.menuChosen} onChooseCategory={this.categoryChosen} selectPage={this.props.selectPage} /> : null}
            {this.props.menuChosen.page == 3 ? <ShoppingPage backwards={this.props.backwards} chosenCategory={this.state.chosenCategory} specificItemChosen={this.props.specificItemChosen} theProductItself={this.productChosen}/> : null}
            {this.props.menuChosen.page == 4 ? <ProductPage addItemToCart={this.props.addItemToCart} chosenProduct={this.state.chosenProduct}/> : null}
            {this.props.menuChosen.page == 6 ? <HelpPage backwards={this.props.backwards}/> : null}

                     
            </main>
         );
    }
}

/*
menuChosen:         This is what menu has been chosen on the sidebar
onChooseCategory:   This is what category has been chosen
selectPage:         This is what page has to be displayed
specificItemChosen: This is what item has been selected and has to be loaded up
*/
 
export default Content;