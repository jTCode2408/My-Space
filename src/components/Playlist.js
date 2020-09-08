import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/
import {useLocalStorage} from './utils';

const Playlist =(key, initialVal)=>{

    const [music, setMusic]=useState();
    const [user,setUser]=useLocalStorage(key, initialVal);

    axios.get('https://my-space-backend.herokuapp.com/login')
    .then(res=>{
        console.log(res)
        
        //setUser()
    })
    .catch(err=>{
        console.log(err)
        alert("unable to log in, try again soon!");
    })
  
    return(
        <div>
           
            PLAYLIST COMPONENT
            <h2> Spotify Playlists </h2>
           
            Log In To Spotify

          
           
        </div>
    )
}


export default Playlist;