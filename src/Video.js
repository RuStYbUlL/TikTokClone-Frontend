import React, { useRef, useState } from 'react'
import "./Video.css";

function Video() {
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
        src = "https://v16-webapp.tiktok.com/8817b97616da1f88a96291ad657e9ed5/62890003/video/tos/maliva/tos-maliva-ve-0068c799-us/66faea84c95e459cb1f875390bed2bf5/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=750&bt=375&cs=0&ds=3&ft=eXd.6HNVMyq8Zoyu9we2NL4nml7Gb&mime_type=video_mp4&qs=0&rc=ODQ1Ojg3N2U7ZjZoOWc3ZkBpam5yZTs6ZjdxOzMzZzczNEBhMjNfMGEwNjQxYzZhLTM2YSMzcy82cjRnZmhgLS1kMS9zcw%3D%3D&l=202205210906220102452441761C2E5366"></video>
        {/* Video footer */}
        {/* Video sidebar */}
    </div>
  )
}

export default Video