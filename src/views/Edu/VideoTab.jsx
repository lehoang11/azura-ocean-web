import React from 'react';
import { Link } from 'react-router-dom';
import videoImageDocCoCauBai from "../../assets/img/doc-co-cau-bai.jpg";

class VideoTab extends React.Component {
    render (){
        return (                                        
            <div className="container-fluid">
                <div className="row p-4">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        <div className="section-title-box">
                            <div className ="section-title text-uppercase"> Video tải lên
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        <section className="list-video-show">
                            <div className="video-body-card">

                                <div className = "video-item-thumbnail">
                                    <div className = "thumbnail-inner">
                                        <div className ="thumb-box">
                                            <Link to="/">
                                            <img src={videoImageDocCoCauBai} alt="videoImageDocCoCauBai" />
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
                                            <Link to ="#" className ="video-auth-text">chris le</Link>
                                        </div>
                                        <div className = "video-detail-meta">
                                            <span className = "view-meta">3.5k luot xem </span>
                                            <span className = "date-meta">2 thang truoc</span>
                                        </div>
                                    </div>
                                </div>

                            </div>       
                        </section>
                    </div>
                </div>
            </div>


        );
    }
}

export default VideoTab;