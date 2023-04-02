// YouTubePlayer.js

import React, { useRef, useEffect } from 'react';

const YouTubePlayer = ({ videoId, controls = false, modestbranding = true, rel = false, showinfo = false, autoplay = false }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        videoId: videoId,
        playerVars: {
          controls: controls ? 1 : 0,
          modestbranding: modestbranding ? 1 : 0,
          rel: rel ? 1 : 0,
          showinfo: showinfo ? 1 : 0,          
          autoplay: autoplay ? 1 : 0,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [videoId, controls, modestbranding, rel, showinfo, autoplay]);

  return (
    <div className="player-container" ref={playerRef} data-video-id={videoId}></div>
  );
};

export default YouTubePlayer;
