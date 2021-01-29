import React, { Component } from 'react';
import "../Styles/frontPageCSS.css"

import picture from "../img/game.jpg"


class Frontpage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div id="frontpageTop">
                    <div id="frontpageSlideshow">
                        <img src={picture} alt=""/>
                    </div>
                    <div id="frontPageNews">
                        <div id="frontPageNewsOne">
                            <h2>Ny firma tar över hemsidan!</h2>
                        </div>
                        <div id="frontPageNewsTwo">
                            <h2>Tal om vårrea</h2>
                        </div>
                        <div id="frontPageNewsThree">
                            <h2>Covid Information</h2>
                        </div>
                    </div>
                </div>
                <div id="frontpageBottom">
                    <div className="frontPageNewsItems">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div className="frontPageNewsItems">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div className="frontPageNewsItems">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div className="frontPageNewsItems">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Frontpage;