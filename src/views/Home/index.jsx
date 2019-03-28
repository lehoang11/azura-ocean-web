import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"
import { Link } from 'react-router-dom';
import "../../assets/css/video.css"
import VideoList from "../../components/Video/VideosList"



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
                            <VideoList />
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