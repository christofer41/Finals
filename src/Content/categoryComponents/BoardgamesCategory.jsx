import React, { Component } from 'react';
import "../../Styles/Category.css"

class BoardgamesCategory extends Component {
    state = { 
        boardGames: "pcmcat254300050007",
        arcade: "pcmcat1500927006607",
        licence: "pcmcat748302046148",
        dart: "pcmcat253100050000",
        cards: "pcmcat254300050006"
     }


    render() { 
        return ( 
            <React.Fragment>

                <div id="categoryTop"> 
                    {/*Depending on what menu was chosen, a different header will be displayed*/}
                    <h1>Brädspel & Leksaker</h1>

                    <div id="categorySlideshow">

                    </div>
                </div>
                <div id="categoryBottom">
                    <div id="categoryItemsOne">
                        {/*We send the id for the category AND the number for the correct page*/}
                        <div onClick={() => {this.props.onChooseCategory(this.state.boardGames); this.props.selectPage(3);}}>
                            <h2>Brädspel</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.arcade); this.props.selectPage(3);}}>
                            <h2>Retro Arkad</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.licence); this.props.selectPage(3);}}>
                            <h2>Licensierade samlarföremål</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.dart); this.props.selectPage(3);}}>
                            <h2>Dart- och darttavlor</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.cards); this.props.selectPage(3);}}>
                            <h2>Kort & Tärningar</h2>
                        </div>
                    </div>
                </div>
          </React.Fragment>
         );
    }
}
 
export default BoardgamesCategory;