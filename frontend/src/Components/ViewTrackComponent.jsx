import React, { Component } from 'react';
import TrackService from '../Services/TrackService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';


class ViewTrackComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            track:{}
        }
    }

    componentDidMount(){
        TrackService.getTrackById(this.state.id).then((res) => {
            this.setState({track:res.data})
        });
    }
    cancel(){
        this.props.history.push('/compact_disc')
    }
    

    render() {
        console.log(this.state)
        return (
            <div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
                <div id="card" className = "card bg-dark text-white text-center">
                <img className="card-img-top" src="https://www.virtualdj.com/images/playlists/default_coverart.jpg" alt="Album Cover"/>
                    <div className = "card-body text-center">
                
                
  <br></br>
                    <div id="name" className = "row">
                      
                        <div id="name" className="h4"> {this.state.track.name}</div>
                        </div>
                        <div className = "artist">
    
                            <div id="artist" className="h5">{this.state.track.artist}</div>
                        </div>
                        <div className = "row">
                           
                            <div id="album" className="h6"> {this.state.track.album }</div>
                        </div> 
                        
                    </div>
                </div>
                <br></br>
                <div className="text-center">
                <button id="button" className="btn btn-danger" onClick={this.cancel.bind(this)}><FontAwesomeIcon icon={faArrowLeft} /></button> 
                </div>
            </div>
        )
    }

}

export default ViewTrackComponent;