import React from "react"
import { Link } from 'react-router-dom';
const VideoItem = ({video}) => (
    
    <div className = "video-item-thumbnail" key={video.id}>
        <div className = "thumbnail-inner">
            <div className ="thumb-box">
            <a href={video.linkVideo}>
                <img src= {video.videoThumb} alt="videoImageDocCoCauBai" />
            </a>
            </div>
            <div className = "video-time-play">
                <span className = "time-play-status">45:20</span>
            </div>
        </div>
        <div className = "video-details">
            <h3 className = "video-title">
            <Link to="#" className ="title"> {video.title}</Link>
            </h3>
            <div className = "video-auth">
            <Link to="#" className ="video-auth-text">{video.eduName}</Link>
            </div>
            <div className = "video-detail-meta">
                <span className = "view-meta">3.5k luot xem </span>
                <span className = "date-meta">2 thang truoc</span>
            </div>
        </div>
    </div>
    
);

export default VideoItem