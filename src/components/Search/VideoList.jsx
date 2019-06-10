import React from "react"
import { Link } from 'react-router-dom';
import VideoItem from "./VideoItem"

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <section className="list-video-show">
                <div className="video-body-card">
                {this.props.tutorials.map((tutorial, i)=> {
                    return (
                        <VideoItem key={i} tutorial={tutorial} />
                    );
                    })
                }
                </div>
            </section>
        );
    }
}
export default VideoList;