import React, { Component} from 'react';
import TrackService from '../Services/TrackService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

class CreateTrackComponent extends Component {
constructor(props) {
    super(props)
this.state = {
    //step 2 
    id: this.props.match.params.id,
    name: '',
    artist: '',
    album: '',
    
}
this.changeNameHandler = this.changeNameHandler.bind(this);
this.changeArtistHandler = this.changeArtistHandler.bind(this);
this.changeAlbumHandler = this.changeAlbumHandler.bind(this);
this.saveorUpdateTrack = this.saveorUpdateTrack.bind(this);

}

//step 3 

componentDidMount(){
//step 4
    if(this.state.id === '_add' ){
        return
    }else{
        TrackService.getTrackById(this.state.id).then( (res) =>{
            let track = res.data;
            this.setState({
                name: track.name, 
                artist: track.artist,
                album: track.album,
                
            });
        });
    }
}
saveorUpdateTrack = (e) => {
    e.preventDefault();
    let track = {
        name: this.state.name,
        artist: this.state.artist, 
        album: this.state.album};
    console.log('track => ' + JSON.stringify(track));

//step 5
// if(this.state.id === '_add') {
    TrackService.createTrack(track).then(res => {
        this.props.history.push('/compact_disc');
     });
// }else{
    // TrackService.updateTrack(track, this.state.id).then( res => {
        // this.props.history.push('/compact_disc');
    // });
// }
}

changeNameHandler= (event) => {
    this.setState({name: event.target.value})
}

changeArtistHandler= (event) => {
    this.setState({artist: event.target.value});
}

changeAlbumHandler= (event) => {
    this.setState({album: event.target.value});
}

cancel(){
    this.props.history.push('/compact_disc')
}

getTitle() {
    if(this.state.id === '_add'){
        return <h4 className="text-center">Add Track</h4>
    }
    else{
return <h4 className="text-center">Update Track</h4>
    }
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
            <div className="text-white" >
            {
     this.getTitle()
 }
                <div id="card" className= "card bg-dark text-white col-md-6 offset-md-3 offset-md-3">
                   
                   
                   
                    <div className = "card-body">
<form>
<div className = "form-group">
     
     <input placeholder="Name" name="name" className="form-control" 
         value={this.state.name} onChange={this.changeNameHandler}/>
 </div>
 <br></br>
    <div className = "form-group">
<input placeholder="Artist" name="artist" className="form-control" 
                                                value={this.state.artist} onChange={this.changeArtistHandler}/>
    </div>
    <br></br>
    <div className = "form-group">
                                            
                                            <input placeholder="Album" name="album" className="form-control" 
                                                value={this.state.album} onChange={this.changeAlbumHandler}/>
                                        </div>
                            
                                        
                                        
                                                                         
</form>
                    </div>
                </div>
                <br></br>
                <div className="text-center">
                <button id="button" className="btn btn-success mx-2" onClick={this.saveorUpdateTrack}><FontAwesomeIcon icon={faCheck} /></button>
                <button id="button" className="btn btn-danger" onClick={this.cancel.bind(this)}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
            </div>
        </div>
        
    )
}
}

export default CreateTrackComponent;