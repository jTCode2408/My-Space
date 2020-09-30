import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/
import {useLocalStorage} from './utils';
import SpotifyWebApi from 'spotify-web-api-js';

const Playlist =()=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [playing, setPlaying] = useState(false);
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

spotifyApi.setAccessToken(accessToken)
console.log('SETTING TOKEN', accessToken)
   

       const getNowPlaying=()=>{ 
         
        spotifyApi.getMyCurrentPlaybackState()
        .then(res=>{
            console.log('PLAYING', accessToken, res)
            //setPlaying();

        })
        
        }   
    
const getPlaylists =()=>{
    spotifyApi.getUserPlaylists()
    .then(res=>{
        console.log('playlists', res)
    })
}

    return(
        <div>
           
            PLAYLIST COMPONENT
            <h2> Spotify Playlists </h2>
        
          <div className = "login-link">
            <a href='http://localhost:8888'> Login to Spotify </a> 
            </div>
            <div>
            
                
                <>
                <p>LOGGED IN</p>
                <button onClick={getPlaylists}>playlists</button>
                <p>Playing: song name</p>
                </>
             
           
    
           </div>
        </div>


    )}




export default Playlist;