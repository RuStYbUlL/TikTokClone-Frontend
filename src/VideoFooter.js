import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter({channel, description, song}) {
  return (
    <div className="videoFooter">
        <div className="videoFooter__text">
            <h3>@{channel}</h3>
            <p>{description}</p>
            <div className="videoFooter__ticker">
                <MusicNoteIcon
                className="videoFooter__icon"/>
                <marquee>{song}</marquee>
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