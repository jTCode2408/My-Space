import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Playlist from './Playlist';
import {useLocalStorage} from './utils';
import SpotifyWebApi from 'spotify-web-api-js';


const Home=()=>{
    const [loggedIn, setLoggedIn] = useState(false);
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
    const refreshToken = params.refresh_token
    window.localStorage.setItem('token',  accessToken);

    useEffect(()=>{

        spotifyApi.setAccessToken(accessToken)
        setLoggedIn(true);
        console.log('SETTING TOKEN', loggedIn)
    },[])


   


    return(
        <div>
            <div className = "loggedIn">
            <h2>HOME</h2>
            <p>Welcome to Your Space. Browse your top artists, related artists, top tracks, audio features for songs, get recommended playlists. </p>
        <Link to='/playlist'> Playlists </Link>
        </div>
    
        <div className= "login">

        <a href='http://localhost:8888'> Login to Spotify </a>

        </div>

        </div>
    )
}


export default Home;