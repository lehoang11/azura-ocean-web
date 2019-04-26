import React from 'react';
import { Link } from 'react-router-dom';
import VideoTab from "./VideoTab"
import AboutTab from "./AboutTab"
import SettingTab from "./SettingTab"
import eduBannerDefault from "../../assets/images/banner/banner-edu.jpg";
import eduAvatarDefault from "../../assets/images/users/1.jpg";
import eduAPI from '../../services/eduService'

class EduIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edu: {},
            isLoading: true,
            errors: null
          };
    }


      getEdu = () => {
        let eduId = this.props.match.params.id;
        let eduShortName = this.props.match.params.shortName;
        console.log (eduId);
        console.log (eduShortName);
        return eduAPI.getEdu(eduShortName, eduId).then(
            (res) => {
                if (res.data.code == 200) {
                    this.setState({
                        edu: res.data.data,
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
        this.getEdu();
      }
    render (){
        const { isLoading, edu } = this.state;
        
        return (
        <div className="page-wrapper">
            <div className="page-content container-fluid">
            {!isLoading ? (
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                           <div className="banner-edu">
                                <img src={edu.banner ? edu.banner :eduBannerDefault} />
                                    <div className="banner-avatar-edu">
                                        <div className="box-ava">
                                            <img src={edu.avatar ? edu.avatar :eduAvatarDefault} />
                                        </div>
                                    </div>
                                <div className="edu-name-show">
                                    {edu.name}
                                </div>
                                <div className="edu-flow">
                                    <button type="button" className="btn btn-rounded btn-block btn-danger edu-flow-btn"><span>Theo dõi</span></button>
                                </div>
                            </div>  
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
    

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
                               <SettingTab edu ={edu} />
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