import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
        <div className="videoFooter__text">
            <h3>Hello :D</h3>
            <p>Description...</p>
            <div className="videoFooter__ticker">
                <MusicNoteIcon
                className="videoFooter__icon"/>
                <marquee>blah blah blah blah blah blah blah</marquee>
            </div>
        </div>
        <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt = ""
        />
    </div>
  )
  // watch this for footer- https://www.youtube.com/watch?v=HBEUXujJh1A
}

export default VideoFooter