import React from 'react';
import './App.css';
import Home from './components/Home';
import {Link, Route, Switch} from 'react-router-dom';
import Playlist from './components/Playlist';
function App() {
  return (

    <div className="App">

     <Route exact path='/'>   <Home/>  </Route>

     <Switch> 
     <Route path='/playlist'>  <Playlist/> </Route>
    
     </Switch>
    </div>
  );
}

export default App;
