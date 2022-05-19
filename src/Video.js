import React from 'react'
import "./Video.css";

function Video() {
  return (
    <div className="video">
        <video 
        className="video__player"
        loop
        src = "https://v16-webapp.tiktok.com/272942b7fcda9726490957788b74d7c9/62866eb5/video/tos/maliva/tos-maliva-ve-0068c799-us/0f980e7390714dcdad471dbd9c3f6404/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2102&bt=1051&cs=0&ds=3&ft=eXd.6HNVMyq8ZZjGbwe2NKvhml7Gb&mime_type=video_mp4&qs=0&rc=OjM4M2k8OGdkaGk6Mzo1M0BpMzR2Ojw6ZnJkOzMzZzczNEAxLS8wYjNeXzExLjJeMTEyYSNnX2pzcjQwYGtgLS1kMS9zcw%3D%3D&l=2022051910215301024524417624346382"></video>

        {/* Video footer */}
        {/* Video sidebar */}
    </div>
  )
}

export default Video