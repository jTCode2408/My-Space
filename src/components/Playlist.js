import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/
import {useLocalStorage} from './utils';
import SpotifyWebApi from 'spotify-web-api-js';

const Playlist =()=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [playing, setPlaying] = useState(false);
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

       const getNowPlaying=()=>{ 
         
        spotifyApi.getMyCurrentPlaybackState()
        .then(res=>{
            console.log('PLAYING', accessToken, res)
           
        })
        
        }   
    
const getPlaylists =()=>{
    spotifyApi.getUserPlaylists()
    .then(res=>{
        console.log('playlists',loggedIn, res.items)
        setPlaylist(res.items); //array of objects for each playlist

    })
}

    return(
<>

PLAYLIST COMPONENT
            <h2> Spotify Playlists </h2>

    {loggedIn ? 
    (
        <div className="getPlaylist">      
        <>
        <p>LOGGED IN</p>
        <button onClick={getPlaylists}>playlists</button>
    <p>My Saved Playlists: </p>
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