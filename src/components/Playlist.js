import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/

import SpotifyWebApi from 'spotify-web-api-js';


const Playlist =()=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [artists, setArtists]=useState();
    const [playlist, setPlaylist]= useState();
    const [played, setPlayed]=useState();
    const spotifyApi = new SpotifyWebApi();
    const [userId, setUserId]=useState();
//to get token

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
const accessToken = params.access_token;
const refreshToken = params.refresh_token;

useEffect(()=>{
    spotifyApi.setAccessToken(accessToken);
    setLoggedIn(true);
    console.log('SETTING TOKEN', loggedIn,accessToken)
},[])

     

const getData =()=>{

    spotifyApi.getMe()
    .then(res=>{
        console.log('user id', res);
        setUserId(res)
    })

    spotifyApi.getUserPlaylists()
    .then(res=>{
       const playlistArr=[]
        res.items.forEach(item=>{
            return playlistArr.push(item)
        })
       setPlaylist(playlistArr); //array of objects for each playlist
       console.log('playlists',loggedIn, res.items);
       console.log('playlis ARRAY', playlistArr);
    })

    spotifyApi.getMyRecentlyPlayedTracks()
    .then(res=>{
       // console.log('recently played', res.items);
        setPlayed(res.items)

    })



}



    return(
<>

TEST COMPONENT
            <h2>  </h2>

   
        <div className="getArtist">      
        <>
    
        <p>LOGGED IN</p>
        <button onClick={getData}>My stats</button>
     
        
    <p>Your Top: </p>
        </>
   </div>

        <div className="login">
        <a href='http://localhost:8888'> Login to Spotify </a>
       
        </div>
    


</>
    )}




export default Playlist;