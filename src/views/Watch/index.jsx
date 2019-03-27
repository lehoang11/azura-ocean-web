import React from "react"
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"
import { Link } from 'react-router-dom';
import { Player, ControlBar } from 'video-react';
import video720x480 from "../../assets/video/SampleVideo_720x480_30mb.mp4"
import videoImageDocCoCauBai from "../../assets/img/doc-co-cau-bai.jpg";
import "video-react/dist/video-react.css";
import ReactPlayer from 'react-player'
import ShowMore from 'react-show-more';
const itemListVideo = [0,1,2,3,4,5];
class Watch extends React.Component {
    render () {
        return (
            <div id="wrapper">
            <Header />
            <Aside />
            <div id="content">
                <div className="content-inner watch-page">
                    <div className="watch-left-wrap">
                        <div className="video-wrap">
                            {/* <div className="video-thumb ">
                            <ReactPlayer url={video720x480}
                            controls 
                             playing />
                            </div> */}
                            <div className='player-wrapper'>
                                <ReactPlayer
                                url={video720x480}
                                className='react-player'
                                playing
                                controls
                                width='100%'
                                height='100%'
                                />
                            </div>
                            <div className="video-detail">
                                <div className="video-name"> Video hoc tieng anh tot nhat hien nay</div>
                                <div className="video-detail-pa">
                                <span className="video-detail-date"><i class="fa fa-calendar-alt"></i>&nbsp;20/02/2019</span>
                                <span className="video-detail-view"><i class="fa fa-eye"></i>&nbsp;16.000 </span>
                                <span className="video-detail-like"><i class="fa fa-thumbs-up"></i>&nbsp;1000</span>
                                <span className="video-detail-unlike"><i class="fas fa-thumbs-down"></i>&nbsp;20</span>
                                </div>
                                <div className ="video-detail-us">
                                    <div className="v-us-avatar">
                                        <img src ={videoImageDocCoCauBai}  />
                                    </div>
                                    <div className="w-us-name">Toi la toi</div>
                                    <div className="video-us-flow">
                                        <button className="btn btn-danger"><span>Theo dõi</span></button>
                                    </div>
                                </div>
                                <div className="video-description">
                                    <div className="tag-des">#english#tieng-anh#ngoai-ngu</div>
                                    <div className="des-content">
                                    <ShowMore
                                    lines={3}
                                    more='Hiển thị thêm'
                                    less='Rút gọn'
                                    anchorClass='' >
                                    toi la toi
                                    ban la ai 
                                    vi sao em den 
                                    con gi cho nhau 
                                    A smooth, responsive jQuery plugin for collapsing and expanding long blocks of text with "Read more" and "Close" links.

                                    The markup Readmore.js requires is so simple, you can probably use it with your existing HTML—there's no need for complicated sets of div's or hardcoded classes, just call .readmore() on the element containing your block of text and Readmore.js takes care of the rest. Readmore.js plays well in a responsive environment, too.

                                    Readmore.js is tested with—and supported on—all versions of jQuery greater than 1.9.1. All the "good" browsers are supported, as well as IE10+; IE8 & 9 should work, but are not supported and the experience will not be ideal.
                                    </ShowMore>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-wrap ">
                            <div className="user-comment">
                                <div className="user-comment-image">
                                    <img src = {videoImageDocCoCauBai} />
                                </div>
                            </div>
                            <div class="form-user-comment">
                                <textarea class="form-control" placeholder="comment"></textarea>
                                <button className="btn-user-comment btn btn-info">Submit</button>
                            </div>
                            <div className="view-comment">
                                <div className="row-comment">
                                    <div className="comment-avatar">
                                        <div className="thumb">
                                            <img src = {videoImageDocCoCauBai} />
                                        </div>
                                    </div>
                                    <div className="view-comment-inner">
                                        <div className="comment-info">
                                            <span className="user-comment-name">Le Hoang</span>
                                            <span className="comment-date">5h ago</span>
                                        </div>
                                        <div className="comment-content">
                                        sao the , vi sao lai the, vi sao em den, noi lam gi
                                        </div>
                                    </div>
                                </div>

                                <div className="row-comment">
                                    <div className="comment-avatar">
                                        <div className="thumb">
                                            <img src = {videoImageDocCoCauBai} />
                                        </div>
                                    </div>
                                    <div className="view-comment-inner">
                                        <div className="comment-info">
                                            <span className="user-comment-name">Le Hoang</span>
                                            <span className="comment-date">5h ago</span>
                                        </div>
                                        <div className="comment-content">
                                        sao the , vi sao lai the, vi sao em den, noi lam gi
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="watch-right-wrap">
                        <div className="live-chat"></div>
                        <div className="playlist-next">
                            <div className="toolbar">
                                <span className="title">Tiếp Theo</span>
                                <span className="playlist-auto-control">
                                    <label>Tự động phát</label> <input type="checkbox" />
                                </span>
                            </div>
                            <section className="row-item-video-playlist">
                                <div className="playlist-body-card">
                                <div className="playlist-body-card-inner">
                                {
                                    itemListVideo.map((i,j) => {
                                        return ( 
                                        <div className = "video-item-thumbnail">
                                            <div className = "thumbnail-inner">
                                                <div className ="thumb-box">
                                                    <Link to="#">
                                                    <img src= {videoImageDocCoCauBai} k={j} alt="description" />
                                                    </Link>
                                                </div>
                                                <div className = "video-time-play">
                                                    <span className = "time-play-status">45:20</span>
                                                </div>
                                            </div>
                                            <div className = "playlist-video-details">
                                                <div className ="video-details-inner">
                                                    <h3 className = "video-title">
                                                        <Link to="#" className ="title"> Phim kiếm hiệp hay nhất || Độc cô cầu bại</Link>
                                                    </h3>
                                                    <div className = "video-auth">
                                                        <Link to="#" className ="video-auth-text">chris le</Link>
                                                    </div>
                                                    <div className = "video-detail-meta">
                                                        <span className = "view-meta">3.5k luot xem </span>
                                                        <span className = "date-meta">2 thang truoc</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        );
                                    })
                                }
                                </div>
                            </div>
                            </section>
                        </div>
                    </div>
                </div>
                <section className="row-item-video-container">
                        <div className="header-section">
                            <div className ="title-text"> Có thể bạn quan tâm
                            </div>
                        </div>
                        <div className="video-body-card">
                            <div className="video-body-card-inner">
                            {
                                itemListVideo.map((i,j) => {
                                    return ( 
                                    <div className = "video-item-thumbnail">
                                        <div className = "thumbnail-inner">
                                            <div className ="thumb-box">
                                                <Link to="#">
                                                <img src= {videoImageDocCoCauBai} k={j} alt="description" />
                                                </Link>
                                            </div>
                                            <div className = "video-time-play">
                                                <span className = "time-play-status">45:20</span>
                                            </div>
                                        </div>
                                        <div className = "video-details">
                                            <div className ="video-details-inner">
                                                <h3 className = "video-title">
                                                    <Link to="#" className ="title"> Phim kiếm hiệp hay nhất || Độc cô cầu bại</Link>
                                                </h3>
                                                <div className = "video-auth">
                                                    <Link to="#" className ="video-auth-text">chris le</Link>
                                                </div>
                                                <div className = "video-detail-meta">
                                                    <span className = "view-meta">3.5k luot xem </span>
                                                    <span className = "date-meta">2 thang truoc</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })
                            }
                            </div>
                        </div>       
                    </section>
            </div>
            </div>
        );
    }
}
export default Watch;