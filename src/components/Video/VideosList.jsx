import React from "react"
import { Link } from 'react-router-dom';
import VideoItem from "./VideoItem"
import videoThumbDemo from "../../assets/img/doc-co-cau-bai.jpg";
const videos = [
    {id: 1, title: 'video hoc tieng anh hay nhat', videoThumb:videoThumbDemo, linkVideo:'https://www.youtube.com/watch?v=8T6GI58-gnY', eduName :'Chrisle',view:3500,datePush:2,timeDruption:400},
    {id: 2, title: 'video hoc tieng anh hay nhat',videoThumb:videoThumbDemo, linkVideo:'https://www.youtube.com/watch?v=8T6GI58-gnY', eduName :'Chrisle',view:3500,datePush:2,timeDruption:400},
    {id: 3, title: 'video hoc tieng anh hay nhat',videoThumb:videoThumbDemo, linkVideo:'https://www.youtube.com/watch?v=8T6GI58-gnY', eduName :'Chrisle',view:3500,datePush:2,timeDruption:400},
    {id: 4, title: 'video hoc tieng anh hay nhat',videoThumb:videoThumbDemo, linkVideo:'https://www.youtube.com/watch?v=8T6GI58-gnY', eduName :'Chrisle',view:3500,datePush:2,timeDruption:400},
    {id: 5, title: 'video hoc tieng anh hay nhat',videoThumb:videoThumbDemo, linkVideo:'https://www.youtube.com/watch?v=8T6GI58-gnY', eduName :'Chrisle',view:3500,datePush:2,timeDruption:400}
  ];
class VideosList extends React.Component {
    render () {
        return (
            <section className="list-video-show">
                <div className="video-body-card">
                {videos.map((video , index) =>
                    <VideoItem video={video} />
                        
                )}
                   
                </div>
            </section>
        );
    }
}
export default VideosList;