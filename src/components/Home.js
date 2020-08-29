import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Playlist from './Playlist';

const Home=()=>{

    return(
        <div>
            <h2>MyLilSpace HOME</h2>
            <p>Welcome to My Space! Here is where I share a little piece of myself, and practice new coding concepts. Take a look around!</p>
        <Link to='/playlist'> My Playlist </Link>

        </div>
    )
}


export default Home;