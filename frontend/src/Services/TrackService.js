import axios from 'axios';

const MUSIC_API_BASE_URL = "http://localhost:8080/api/v1/compact_disc";

class TrackService {


    getTracks(){
        return axios.get(MUSIC_API_BASE_URL);
    }
   createTrack(track){
    return axios.post(MUSIC_API_BASE_URL, track);
   }
   getTrackById(trackID){
       return axios.get(MUSIC_API_BASE_URL + '/' + trackID);
   }
   updateTrack(track, trackID){
       return axios.put(MUSIC_API_BASE_URL + '/' + trackID, track);
   }
   deleteTrack(trackID){
       return axios.delete(MUSIC_API_BASE_URL + '/' + trackID); 
   }
}

export default new TrackService();