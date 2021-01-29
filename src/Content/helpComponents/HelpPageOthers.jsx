import React, { Component } from 'react';
import "../../Styles/helpPageComponents.css"

class HelpPageOthers extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                
                
                    <div id="helpTop"> 
                        <h1>Välkommen till Recentionsidan!</h1>
                        <h3>Här kan du se vad andra tycker om våra produkter!</h3>

                        <div id="helpSlideShop">

                        </div>
                    </div>
                    <div id="helpBottom">
                        <div id="customerReviews">
                            <div onClick={this.showChatt}>
                                <h4>My Arcade - Dig Dug Micro Player - Gray/Black</h4>
                                <p>Jonas Bengtsson: Underbar leksak för alla åldrar</p>
                            </div>
                            <div>
                                <h4>Amazon - Fire 7 2019 release - 7" - Tablet - 16GB - Black</h4>
                                <p>Anders: En bra fungerade platta</p>
                            </div>
                            <div>
                                <h4>Funko - Pop! Funkoverse Harry Potter 101 Strategy Game</h4>
                                <p>Anonym: Kul med Harry Potter Funkpops</p>
                            </div>
                            <div>
                                <h4>Sony - PlayStation 5 Console</h4>
                                <p>Jonas Bengtsson: En bra konsoll, men svår att få tag i.</p>
                            </div>
                            <div>
                                <h4>FIFA 20 Ultimate Team 100 Points - Windows [Digital]</h4>
                                <p>Bengt: Jag har problem.. köp ej</p>
                            </div>
                        </div>
                    </div>
                    
                
          </React.Fragment>
         );
    }
}
 
export default HelpPageOthers;