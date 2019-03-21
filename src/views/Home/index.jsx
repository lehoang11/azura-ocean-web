import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"
import "../../assets/css/video.css"
import { Link } from 'react-router-dom';
import videoImageDocCoCauBai from "../../assets/img/doc-co-cau-bai.jpg";
const itemListVideo = [0,1,2,3,4,5];

class Home extends React.Component {

    render() {
        const { user } = this.props;
        return (
        <div id="wrapper">
            <Header />
            <Aside />
            <div id="content">
                <section className="row-item-video-container">
                    <div className="header-section">
                        <div className ="title-text"> Video Trực Tuyến
                        </div>
                    </div>
                    <div className="video-body-card">
                        <div className="video-body-card-inner">
                        {
                            itemListVideo.map((i) => {
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

                {/* Tiếng Anh giao tiếp */}
                <section className="row-item-video-container">
                    <div className="header-section">
                        <div className ="title-text"> Đề xuất cho bạn
                        </div>
                    </div>
                    <div className="video-body-card">
                        <div className="video-body-card-inner">
                        {
                            itemListVideo.map((i) => {
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

                {/* end noi section */}
            </div>{/* end noi content */}
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