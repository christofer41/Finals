import React, { Component } from 'react';
import "../../Styles/helpPage.css"

import Support from "../contentComponents/Support"

class HelpPage extends Component {
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
                
                    <div id="helpTop"> 
                        <h1>Välkommen till hjälpsidan!</h1>
                        <h3>Var vänlig och välj ett val nedanför!</h3>

                        <div id="helpSlideShop">

                        </div>
                    </div>
                    <div id="helpBottom">
                        <div id="helpItems">
                            <div onClick={this.showChatt}>
                                <h2>Prata med en anställd</h2>
                            </div>
                            <div onClick={() => {this.props.changeHelpPage(2)}}>
                                <h2>Se vad andra tycker</h2>
                            </div>
                            <div onClick={() => {this.props.changeHelpPage(3)}}>
                                <h2>Om Datorer, Spel, och Samlarföremål</h2>
                            </div>
                        </div>
                    </div>
                    
                
          </React.Fragment>
         );
    }
}
 
export default HelpPage;