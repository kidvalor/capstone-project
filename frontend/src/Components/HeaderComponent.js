import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Untitled from "../images/MixtapeMakerIcon.png"

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    cancel(){
        this.props.history.push('/compact_disc')
    }
render() {
    return(
        <div>
            <header>
                <nav id="navbar" className="navbar navbar-expand=md navbar=dark bg-dark fixed-top"> 
            <div className="navbar_brand">
            <a id="header" class="navbar-brand" href="#">
                <img id="header_icon" src={Untitled} alt="Mixtape Maker"/>
                Mixtape Maker
                </a>
               </div>
                </nav>
            </header>
        </div>
    )
}
}

export default HeaderComponent;

