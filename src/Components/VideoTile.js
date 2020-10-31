import React from 'react';
import '../Styles/VideoTile.css';
import Avatar from '@material-ui/core/Avatar';

function VideoTile({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className = "videotile">
            <img className = "videotile__thumbnail" src = {image} alt = ""/>
            <div className = "videotile__info">
                <Avatar className = "videotile__avatar" alt = {channel} sec = {channelImage}/>
                <div className = "videotile__title">
                    <h4> {title} </h4>
                    <p> {channel}</p>
                    <p> {views} . {timestamp} </p>
                </div>
            </div>
        </div>
    )
}

export default VideoTile;
