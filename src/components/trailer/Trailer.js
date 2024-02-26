import { useParams } from "react-router-dom";
import ReactPlayer from  'react-player';
import './Trailer.css';

import React from "react";

 const  Trailer = () => {
    let params = useParams();
    let  trailerId=params.ytTrailerId;
     return (
         <div className="react-player-container">
            {(trailerId!=null)?<ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${trailerId}`}
            width='100%' height='100%'/>: null}
         </div>
    )
}

export default Trailer