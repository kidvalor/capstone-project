import React, { Component } from 'react';
import TrackService from '../Services/TrackService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faTrash, faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';


class ListTrackComponent extends Component {
constructor(props){
    super(props)

    this.state = {
        compact_disc: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.editTrack = this.editTrack.bind(this);
    this.deleteTrack = this.deleteTrack.bind(this);
    this.viewTrack = this.viewTrack.bind(this);
}
componentDidMount(){
    TrackService.getTracks().then((res) => {
        this.setState({compact_disc:res.data});
    });
}

deleteTrack(id){
    TrackService.deleteTrack(id).then( res => {
        this.setState({compact_disc: this.state.compact_disc.filter(track => track.id !== id)});
    });
}
viewTrack(id){
    this.props.history.push(`/view-track/${id}`);
}
editTrack(id){
    this.props.history.push(`/update-track/${id}`);
}

addTrack(){
    this.props.history.push(`add-track/_add`);
}

render() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">   
            <h4 className="text-center text-white">Track List</h4>
            <div className="row"> 
            <table>
            <tr>
            
            
            </tr>
            </table>
            </div>
            <br></br>
           
            <div className = "row table-responsive">
                <table id="table" className = "table table-borderless table-hover table-dark">

                    <thead class="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th><button className="btn btn-primary btn-dark btn-sm btn-outline-warning" id="add_button" onClick={this.addTrack}><FontAwesomeIcon icon={faPlus} /></button> Add Track
</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.compact_disc.map(
                                track =>
                                <tr key = {track.id}>
                                
                                    <td id="name" className="name">{track.name}</td>
                                    <td id="artist" className="artist">{track.artist}</td>
                                    <td id="album" className="album">{track.album}</td>
                                    

                                  <td>
                                  <button id="action_button" onClick={ () => this.viewTrack(track.id)} className="btn btn-dark mx-1"><FontAwesomeIcon icon={faEye} /></button>
                                      <button id="action_button" onClick={ () => this.editTrack(track.id)} className="btn btn-dark mx-1"><FontAwesomeIcon icon={faEdit} /></button>  
                                      <button id="action_button" onClick={ () => this.deleteTrack(track.id)} className="btn btn-dark" ><FontAwesomeIcon icon={faTrash} /></button>
                                             </td>  
                                             
                                        </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        
    )
}
}

export default ListTrackComponent