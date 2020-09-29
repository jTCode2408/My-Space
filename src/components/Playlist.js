import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/
import {useLocalStorage} from './utils';
import SpotifyWebApi from 'spotify-web-api-js';

const Playlist =()=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [music, setMusic]=useState();
    const [user,setUser]=useState();
    const [playlist, setPlaylist] = useState();
    const spotifyApi = new SpotifyWebApi()
//to get token
    function getHashParams() {
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
const accessToken = params.access_token;

    if(accessToken){
    spotifyApi.setAccessToken(accessToken)
    console.log('TOKEN', accessToken)
    setLoggedIn(true);

    }
       const getPlaylists=()=>{ 
         
        spotifyApi.getUserPlaylists()
        .then(res=>{
            console.log('PLAYLISTS', accessToken, res)
        })
        
        }   
    


    return(
        <div>
           
            PLAYLIST COMPONENT
            <h2> Spotify Playlists </h2>
            { loggedIn &&
            
                <>
        <h2>Logged In</h2> 
         
            <p>Playlists</p>
            </>

            }
          <div className = "login-link">
            <a href='http://localhost:8888'> Login to Spotify </a> 
            </div>
           
        </div>
    )
}




export default Playlist;