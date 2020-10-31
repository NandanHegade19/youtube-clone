import React from 'react';
import '../Styles/SearchVideoRow.css';



function SearchVideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className = "searchvideorow">
            <img src = {image} alt =""/>
            <div className = "searchvideorow__title">
                <h3> {title} </h3>
                <p className = "searchvideorow__channel"> {channel} . {subs} subscribers {views} views . {timestamp} . </p>
                <p className = "searchvideorow__desc">{description}</p>
            </div>
            
        </div>
    )
}

export default SearchVideoRow;
