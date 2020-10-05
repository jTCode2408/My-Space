import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/
import {useLocalStorage} from './utils';
import SpotifyWebApi from 'spotify-web-api-js';

const Playlist =()=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [playlist, setPlaylist]=useState();
    const spotifyApi = new SpotifyWebApi();
    
//to get token
    const getHashParams=()=> {
        const hashParams ={};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams
    }; 

const params = getHashParams();
console.log('PARAMS', params);
const accessToken = params.access_token


useEffect(()=>{

    spotifyApi.setAccessToken(accessToken)
    setLoggedIn(true);
    console.log('SETTING TOKEN', loggedIn)
},[])

     
const getArtists =()=>{
    spotifyApi.getMyTopArtists()
    .then(res=>{
        console.log('playlists',loggedIn, res.items)
        setPlaylist(res.items); 

    })
}



    return(
<>

TEST COMPONENT
            <h2>  </h2>

    {accessToken ? 
    (
        <div className="getPlaylist">      
        <>
    
        <p>LOGGED IN</p>
        <button onClick={getArtists}>Top Artists</button>
    <p>Your Top Artist's: </p>
        </>
   </div>
    )
    :
    (    

        <div className="login">
        
          <div className = "login-link">
            <a href='http://localhost:8888'> Login to Spotify </a> 
            </div>

        </div>
    )
}   

</>
    )}




export default Playlist;