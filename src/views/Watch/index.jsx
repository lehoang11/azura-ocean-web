import React from "react"
import { Link } from 'react-router-dom';
import { Player, ControlBar } from 'video-react';
import "video-react/dist/video-react.css";
import ReactPlayer from 'react-player'
import ShowMore from 'react-show-more';
// import VideoList from "../../components/Video/VideosList"
import usAvatar from "../../assets/img/varun.jpg";
import TutorialAPI from '../../services/tutorialService';
import moment from 'moment';

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorial: [],
            isLoading: true,
            errors: null
          };
    }


      getTutorialById = () => {
        let tutorialId = this.props.match.params.id;
        console.log (tutorialId);
        return TutorialAPI.getTutorialById(tutorialId).then(
            (res) => {
                if (res.data.code == 200) {
                    this.setState({
                        tutorial: res.data.data,
                        isLoading: false,
                    })
                }
            },
            (err) => {
                console.log("error get data");
                this.setState({
                    isLoading: true,
                    errors :err,
                })
            }
        )

      }

      componentDidMount() {
        this.getTutorialById();
      }


    render () {
        const { isLoading, tutorial } = this.state;
        
        return (
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-xlg-9 col-md-7">
                        {!isLoading ? (
                            <div>
                            <div className="azura-video-player">
                                <ReactPlayer
                                url={tutorial.video}
                                className='react-player'
                                playing
                                controls
                                width='100%'
                                height='100%' />
                            </div>
                                    
                            <div className="video-player-details">
                                <div className="video-player-name">
                                {tutorial.name}
                                </div>
                                <div className="video-player-pra">
                                    <span className="video-player-date">
                                        <i className="fa fa-calendar-alt"></i>&nbsp;{moment(tutorial.createdAt).fromNow()}
                                    </span>
                                    <span className="video-player-view">
                                        <i className="fa fa-eye"></i>&nbsp;{tutorial.viewTotal}
                                    </span>
                                    <span className="video-player-like">
                                        <i className="fa fa-thumbs-up"></i>&nbsp;{tutorial.likeTotal}
                                    </span>
                                    <span className="video-player-unlike">
                                        <i className="fas fa-thumbs-down"></i>&nbsp;0
                                    </span>
                                    <span className="video-player-flow">
                                        <button className="btn btn-danger"><span>Theo dõi</span></button>
                                    </span>
                                </div>
                                <div className="video-player-watch">
                                    <span className="video-edu-avatar">
                                        <img src={usAvatar} />
                                    </span>
                                    <span className="video-edu-name">Toi la toi</span>
                                </div>
                                <div className="video-player-des">
                                    <p className="video-player-tag">
                                    {tutorial.keyword}
                                    </p>
                                    <div className="content-des">
                                        <ShowMore
                                        lines={3}
                                        more='Hiển thị thêm'
                                        less='Rút gọn'
                                        anchorClass='' >
                                        {tutorial.content}
                                        </ShowMore>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                        </div> 
    
                            
                        
                        <div className="col-lg-4 col-xlg-3 col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <p>Đề xuất cho bạn</p>
                                    {/* <VideoList /> */}
                                </div> 
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
        );
    }
}
export default Watch;