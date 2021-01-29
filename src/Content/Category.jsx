import React, { Component } from 'react';
import "../Styles/Category.css"

import ComputerCategory from "./categoryComponents/ComputerCategory"
import GamesCategory from "./categoryComponents/GamesCategory"
import BoardgamesCategory from "./categoryComponents/BoardgamesCategory"
import ToysCategory from "./categoryComponents/ToysCategory"

class Category extends Component {


     componentDidMount() {
         console.log(this.props.menuChosen.content)


    }


    render() { 
        return ( 
            <React.Fragment>
                {this.props.menuChosen.content === "computer" ? <ComputerCategory menuChosen={this.props.menuChosen} onChooseCategory={this.props.onChooseCategory} selectPage={this.props.selectPage}/> : null}
                {this.props.menuChosen.content === "games" ? <GamesCategory menuChosen={this.props.menuChosen} onChooseCategory={this.props.onChooseCategory} selectPage={this.props.selectPage}/> : null}
                {this.props.menuChosen.content === "board" ? <BoardgamesCategory menuChosen={this.props.menuChosen} onChooseCategory={this.props.onChooseCategory} selectPage={this.props.selectPage}/> : null}
                {this.props.menuChosen.content === "toys" ? <ToysCategory menuChosen={this.props.menuChosen} onChooseCategory={this.props.onChooseCategory} selectPage={this.props.selectPage}/> : null}
            </React.Fragment>
         );
    }
}
 
export default Category;