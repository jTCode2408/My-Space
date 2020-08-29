import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Playlist =()=>{

    const [music, setMusic]=useState();

    useEffect=(()=>{
        axios.get('')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    ,[])

    return(
        <div>
            PLAYLIST COMPONENT
            <h2>What Im Listening To: </h2>
        </div>
    )
}


export default Playlist;