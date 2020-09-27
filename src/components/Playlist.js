import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/
import {useLocalStorage} from './utils';
import queryString from 'querystring';
import SpotifyWebApi from 'spotify-web-api-js';

const Playlist =(key, initialVal)=>{

    const [music, setMusic]=useState();
    const [user,setUser]=useState();
    const [playlist, setPlaylist] = useState();
    const spotifyApi = new SpotifyWebApi()

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

if (accessToken){
    spotifyApi.setAccessToken(accessToken)
    console.log('TOKEN', accessToken)

}



    return(
        <div>
           
            PLAYLIST COMPONENT
            <h2> Spotify Playlists </h2>
            { accessToken ? (
        <a href='http://localhost:8888'> Login to Spotify </a> )
        : ( <h2>Logged In</h2> )
            }
           
        </div>
    )
}




export default Playlist;