import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';


const Home=()=>{


    return(
        <div>
            <div className = "loggedIn">
            <h2>HOME</h2>
            <p>Welcome to Your Space. Browse your top artists, related artists, top tracks, audio features for songs, get recommended playlists. </p>
        <Link to='/playlist'> Playlists </Link>
        </div>
    
       
        </div>
    )
}


export default Home;