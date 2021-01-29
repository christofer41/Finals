import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header"
import MobileHeader from "./Components/MobileHeader"
import Sidebar from "./Components/Sidebar"
import Content from "./Components/Content"

import HamburgerMenu from "./Components/HamburgerMenu"

import Cart from "./Components/Cart"

class App extends Component {

  state = {
    pageChosen: {
      page: 1,
      content: "computer"
    },
    itemToCart: [],
    totalPrice: 0,
    showHamburgerMenu: false
  }

  //What Maincategory we choose
 handleIncrement = (page, contents) => {
    console.log("clicked", page, contents)
    let number = page

    

    let array = {
      page: number,
      content: contents
    }

    this.setState({pageChosen:array})
    
}

//When we change the content page
changePage = (page) => {
  console.log(page + " changePage")
  let number = page
  


  let thePage = {...this.state.pageChosen}
  thePage.page = number

  this.setState({pageChosen:thePage})
}

//An item has been selected
itemSelected = (page) => {
  console.log(page + " itemSelected")
  let number = page

  let array = {
    page: number,
    content: ""
  }

  this.setState({pageChosen:array})
}

addItemToCart = (item) => {
  console.log(item)

  let array = {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    number: this.state.itemToCart.length,
    amount: 1,
    priceForAll: item.price
  }

  const itemToCartArray = [...this.state.itemToCart]


  for (let i = 0; i < itemToCartArray.length; i++) {
    if (item.id === itemToCartArray[i].id) {
      itemToCartArray[i].amount ++;
      itemToCartArray[i].priceForAll = item.price * itemToCartArray[i].amount ;
      this.setState({itemToCart: itemToCartArray});
      this.calculateTotalPrice();
      return;
    }
  }
  
  itemToCartArray.push(array);
  this.setState({itemToCart: itemToCartArray});
  console.log(this.state.itemToCart)

  this.calculateTotalPrice();

}

calculateTotalPrice = () => {

  setTimeout(() => { 
    let itemToCartArray = [...this.state.itemToCart]
    let combinedPrice = 0;
  
    for (let i = 0; i < itemToCartArray.length; i++) {
      combinedPrice = combinedPrice + itemToCartArray[i].priceForAll
      console.log(combinedPrice)
    }
  
    this.setState({totalPrice: combinedPrice});
}, 300);  

}

backwards = (number) => {
  let thePage = {...this.state.pageChosen}
  thePage.page = number
  console.log(thePage)

  this.setState({pageChosen: thePage});
}


displayHamburger = () => {

  if (this.state.showHamburgerMenu === false) {
    this.setState({showHamburgerMenu: true});
  } else {
    this.setState({showHamburgerMenu: false});
  }
}

upTheNumber = (number) => {
  console.log(number)


  let itemToCartArray = [...this.state.itemToCart]

  itemToCartArray[number].amount++;
  itemToCartArray[number].priceForAll =  itemToCartArray[number].price * itemToCartArray[number].amount ;

  this.setState({itemToCart: itemToCartArray});


  this.calculateTotalPrice();
}





render() { 
  return (
    <React.Fragment>

      {this.state.showHamburgerMenu !== false  ? <HamburgerMenu displayHamburger={this.displayHamburger} selectPage={this.changePage} clickHeader={this.handleIncrement} clickSidebar={this.handleIncrement} /> : null}
      
      <MobileHeader displayHamburger={this.displayHamburger} clickHeader={this.handleIncrement}/>
      <Header upTheNumber={this.upTheNumber} addItemToCart={this.state.itemToCart} selectPage={this.changePage} clickHeader={this.handleIncrement}/>
      {this.state.pageChosen.page !== 5  ? <Sidebar clickSidebar={this.handleIncrement}/> : null}
      {this.state.pageChosen.page !== 5  ? <Content backwards={this.backwards} addItemToCart={this.addItemToCart} menuChosen={this.state.pageChosen} selectPage={this.changePage} specificItemChosen={this.itemSelected}/> : null}
      {this.state.pageChosen.page === 5 ? <Cart upTheNumber={this.upTheNumber} addItemToCart={this.state.itemToCart} displayTotalPrice={this.state.totalPrice}/> : null}
      
      
      
    </React.Fragment>
  );
}
}

export default App;
