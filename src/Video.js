import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'

function Video({url, channel, description, song, likes, shares, messages}) {
    // Variable to keep track of if the video is playing
    // False as video will nnot be playing initially
    const [playing, setPlaying] = useState(false) 
    
    // Creating reference to play/pause video that is click on
    const videoRef = useRef(null)

    // Trigger function when video clicked on
    const handleVideoPress = () => {
        // if video is playing, stop it
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{ // if video is not playing start it
            videoRef.current.play();
            setPlaying(true);
        }

    }

  return (
    <div className="video">
        <video 
        className="video__player"
        loop
        onClick={handleVideoPress}
        ref = {videoRef} //make video play when clicked on
        src = {url}></video>
        {/* Video footer */}
        <VideoFooter channel = {channel}
        description = {description}
        song = {song}/>
        {/* Video sidebar */}
        <VideoSideBar likes = {likes} 
        shares = {shares} 
        messages = {messages}/>
    </div>
  )
}

export default Video