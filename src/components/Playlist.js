import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//BACKEND: https://my-space-backend.herokuapp.com/

import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyPlayer from 'react-spotify-player';

import {Player, PlaylistCont, PlaylistItems, Top, PlayerItems} from './styles';

const Playlist =()=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [artists, setArtists]=useState();
    const [playlist, setPlaylist]= useState([]);
    const [played, setPlayed]=useState();
    const [songs, setSongs]=useState([]);
    const spotifyApi = new SpotifyWebApi();
    const [user, setUser]=useState();
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
const accessToken = params.access_token;
const refreshToken = params.refresh_token;

useEffect(()=>{
 
    spotifyApi.setAccessToken(accessToken);
    setLoggedIn(true);
    console.log('SETTING TOKEN', loggedIn,accessToken)

    spotifyApi.getMe()
    .then(res=>{
        console.log('user ', res);
        setUser(res.display_name)
    })


    const getRecentlyPlayer = spotifyApi.getMyRecentlyPlayedTracks()
    .then(res=>{
       console.log('recently played', res.items);
        setPlayed(res.items)
    })

/////TO DO: filter playlists length, add pagination somehow(players for 20 playlist loading extremely slow(load 1-10, add 'show more' button for next 10, etc)

   
},[accessToken])

const getPlaylists= spotifyApi.getUserPlaylists()
    .then(res=>{
     
       setPlaylist( res.items.map(item=>{
 
        return  item
      })); //array of objects for each playlist
       console.log('playlists',loggedIn, res.items);
   
    })


const size={
    width: '100%',
    height: 300
};
const view = 'list';
const theme='black';


    return(
<>
        { accessToken !== undefined ? 
        (
            <>
            <Top>
            <h2>Welcome {user}  </h2>

            <h3>Your Saved Playlists</h3>
            </Top>

        <PlaylistCont>      
       
        
    { playlist.map(item=>{
            return (
            
                <PlayerItems>

                <PlaylistItems>
                    
             <h4>{item.name} </h4>  
             
             <a href=  {item.external_urls.spotify}>
             
             <img src= {item.images[0].url} alt="playlist art" ></img>
              </a> 
             
           
            </PlaylistItems>
    
           <Player>
            <SpotifyPlayer
            uri = {item.uri}
            size={size}
            view={view}
            theme={theme}
            /> 
            </Player>
         
          </PlayerItems>
            )
        })
        }
     
   </PlaylistCont>

   </>

        )
        :
        (

        <div className="login">
        <a href='http://localhost:8888'> Login to Spotify </a>
       
        </div>
       
        )

        }
</>

    )}




export default Playlist;