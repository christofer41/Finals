import React, { Component } from 'react';
import "../Styles/cartStyle.css"
import Product from "./cartComponents/Product"

import Payment from "./Payment"
import Reciept from "./cartComponents/Reciept"

class Cart extends Component {
    state = { 
        delivery: {
            company: "",
            time: "",
            price: 0
        },
        customerInfo: {
            name: "",
            adress: "",
            mobile: "",
            email: "",
            postNr: "",
            locale: ""
        },
        payChoice: ""
     }


     setActiveDelivery = (delivery) => {
         let array = {}

         if (delivery == 1) {
            array = {
                company: "Bring",
                time: "1-3 Arbetsdagar",
                price: 79
            }

        } else if (delivery == 2) {
            array = {
                company: "DHL",
                time: "1-2 Arbetsdagar",
                price: 99
            }
            
        } else if (delivery == 3) {
            array = {
                company: "Postnord",
                time: "2-3 Arbetsdagar",
                price: 0
            }
            
        }

        this.setState({delivery: array})
     }



     checkInfoInput = (payment) => {
        setTimeout(() => { 


            const customerInfo = {...this.state.customerInfo}


            if(customerInfo.name == "" || customerInfo.name == null) {
                alert("Var vänlig och fyll i ditt namn")
                return;
            }
            
            if(customerInfo.adress == "" || customerInfo.adress == null) {
                alert("Var vänlig och fyll i din adress")
                return;
            }
            
            if(customerInfo.mobile == "" || customerInfo.mobile == null) {
                alert("Var vänlig och fyll i ditt mobilnummer")
                return;
            }
            
            if(customerInfo.email == "" || customerInfo.email == null) {
                alert("Var vänlig och fyll i din email adress")
                return;
            }
            
            if(customerInfo.postNr == "" || customerInfo.postNr == null) {
                alert("Var vänlig och fyll i ditt postnummer")
                return;
            }
            
            if(customerInfo.locale == "" || customerInfo.locale == null) {
                alert("Var vänlig och fyll i din postort")
                return;
            } 
            
            this.checkDeliveryChosen(payment);
        }, 500);  
     }

     checkDeliveryChosen = (payment) => {
        const delivery = {...this.state.delivery}

        if (delivery.company == "" || delivery.company == null) {
            alert("Var vänlig och välj ett leverans alternativ!")
            return;
        }

        this.checkPayment(payment)
        
     }

    checkPayment = (payment) => {

        if (this.state.payChoice == "card") {
            if(payment.card == false && payment.month == false && payment.cvc == false) {
                alert("var vänlig och fyll i dina kort uppgifter")
                return;
            }
        }

        if (this.state.payChoice == "klarna") {
            if(payment.klarna == false) {
                alert("var vänlig och välj dina klara betalningssätt")
                return;
            }
        }

        if (this.state.payChoice == "swish") {
        }

        this.showReciept();
     }

    showReciept = () => {
        const reciept = document.getElementById("recieptMain");

        if (reciept.style.display != "flex") {
            reciept.style.display = "flex"
        }else {
            reciept.style.display = "none"
        }
    }

    saveInfo = (info) => {
        console.log(info)


        let array = {

          name: info.nameInput,
          adress: info.adressInput,
          mobile: info.mobileInput,
          email: info.emailInput,
          postNr: info.postNumberInput,
          locale: info.localeInput
        }
    
      
        this.setState({customerInfo: array});
      
    }

    paymentMethod = (info) => {
        this.setState({payChoice: info});
    }

    turnDownReciept = () => {
        console.log("hi")

        document.getElementById("recieptMain").style.display = "none"
    }



    render() { 
        return ( 

            <div id="cartDiv">
                <Reciept turnDownReciept={this.turnDownReciept} displayTotalPrice={this.props.displayTotalPrice} deliveryInfo={this.state.delivery} saveInfo={this.state.customerInfo} addItemToCart={this.props.addItemToCart}/>
                <div id="cartContent">
                    <div id="cartBox">
                        <div id="productBoxforCart">
                        {this.props.addItemToCart.map(product => <Product key={product.id} upTheNumber={this.props.upTheNumber} addItemToCart={this.props.addItemToCart[product.number]}/>)}
                        </div>
                        <div id="priceBoxForCart">
                            <h2>{this.props.displayTotalPrice + " :-"}</h2>
                        </div>
                    </div>
                    <div id="payButtonDiv">
                        <Payment paymentMethod={this.paymentMethod} saveInfo={this.saveInfo} showReciept={this.checkInfoInput} selectDelivert={this.setActiveDelivery}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Cart;