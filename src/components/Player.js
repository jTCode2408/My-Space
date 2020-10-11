import React from 'react';
import SpotifyPlayer from 'react-spotify-player';


const Player =(props)=>{

const size={
    width: '100%',
    height: 300
};
const view = 'list';
const theme='black';

    return(
        <div>
            <SpotifyPlayer
            uri = {props.uri}
            size={size}
            view={view}
            theme={theme}
            />

        </div>
    )
}

export default Player;