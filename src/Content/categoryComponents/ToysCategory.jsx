import React, { Component } from 'react';
import "../../Styles/Category.css"

class ToysCategory extends Component {
    state = { 
        laptop: "abcat0502000",
        computer: "abcat0507000",
        tablet: "pcmcat209000050006",
        monitor: "abcat0509000",
        headphones: "pcmcat230800050019",
        mouseKeyboard: "abcat0513000",
        printer: "abcat0511001"
     }


    render() { 
        return ( 
            <React.Fragment>

                <div id="categoryTop"> 
                    {/*Depending on what menu was chosen, a different header will be displayed*/}
                    <h1>Leksaker</h1>

                    <div id="categorySlideshow">

                    </div>
                </div>
                <div id="categoryBottom">
                    <div id="categoryItemsOne">
                        {/*We send the id for the category AND the number for the correct page*/}
                        <div onClick={() => {this.props.onChooseCategory(this.state.laptop); this.props.selectPage(3);}}>
                            <h2>Bärbara Datorer</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.computer); this.props.selectPage(3);}}>
                            <h2>Stationära Datorer</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.tablet); this.props.selectPage(3);}}>
                            <h2>Surfplatta</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.monitor); this.props.selectPage(3);}}>
                            <h2>Skärmar</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.headphones); this.props.selectPage(3);}}>
                            <h2>Hörlurar</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.mouseKeyboard); this.props.selectPage(3);}}>
                            <h2>Mus & Tangentbord</h2>
                        </div>
                        <div onClick={() => {this.props.onChooseCategory(this.state.printer); this.props.selectPage(3);}}>
                            <h2>Printers</h2>
                        </div>
                    </div>
                </div>
          </React.Fragment>
         );
    }
}
 
export default ToysCategory;