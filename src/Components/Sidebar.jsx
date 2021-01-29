import React, { Component } from 'react';
import '../App.css';

class Sidebar extends Component {





    render() { 
        return ( 
            <aside id="sideBar">
                <div id="topSidebar">
                    <button onClick={() => this.props.clickSidebar(2, "computer")}>Dator & Surfplatta</button>
                    <button onClick={() => this.props.clickSidebar(2, "games")}>Dator & TvSpel</button>
                    <button onClick={() => this.props.clickSidebar(2, "board")}>Brädspel & Leksaker</button>
                </div>
                <div id="bottomSidebar">
                    <button onClick={() => this.props.clickSidebar(6, "help")}>Be om hjälp</button>
                </div>
            </aside>
        );
    }
}
 
export default Sidebar;