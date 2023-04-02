import React from "react";
import playlistData from "../data/playlistData";
import VideoTile from "./videoTile";

function VideoBar () {
    // Use the playlistData object instead of fetching it
    const data = playlistData.items;
    
    return (
        <div className="video-bar">
            {data.map((item) => (
                <VideoTile key={item.id} img={item.snippet.thumbnails.medium.url} alt={item.snippet.title} title={item.snippet.title}/>
            ))}
        </div>
    )
}

export default VideoBar;
