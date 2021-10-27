import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListTrackComponent from './Components/ListTrackComponent'
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateTrackComponent from './Components/CreateTrackComponent';
import ViewTrackComponent from './Components/ViewTrackComponent';
import UpdateTrackComponent from './Components/UpdateTrackComponent';


function App() {
  return (
    <div class="bg-dark bg-gradient"   style={{
      backgroundColor: 'black',
      height: '100vh'
    }}>
      <Router>
        <div id="navbar">
        <HeaderComponent />
        </div>
        <div className="container">
          <Switch>
            <Route path = "/" exact component = {ListTrackComponent}></Route>
            <Route path = "/compact_disc" component = {ListTrackComponent}></Route>
            <Route path = "/add-track/:id" component = {CreateTrackComponent}></Route>
            <Route path = "/view-track/:id" component = {ViewTrackComponent}></Route>
            <Route path = "/update-track/:id" component = {UpdateTrackComponent}></Route> 
             </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
