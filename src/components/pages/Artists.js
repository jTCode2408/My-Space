//top artists, & related artists
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
//get token from local storage...check if have token to show button
const Artists = ()=>{
    const spotifyApi = new SpotifyWebApi();
    const [artists, setArtists] = useState();

    const getArtists =()=>{
        spotifyApi.getMyTopArtists()
        .then(res=>{
            console.log('playlists', res.items)
            setArtists(res.items);
    
        })
    }


    return (
        <div>
            <h2>Top Artists</h2>
            <button onClick={getArtists}>Top Artists</button>
            
        </div>
    )


}

export default Artists;