import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/
import {useLocalStorage} from './utils';
import queryString from 'querystring';

const Playlist =(key, initialVal)=>{

    const [music, setMusic]=useState();
    const [user,setUser]=useState();
    const [playlist, setPlaylist] = useState();
    const parsed = queryString.parse(window.location.search);
    const accessToken = parsed.access_token;

   
       if (!accessToken)
    return;
    axios.get('https://api.spotify.com/v1/me', {
        headers: {'Authorization': 'Bearer' + accessToken}
        ("Access-Control-Allow-Origin")
    })
    .then(res=>{
        console.log(res)
        
        //setUser()
    })
    .catch(err=>{
        console.log(err)
        alert("unable to log in, try again soon!");
    })


    axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: { 'Authorization': 'Bearer' + accessToken }
})
.then(res=>{
    console.log(res, "playlist Res")

})
.catch(err=>{
    console.log(err) 
    alert("unable to get playlists, try again soon!");})



    return(
        <div>
           
            PLAYLIST COMPONENT
            <h2> Spotify Playlists </h2>
           
           
            <button onClick={() => {
            window.location = window.location.href.includes('localhost') 
              ? 'http://localhost:8888/login' 
              : 'https://my-space-backend.herokuapp.com/login' }
            }
            > Log In To Spotify </button>
            

          
           
        </div>
    )
}


export default Playlist;