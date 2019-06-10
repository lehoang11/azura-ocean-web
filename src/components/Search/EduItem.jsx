import React from "react"
import { Link } from 'react-router-dom';
import imgEduDefault from "../../assets/img/doc-co-cau-bai.jpg";
import moment from 'moment'


const EduItem = ({edu}) => (
    
    <div className = "edu-item-thumbnail" key={edu.id}>
        <div className = "thumbnail-inner">
            <div className ="thumb-box">
            <Link to={'/edu/'+edu.shortName}>
                <img src= {edu.avatar ? edu.avatar :imgEduDefault} alt="edu avatar" />
            </Link>
            </div>
        </div>
        <div className = "edu-details">
            <h3 className = "edu-title">
            <Link to={'/edu/'+edu.shortName} className ="title"> {edu.name}</Link>
            </h3>
            <div className = "edu-detail-meta">
                <span className = "view-meta">999 <i className="ti-eye"></i> </span>
                <span className = "date-meta">{moment(edu.createdAt).fromNow()}</span>
            </div>
        </div>
    </div>
    
);

export default EduItem