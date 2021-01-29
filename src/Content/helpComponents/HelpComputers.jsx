import React, { Component } from 'react';
import "../../Styles/helpPageComponents.css"

class HelpComputers extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                
                
                    <div id="helpTop"> 
                        <h1>Hjälp med produkter?</h1>
                        <h3>Vi jobbar just nu med att få informationen direkt på hemsidan, men för nu så har vi dessa länkar som vi hoppas hjälper lite!</h3>

                        <div id="helpSlideShop">

                        </div>
                    </div>
                    <div id="helpBottom">
                        <div id="helpAboutContent">
                            <div onClick={this.showChatt}>
                                <h2>Här är en länk om Datorer</h2>
                                <h4>LINK</h4>
                            </div>
                            <div>
                                <h2>Här är en länk om Spel</h2>
                                <h4>LINK</h4>
                            </div>
                            <div>
                                <h2>Här är en länk om Samlarföremål</h2>
                                <h4>LINK</h4>
                            </div>
                        </div>
                    </div>
                    
                
          </React.Fragment>
         );
    }
}
 
export default HelpComputers;