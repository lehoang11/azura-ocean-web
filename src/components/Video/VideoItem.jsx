import React from "react"
import { Link } from 'react-router-dom';
import imgTuDefault from "../../assets/img/doc-co-cau-bai.jpg";
import imgEduDefault from "../../assets/img/doc-co-cau-bai.jpg";
import moment from 'moment'


const VideoItem = ({tutorial}) => (
    
    <div className = "video-item-thumbnail" key={tutorial.id}>
        <div className = "thumbnail-inner">
            <div className ="thumb-box">
            <Link to={'/watch/'+tutorial.shortName+'_.'+tutorial.id}>
                <img src= {tutorial.avatar ? tutorial.avatar :imgTuDefault} alt="videoImageDocCoCauBai" />
            </Link>
            </div>
            <div className = "video-time-play">
                <span className = "time-play-status">45:20</span>
            </div>
        </div>
        <div className = "video-details">
            <h3 className = "video-title">
            <Link to={'/watch/'+tutorial.shortName+'_.'+tutorial.id} className ="title"> {tutorial.name}</Link>
            </h3>
            <div className = "video-auth">
            <Link to={'/edu/'+tutorial.eduShortName} className ="video-auth-text">{tutorial.eduName}</Link>
            </div>
            <div className = "video-detail-meta">
                <span className = "view-meta">{tutorial.viewTotal} <i className="ti-eye"></i> </span>
                <span className = "date-meta">{moment(tutorial.createdAt).fromNow()}</span>
            </div>
        </div>
    </div>
    
);

export default VideoItem