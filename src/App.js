import React from 'react'
import './App.css';
import Video from './Video.js';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
      <Video url = "https://v16-webapp.tiktok.com/85d203994ff4b7cf9cb99afc52c6986b/629e1e27/video/tos/useast2a/tos-useast2a-ve-0068c003/e540e786e9764a77a3e1ae6ac1ed8d54/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2398&bt=1199&btag=80000&cs=0&ds=3&ft=eXd.6HNVMyq8Zp_viwe2NWehml7Gb&mime_type=video_mp4&qs=0&rc=Zzc8OzM0ZzwzaDgzO2VkOEBpamxvOTM6ZjlnOjMzNzczM0AtXmEuMjMuXjUxL18xMzFeYSNtZC5ncjRfL3FgLS1kMTZzcw%3D%3D&l=2022060609324201024402918823180E27"
        channel = 'AstrooSpace'
        description = 'Universe'
        song = 'In the middle of the night - Elley Duhe'
        likes = {498}
        shares = {78}
        messages = {45}
      />

      <Video url = "https://v16-webapp.tiktok.com/a74df50ce78616afe5269ee52eb664c4/629e18d5/video/tos/alisg/tos-alisg-pve-0037/a5df4b30d9d846f7a416a1ab7f1c0490/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3074&bt=1537&btag=80000&cs=0&ds=3&ft=eXd.6HNVMyq8Z_Bviwe2NQfnml7Gb&mime_type=video_mp4&qs=0&rc=NmVnNjNkaDc8Mzg8NzhoPEBpang8OmU6Zms6PDMzODgzNEBjLzAzYzMwXy0xYjRgXzQuYSNjNHFycjRvYHNgLS1kLy1zcw%3D%3D&l=202206060909590102450021571C161F5C"
          channel = 'liqoqqq'
          description = 'Jett : easy chamber'
          song = '오리지널 사운드 - 까꿍이'
          likes = {111}
          shares = {48}
          messages = {23}
      />
      </div>
    </div>
  );
}

export default App;
