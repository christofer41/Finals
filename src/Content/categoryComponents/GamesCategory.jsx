import React, { Component } from 'react';
import "../../Styles/Category.css"

class GamesCategory extends Component {
    state = { 
        pc: "pcmcat1497469894107",
        playstationFour: "pcmcat296300050018",
        playstationFourConsole: "pcmcat296300050017",
        playstationFive: "pcmcat1587395108347",
        playstationFiveConsole: "pcmcat1587395025973",
        xboxOne: "pcmcat303600050005",
        xboxOneConsole: "empty",
        xboxSeriesX: "pcmcat1586901082512",
        xboxSeriesXConsole: "pcmcat1586900952752",
        switch: "pcmcat1484080052161",
        switchConsole: "pcmcat1484077694025"

     }


    render() { 
        return ( 
            <React.Fragment>

                <div id="categoryTop"> 
                    {/*Depending on what menu was chosen, a different header will be displayed*/}
                    <h1>Dator & TvSpel</h1>

                    <div id="categorySlideshow">

                    </div>
                </div>
                <div id="categoryBottom">
                    <div id="categoryItemsOne">
                        {/*We send the id for the category AND the number for the correct page*/}
                        <div onClick={() => {this.props.onChooseCategory(this.state.pc); this.props.selectPage(3);}}>
                            <h2>Pc Spel</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.playstationFour); this.props.selectPage(3);}}>
                            <h2>Playstation 4 Spel</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.playstationFourConsole); this.props.selectPage(3);}}>
                            <h2>Playstation 4 Konsoller</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.playstationFive); this.props.selectPage(3);}}>
                            <h2>Playstation 5 Spel</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.playstationFiveConsole); this.props.selectPage(3);}}>
                            <h2>Playstation 5 Konsoller</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.xboxOne); this.props.selectPage(3);}}>
                            <h2>Xbox One Spel</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.xboxOneConsole); this.props.selectPage(3);}}>
                            <h2>Xbox One Konsoller</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.xboxSeriesX); this.props.selectPage(3);}}>
                            <h2>Xbox Series X Spel</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.xboxSeriesXConsole); this.props.selectPage(3);}}>
                            <h2>Xbox Series X Konsoller</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.switch); this.props.selectPage(3);}}>
                            <h2>Nintendo Switch Spel</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.switchConsole); this.props.selectPage(3);}}>
                            <h2>Nintendo Switch Konsoller</h2>
                        </div>

                    </div>
                </div>
          </React.Fragment>
         );
    }
}
 
export default GamesCategory;