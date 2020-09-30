import React from 'react';
import './App.css';
import Home from './components/Home';
import {Link, Route, Switch} from 'react-router-dom';
import Playlist from './components/Playlist';
function App() {
  return (

    <div className="App">

   <Playlist/>
    </div>
  );
}

export default App;
