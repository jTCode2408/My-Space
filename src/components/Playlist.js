import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/
import {useLocalStorage} from './utils';
import SpotifyWebApi from 'spotify-web-api-js';


const Playlist =()=>{
    const [loggedIn, setLoggedIn] = useState(true);
    const [playlist, setPlaylist]=useState();
    const spotifyApi = new SpotifyWebApi();
    
//to get token


useEffect(()=>{
    const accessToken= localStorage.getItem('token');
    
    axios.get('https://api.spotify.com/v1/me/playlists',{
        headers: {
            "Authorization": "Bearer" + accessToken,
            "Content-Type": "application/json"
        }
    })
    .then(res=>{
        console.log('PLaylist res', res)
        
    })
    .catch(err=>{
        console.log(err)
    })


    //spotifyApi.setAccessToken(token);
    //setLoggedIn(true);
    //console.log('SETTING TOKEN', loggedIn, token,)
},[])

     
const getArtists =()=>{
    spotifyApi.getMyTopArtists()
    .then(res=>{
        console.log('playlists',loggedIn)
        //setPlaylist(res.items); 

    })
}



    return(
<>

TEST COMPONENT
            <h2>  </h2>

   
        <div className="getPlaylist">      
        <>
    
        <p>LOGGED IN</p>
        <button onClick={getArtists}>Top Artists</button>
    <p>Your Top Artist's: </p>
        </>
   </div>

        <div className="login">
        
       

        </div>
    


</>
    )}




export default Playlist;