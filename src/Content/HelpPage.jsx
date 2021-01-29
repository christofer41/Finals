import React, { Component } from 'react';
import "../Styles/helpPage.css"

import HelpFrontPage from "./helpComponents/HelpFrontPage"
import HelpPageOthers from "./helpComponents/HelpPageOthers"
import HelpComputers from "./helpComponents/HelpComputers"

class HelpPage extends Component {
    state = { 
        page: 1
     }
     changeHelpPage = (number) => {
        this.setState({page: number})
     }

     reloadPage = () => {
        this.setState({page:1})
     }


    render() { 
        return ( 
            <div id="helpPage">
                {this.state.page !== 1 ? <button onClick={this.reloadPage} id="backButton">Back</button> : null}
                {this.state.page === 1 ? <HelpFrontPage changeHelpPage={this.changeHelpPage}/> : null}
                {this.state.page === 2 ? <HelpPageOthers/> : null}
                {this.state.page === 3 ? <HelpComputers/> : null}
            </div>
         );
    }
}
 
export default HelpPage;