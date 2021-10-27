import React, { Component} from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
render(){
    return (
        <div class="bg-dark">
            <footer className = "footer">
                <span className="text-muted">Mixtape Maker, All Rights Reserved 2021</span>
            </footer>
        </div>
    )
}



}

export default FooterComponent;