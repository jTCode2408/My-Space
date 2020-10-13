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

    spotifyApi.getUserPlaylists()
    .then(res=>{
     
       setPlaylist( res.items.map(item=>{
 
        return  item
      })); //array of objects for each playlist
       console.log('playlists',loggedIn, res.items);
   
    })

    spotifyApi.getMyRecentlyPlayedTracks()
    .then(res=>{
       console.log('recently played', res.items);
        setPlayed(res.items)
    })

/////TO DO: filter playlists length, add pagination somehow(players for 20 playlist loading extremely slow...also restyle image sizes & player sizes see if that helps)

   
},[accessToken])

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
              <p> {item.name} </p>  
             <img src= {item.images[0].url} ></img>
           
            </PlaylistItems>
            <a href=  {item. external_urls.spotify} >View </a>  
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