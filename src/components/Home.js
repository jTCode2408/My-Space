import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Playlist from './Playlist';

const Home=()=>{

    return(
        <div>
            <h2>MyLilSpace HOME</h2>
        <Link to='/playlist'> My Playlist </Link>

        </div>
    )
}


export default Home;