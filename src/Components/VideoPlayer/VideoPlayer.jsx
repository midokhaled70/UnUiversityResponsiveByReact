import React,{useRef} from 'react'
import './VideoPlayer.css'
import video from '../../Assets/images/m.mp4'

export const VideoPlayer = ({playState,setPlayState}) => {
    const player=useRef(null);
const closepalyer=(e)=>{
    if(e.target===player.current){
setPlayState(false);

    }
}
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}onClick={closepalyer}>
<video src={video} autoPlay muted controls></video>

    </div>
  )
}
