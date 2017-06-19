import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    // console.log(props); props is an object that has the video property on it which is another object
       // console.log(video); props is each video element passed from videoItems
    const imageUrl = video.snippet.thumbnails.default.url;
    const urlTitle = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            {/*Over here the onVideoSelect finally gets called by passing in the individual video, when that list item
            is clicked, it will execute the onVideoSelect function with the passed in parameter video, which will
            then update the this.state.selectedVideo to whichever selected video*/}
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{urlTitle}</div>
                </div>
            </div>

        </li>
    )
};

export default VideoListItem;