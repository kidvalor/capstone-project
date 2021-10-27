import React, { Component } from 'react';
import TrackService from '../Services/TrackService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

class UpdateTrackComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            name:'',
            artist:'',
            album:''
            
        }
        this.idHandler = this.idHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeArtistHandler = this.changeArtistHandler.bind(this);
        this.changeAlbumHandler = this.changeAlbumHandler.bind(this);
        this.updateTrack = this.updateTrack.bind(this);
        }

        componentDidMount(){
            TrackService.getTrackById(this.state.id).then((res) => {
                let track = res.data;
                this.setState({name: track.name, artist: track.artist, album: track.album});
            });
        }
        updateTrack = (e) => {
            e.preventDefault();
            let track = {
                id: this.state.id,
                name: this.state.name,
                artist: this.state.artist,
                album: this.state.album
               
            };
            console.log('track => ' + JSON.stringify(track));
            console.log('id => ' + JSON.stringify(this.state.id));
            TrackService.updateTrack(track, this.state.id).then((res) => {
                this.props.history.push('/compact_disc');
            });
        }

        idHandler=(event) => {
            this.setState({id: event.target.value});
        }
        changeNameHandler=(event) => {
            this.setState({name: event.target.value});
        }
        changeArtistHandler=(event) => {
            this.setState({artist: event.target.value});
        }
        changeAlbumHandler=(event) => {
            this.setState({album: event.target.value});
        }

        cancel(){
            this.props.history.push('/compact_disc')
        }

        render() {
            return (
                <div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
                    <div className="container">
                    <div className="text-center"> 
                    <h4 className="text-center text-white">Update Track</h4>
                        <div id="card" className="card bg-dark text-white col-md-6 offset-md-3 offset-md-3">
                        
                        <div className="card-body">
                        <form>
                          <div className="form-group">
                              <label>Track ID: </label>
                              <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                              </div>
                              <br></br>
                <div className="form-group">
          <label>Track Name: </label>
          <input placeholder="Name" name="name" className="form-control"
             value={this.state.name} onChange={this.changeNameHandler} />
       </div>
       <br></br>
                              <div className="form-group">
                                      <label>Track Artist: </label>
                                      <input placeholder="Artist" name="artist" className="form-control"
                                         value={this.state.artist} onChange={this.changeArtistHandler} />
                                   </div> 
                                   <br></br>
                            <div className="form-group">
                                      <label>Track Album: </label>
                                      <input placeholder="Album" name="album" className="form-control"
                                         value={this.state.album} onChange={this.changeAlbumHandler} />
                                   </div>
                         
                        </form>
                        </div>
                        </div>
                        <br></br>
                        <button  id="button" className="btn btn-success mx-2" onClick={this.updateTrack}><FontAwesomeIcon icon={faCheck} /></button>
                        <button id="button" className="btn btn-danger" onClick={this.cancel.bind(this)}><FontAwesomeIcon icon={faTimes} /></button>   
                    </div>
                    </div>
                </div>
            )
        }
}

export default UpdateTrackComponent;