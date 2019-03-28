import React from 'react';
import { Link } from 'react-router-dom';
import bannerSchool from "../../assets/img/demo/banner-school.jpg";
import usAvatar from "../../assets/img/varun.jpg";
import VideoTab from "./VideoTab"
import AboutTab from "./AboutTab"
import SettingTab from "./SettingTab"
class EduIndex extends React.Component {
    render (){
        return (
        <div className="page-wrapper">
            <div className="page-content container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="banner-edu">
                            <img src={bannerSchool} />
                            <div className="banner-avatar-edu">
                                <div className="box-ava">
                                    <img src={usAvatar} />
                                </div>
                            </div>
                            <div className="edu-name-show">
                                Neu edu
                            </div>
                            <div className="edu-flow">
                                <button type="button" className="btn btn-rounded btn-block btn-danger edu-flow-btn"><span>Theo dõi</span></button>
                            </div>
                    </div>  
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ul className="nav nav-tabs customtab" role="tablist">
                            <li className="nav-item" style={{marginLeft :'220px'}}> 
                                <a className="nav-link active" data-toggle="tab" href="#video" role="tab"><span className="hidden-sm-up"><i className="ti-video-clapper"></i></span> <span className="hidden-xs-down">Video</span></a> 
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" data-toggle="tab" href="#about" role="tab"><span className="hidden-sm-up"><i className="ti-user"></i></span> <span className="hidden-xs-down">Giới Thiệu</span></a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#setting" role="tab"><span className="hidden-sm-up"><i className="ti-settings"></i></span> <span className="hidden-xs-down">Cài đặt</span></a> 
                            </li>
                        </ul>
                        
                        <div className="tab-content">
                            <div className="tab-pane active" id="video" role="tabpanel">
                               <VideoTab />
                            </div>
                            <div className="tab-pane  p-4" id="about" role="tabpanel">
                                <AboutTab />
                            </div>
                            <div className="tab-pane " id="setting" role="tabpanel">
                               <SettingTab />
                            </div>

                        </div>
                        {/* end tab content */}
                    </div>
                </div>
            </div>
        </div>


    );
    }
}

export default EduIndex;