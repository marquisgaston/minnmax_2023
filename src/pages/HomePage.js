import React from 'react';
import YouTubePlayer from '../components/youTubePlayer';
import VideoBar from '../components/VideoBar';

const HomePage = () => {
  return (
    <div className='homePage-Container'>
        <div className='homePage-Top'>
            <YouTubePlayer
                videoId="-dlSmDb8gBs"
                controls={true}
                modestbranding={true}
                rel={true}
                showinfo={true}
                autoplay={true}
            />
            <div className='homePage-middle'>
              <VideoBar />
            </div>
        </div>
    </div>
  );
}

export default HomePage;
