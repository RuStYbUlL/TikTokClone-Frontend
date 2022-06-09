import React, { useEffect, useState } from 'react'
import './App.css';
import Video from './Video.js';
import axios from './axios';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    async function fetchPost(){
      const response = await axios.get("https://tiktok-backend2022.herokuapp.com/v2/posts");
      setVideos(response.data);

      // return response;
    }

    fetchPost();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({url, channel, description, song, likes, shares, messages}) => (
            <Video
              url = {url}
              channel = {channel}
              description = {description}
              song = {song}
              likes = {likes}
              shares = {shares}
              messages = {messages}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
