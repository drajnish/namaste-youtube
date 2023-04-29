import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_YOUTUBE_VIDEO } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API_YOUTUBE_VIDEO);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      <AdVideoCard info={videos[40]} />
      {videos.map((video) => (
        <Link key={video.id} to={'watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
