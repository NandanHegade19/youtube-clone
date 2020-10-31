import React from 'react';
import {Avatar} from '@material-ui/core';
import '../Styles/SearchChannelRow.css';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';


function SearchChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className = "channelrow">
            <Avatar className = "channelrow__logo"
            alt = "Channel logo" src = {image} />
            <div className = "channelrow__channelname" >
                <h4> {channel} {verified && <CheckCircleOutlinedIcon/> } </h4>
                <p> {subs} subscribers . {noOfVideos} videos </p>
                <p> {description} </p>
            </div>
        </div>
    )
}

export default SearchChannelRow;
