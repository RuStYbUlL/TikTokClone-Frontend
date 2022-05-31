import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'

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
        src = "https://v16-webapp.tiktok.com/57f3fd3227a43420496572d88cfb0328/62961738/video/tos/useast2a/tos-useast2a-ve-0068c003/18bed786509a4533bd489d3b6a903103/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1584&bt=792&btag=80000&cs=0&ds=3&ft=eXd.6HNVMyq8Zuxvvwe2Nfkhml7Gb&mime_type=video_mp4&qs=0&rc=M2U7Zmk8OjdnZDNnNTc8NkBpajx4czQ6ZnVuZDMzNzczM0AwMmMtYF5hNWAxLS80YzVgYSNuM15hcjRvaTNgLS1kMTZzcw%3D%3D&l=20220531072452010245100117209C1C58"></video>
        {/* Video footer */}
        <VideoFooter/>
        {/* Video sidebar */}
        <VideoSideBar/>
    </div>
  )
}

export default Video