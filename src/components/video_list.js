import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
        <VideoListItem
        onVideoSelect={props.onVideoSelect} 
        key= {video.etag} 
        video={video} />
        )
    });
    //Adding a key is a unique identifier for an item in the list, that allows react to edit that particular list item
    //instead of having to throw out the entire list and re-render them all 
    return (
        <ul className="col-md-4 list-group">
           {videoItems} 
        </ul>
    )
}

export default VideoList;