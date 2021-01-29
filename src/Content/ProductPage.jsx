import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset} from '@fortawesome/free-solid-svg-icons'
import "../Styles/productPage.css"

import Support from "../Content/contentComponents/Support"

class ProductPage extends Component {
    state = { 
        showChatt: false,
     }



     hideChatt = () => {
        this.setState({showChatt: false})
    }

    showChatt = () => {
       this.setState({showChatt: true})
   }



    render() { 
        return ( 
            <React.Fragment>
                {this.state.showChatt === true ? <Support hideChatt={this.hideChatt}/> : null}


                <div id="productPageTop">
                    <div id="ProductPageSlideshowContainer">
                        <div id="ProductPageSlideshow">
                            <img src={this.props.chosenProduct.image} alt=""/>
                        </div>
                    </div>
                    <div id="productPagePaymentInfo">
                        <div id="productPageStatus">
                            <h2>I lager</h2>
                            <h3>Skickas inom 2-3 Arbetsdagar</h3>
                        </div>
                        <div id="productPagePrice">
                            <h2>Pris: {this.props.chosenProduct.price}:-</h2>
                            <button onClick={() => this.props.addItemToCart(this.props.chosenProduct)}>Kägg till i kundvagnen</button>
                        </div>
                    </div>
                </div>
                <div id="productPageBottom">
                    <div id="ProductPageInfo">
                        <h3>{this.props.chosenProduct.name}</h3>
                    </div>
                    <div id="ProductPageFooter">
                        <div>
                            <p>Vid köp så accepterar du att ett fåtal företag äger världen</p>
                        </div>
                        <div>
                            <h2>Be en anställd om hjälp ---</h2>
                            <div onClick={this.showChatt}><FontAwesomeIcon icon={faHeadset} size="4x"/></div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProductPage;