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
        // src = "https://v16-webapp.tiktok.com/272942b7fcda9726490957788b74d7c9/62866eb5/video/tos/maliva/tos-maliva-ve-0068c799-us/0f980e7390714dcdad471dbd9c3f6404/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2102&bt=1051&cs=0&ds=3&ft=eXd.6HNVMyq8ZZjGbwe2NKvhml7Gb&mime_type=video_mp4&qs=0&rc=OjM4M2k8OGdkaGk6Mzo1M0BpMzR2Ojw6ZnJkOzMzZzczNEAxLS8wYjNeXzExLjJeMTEyYSNnX2pzcjQwYGtgLS1kMS9zcw%3D%3D&l=2022051910215301024524417624346382"></video>
        src = "https://v16-webapp.tiktok.com/8ff674bb95e094ebdd21774eab88ecd0/6286952d/video/tos/useast2a/tos-useast2a-ve-0068c003/ec70fe5284cb44ad9b687a4ab1b4db66/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=626&bt=313&cs=0&ds=3&ft=eXd.6HNVMyq8ZMm5bwe2NX1Trl7Gb&mime_type=video_mp4&qs=0&rc=NzdkNTU7ZTtpNWc5O2g7ZEBpam9zaWc6ZmV0NjMzNzczM0AwNjYtNl81NjAxYC5hLjVjYSNnbmdmcjQwZ2xgLS1kMTZzcw%3D%3D&l=202205191305490102452461011B17ECC3"></video>
        {/* Video footer */}
        {/* Video sidebar */}
    </div>
  )
}

export default Video