import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"
import { Link } from 'react-router-dom';
import "../../assets/css/video.css"

// import '../../assets/css/style.css';
import videoImageDocCoCauBai from "../../assets/img/doc-co-cau-bai.jpg";
const itemListVideo = [0,1,2,3,4];


class Home extends React.Component {

    render() {
        const { user } = this.props;
        return (
        <div>
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    {/* content */}
                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            <div className="section-title-box">
                                <div className ="section-title text-uppercase"> Video Trực Tuyến
                                <Link to="/" >home</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            <section className="list-video-show">
                                <div className="video-body-card">
                                {itemListVideo.map((i, j) => {
                                    return ( 
                                    <div className = "video-item-thumbnail">
                                        <div className = "thumbnail-inner">
                                            <div className ="thumb-box">
                                            <Link to="#">
                                                <img src= {videoImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>
                                            </div>
                                            <div className = "video-time-play">
                                                <span className = "time-play-status">45:20</span>
                                            </div>
                                        </div>
                                        <div className = "video-details">
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
                                            );
                                    })
                                }
                                </div>
                            </section>
                        </div>
                    </section>

                    
                    {/* content */}
                </div>
            </div>
            
            <div className="chat-windows"></div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

export default connect(mapStateToProps)(Home);