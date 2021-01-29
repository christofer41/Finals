import React, { Component } from 'react';
import "../Styles/payment.css"

class Payment extends Component {
    state = { 
        customerInfo: {
            nameInput: "",
            adressInput: "",
            mobileInput: "",
            emailInput: "",
            postNumberInput: "",
            localeInput: ""
        },
        paymentChosen: "card",
        paymentFilledIn: {
            card: false,
            month: false,
            cvc: false,

            klarna: false,
            swish: false
        }
     }

     checkForValidString (symbols) {


        var regex=/^[a-zA-Z]+$/;
        if (!symbols.match(regex))
        {
            alert("Var vänlig och använd bokstäver");
            return "";
            
        } else {
            return symbols;
        }
     }

     checkForValidNumber (symbols) {


        var regex=/^[0-9]+$/;
        if (!symbols.match(regex))
        {
            alert("Var vänlig och använd nummer");
            return "";
        } else {
            return symbols
        }

    }
     


     saveCustomerInfo = (event) => {
        console.log(event.target.value)
        let stateCopy = {...this.state.customerInfo}


        if (event.target.id == "nameInput") {

            let inputValue = event.target.value
            stateCopy.nameInput = this.checkForValidString(inputValue);

            if (stateCopy.nameInput == "") {
                event.target.value = "";
            }


        }

        if (event.target.id == "adressInput") {

            let inputValue = event.target.value
            stateCopy.adressInput = this.checkForValidString(inputValue);

            if (stateCopy.adressInput == "") {
                event.target.value = "";
            }
        }

        if (event.target.id == "mobileInput") {

            let inputValue = event.target.value
            stateCopy.mobileInput = this.checkForValidNumber(inputValue);

            if (stateCopy.mobileInput == "") {
                event.target.value = "";
            }
        }

        if (event.target.id == "emailInput") {

            stateCopy.emailInput = event.target.value

        }

        if (event.target.id == "postNumberInput") {

            let inputValue = event.target.value
            stateCopy.postNumberInput = this.checkForValidNumber(inputValue);

            if (stateCopy.postNumberInput == "") {
                event.target.value = "";
            }
        }

        if (event.target.id == "localeInput") {

            let inputValue = event.target.value
            stateCopy.localeInput = this.checkForValidString(inputValue);

            if (stateCopy.localeInput == "") {
                event.target.value = "";
            }
        }

        this.setState({customerInfo: stateCopy})
     }






     switchPayment = (event) => {
         let card = document.getElementById("cardPay");
         let klarna = document.getElementById("klarnaPay");
         let swish = document.getElementById("SwishPay");

         let chosenPayment;

        if(event.target.innerHTML == "Kortbetalning") {
            card.style.display = "flex";
            klarna.style.display = "none";
            swish.style.display = "none";

            chosenPayment = "card"
        }
        if(event.target.innerHTML == "Klarna") {
            card.style.display = "none";
            klarna.style.display = "flex";
            swish.style.display = "none";

            chosenPayment = "klarna"
        }
        if(event.target.innerHTML == "Swish") {
            card.style.display = "none";
            klarna.style.display = "none";
            swish.style.display = "flex";

            chosenPayment = "swish"
        }

        this.resetPayment();
        this.setState({paymentChosen: chosenPayment})
     }


     checkIfValidPayment = (event) => {
         let valueSaved = event.target;
         console.log(valueSaved.id)

         let checkIfOnlyNumbers = this.checkForValidNumber(valueSaved.value)

         let stateCopy = {...this.state.paymentFilledIn}

         if(checkIfOnlyNumbers == ""){
             event.target.value = ""
             return;
         }

         if(valueSaved.id == "cardNumber") {
             console.log(valueSaved.value.length)
             if(valueSaved.value.length == 12) {
                stateCopy.card = true;
             }
         }
         if(valueSaved.id == "cardMonth") {
            if(valueSaved.value.length == 4) {
                stateCopy.month = true;
             }
             
        }
        if(valueSaved.id == "cardCvc") {
            if(valueSaved.value.length == 3) {
                stateCopy.cvc = true;
             }
             
        }

        this.setState({paymentFilledIn: stateCopy})
     }


     resetPayment = () => {
        let cardInput = document.getElementById("cardNumber").value = "";
        let month = document.getElementById("cardMonth").value = "";
        let cvc = document.getElementById("cardCvc").value = "";


        const resetPayment = {
            card: false,
            month: false,
            cvc: false,

            klarna: false,
            swish: false
        }
        this.setState({paymentFilledIn: resetPayment})
     }

