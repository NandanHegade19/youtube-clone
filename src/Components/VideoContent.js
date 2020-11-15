import React, {useState, useEffect} from 'react';
import '../Styles/VideoContent.css';
import VideoTile from './VideoTile';
import {db} from '../firebase'


function VideoContent() {

    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        //pull info frm db
        db.collection('video').onSnapshot(snapshot => {
            setVideos(snapshot.docs.map(eachdoc => ({
            id: eachdoc.id, 
            eachVideo: eachdoc.data()
          })));
        })
      }, []);/*runs once when app component loads coz its empty []*/

    return (
        <div className = "videocontent">
            <h2>Recommended</h2>
            <div className = "videocontent__recomended"> 
                {
                    videos.map(({id, eachVideo}) => (
                        <VideoTile 
                            key = {id}
                            image = {eachVideo.image}
                            title = {eachVideo.title}
                            channel =  {eachVideo.channel}
                            views = {eachVideo.views}
                            timestamp ={eachVideo.timestamp}
                            channelImage ={eachVideo.channelImage} 
                        /> 
                    ))
                }
            </div>

        </div>
    )
}

export default VideoContent;