     setDelivery = (event) => {

        let delBoxes = document.getElementsByClassName("deviveryBox");

        for (let i = 0; i < delBoxes.length; i++) {
            delBoxes[i].style.backgroundColor = ""
            
        }

        console.log(event.target)
        let target = event.target;
        if (target.tagName == "P") {
            target = target.parentElement;
        }
        target.style.backgroundColor = "lightblue"
     }




     selectKlarna = (event) => {
        console.log(event.target)


        let klarnaChoice = document.getElementsByClassName("klarnaChoice");

        for (let i = 0; i < klarnaChoice.length; i++) {
            klarnaChoice[i].style.backgroundColor = ""
            
        }

        console.log(event.target)
        let target = event.target;
        if (target.tagName == "P") {
            target = target.parentElement;
        }
        target.style.backgroundColor = "lightblue"

        let array = {
            card: false,
            month: false,
            cvc: false,

            klarna: true,
            swish: false
        }

        this.setState({paymentFilledIn: array})
     }

    render() { 
        return ( 
            <div id="paymentMain">
                <div id="paymentContainer">
                    <div id="infoInput">  
                        <label htmlFor="nameInput">För- och Efternamn</label>
                        <input onKeyUp={this.saveCustomerInfo} id="nameInput" placeholder="John Doe" type="text"/>

                        <label htmlFor="emailInput">E-post adress</label>
                        <input onKeyUp={this.saveCustomerInfo} id="emailInput" placeholder="Din e-postadress" type="text"/>

                        <label htmlFor="numberInput">Mobilnummer</label>
                        <input onKeyUp={this.saveCustomerInfo} id="mobileInput" placeholder="Mobilnummer" type="text"/>

                        <label htmlFor="adressInput">Adress</label>
                        <input onKeyUp={this.saveCustomerInfo} id="adressInput" placeholder="Adress" type="text"/>

                        <label htmlFor="postNumberInput">Postnr</label>
                        <input onKeyUp={this.saveCustomerInfo} id="postNumberInput" placeholder="xxxxx" type="text"/>

                        <label htmlFor="localeInput">Ort</label>
                        <input onKeyUp={this.saveCustomerInfo} id="localeInput" placeholder="Ort" type="text"/>
                    </div>
                    <div id="deliveryAndPaymentInfo">
                        <div id="deliveryBox">
                            <h2>Leverans Alternativ</h2>
                            <div id="deliveryChoices">
                                <div className="deviveryBox" onMouseDown={this.setDelivery} onClick={() => this.props.selectDelivert(1)}>
                                    <p>Bring</p>
                                    <p>1-3 arbetsdagar</p>
                                    <p>79Kr</p>
                                </div>
                                <div className="deviveryBox" onMouseDown={this.setDelivery} onClick={() => this.props.selectDelivert(2)}>
                                    <p>DHL</p>
                                    <p>1-2 arbetsdagar</p>
                                    <p>99Kr</p>
                                </div>
                                <div className="deviveryBox" onMouseDown={this.setDelivery} onClick={() => this.props.selectDelivert(3)}>
                                    <p>Postnord</p>
                                    <p>2-3 arbetsdagar</p>
                                    <p>0Kr</p>
                                </div>
                            </div>
                        </div>
                        <div id="PaymentBox">
                            <div id="paymentOptions">
                                <button onClick={this.switchPayment}>Kortbetalning</button>
                                <button onClick={this.switchPayment}>Klarna</button>
                                <button onClick={this.switchPayment}>Swish</button>
                            </div>
                            <div id="paymentInfo">
                                <div id="cardPay">
                                    <input onKeyUp={this.checkIfValidPayment} id="cardNumber" placeholder="Kortnummer" type="text"/>
                                    <input onKeyUp={this.checkIfValidPayment} id="cardMonth" placeholder="Månad/År" type="text"/>
                                    <input onKeyUp={this.checkIfValidPayment} id="cardCvc" placeholder="CvC" type="text"/>
                                </div>
                                <div id="klarnaPay">
                                    <div className="klarnaChoice" onClick={this.selectKlarna}><p>Betala inom 14 dagar</p></div>
                                    <div className="klarnaChoice" onClick={this.selectKlarna}><p>Månadsfaktura</p></div>
                                </div>
                                <div id="SwishPay">
                                    <p>Betala enkelt med Swish!</p>
                                    <p>Betala med samma nummer som du skrev in på Mobilnummer spalten!</p>
                                </div>
                            </div>

                        </div>
                        <button id="orderButton" onClick={() => {this.props.showReciept(this.state.paymentFilledIn); this.props.paymentMethod(this.state.paymentChosen); this.props.saveInfo(this.state.customerInfo)}}>Slutför Ordern</button>
                    </div>



                </div>
            </div>
         );
    }
}
 
export default Payment;


