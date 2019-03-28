import React from "react"
import { Link } from 'react-router-dom';
import bannerSchool from "../../assets/img/demo/banner-school.jpg";
import usAvatar from "../../assets/img/varun.jpg";
import FromProfile from "./FromProfile"
class AccountIndex extends React.Component {

      
    render () {
        
        return (
            
            <div className="page-wrapper">

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="simple-banner">
                            <img src={bannerSchool} />
                      </div>  
                    </div>
                 </div>

                <div className="row">
                    
                    <div className="col-lg-4 col-xlg-3 col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <center className="mt-4"> 
                                <img src={usAvatar} className="rounded-circle" width="150" />
                                    <h4 className="card-title mt-2">Hanna Gover</h4>
                                    <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                                    <div className="row text-center justify-content-md-center">
                                        <div className="col-4"><a href="javascript:void(0)" className="link"><i className="icon-people"></i> <font className="font-medium">254</font></a></div>
                                        <div className="col-4"><a href="javascript:void(0)" className="link"><i className="icon-picture"></i> <font className="font-medium">54</font></a></div>
                                    </div>
                                    <div className="row text-center justify-content-md-center">
                                        <button className="btn btn-danger"><span>Theo dõi</span></button>
                                    </div>
                                </center>
                            </div>
                            <div>
                                <hr /> </div>
                            <div className="card-body"> <small className="text-muted">Email address </small>
                                <h6>hannagover@gmail.com</h6> <small className="text-muted pt-4 db">Phone</small>
                                <h6>+91 654 784 547</h6> <small className="text-muted pt-4 db">Address</small>
                                <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                                <div className="map-box">
                                    
                                </div> <small className="text-muted pt-4 db">Social Profile</small>
                                <br/>
                                <button className="btn btn-circle btn-secondary"><i className="fab fa-facebook-f"></i></button>
                                <button className="btn btn-circle btn-secondary"><i className="fab fa-twitter"></i></button>
                                <button className="btn btn-circle btn-secondary"><i className="fab fa-youtube"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-8 col-xlg-9 col-md-7">
                        <div className="card">
                            
                            <ul className="nav nav-pills custom-pills" id="pills-tab" role="tablist">
                                
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#about" role="tab" aria-controls="pills-profile" aria-selected="false">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-setting-tab" data-toggle="pill" href="#setting" role="tab" aria-controls="pills-setting" aria-selected="false">Setting</a>
                                </li>
                            </ul>
                          
                            <div className="tab-content" id="pills-tabContent">
                                
                                <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Full Name</strong>
                                                <br />
                                                <p className="text-muted">Johnathan Deo</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Mobile</strong>
                                                <br />
                                                <p className="text-muted">(123) 456 7890</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Email</strong>
                                                <br />
                                                <p className="text-muted">johnathan@admin.com</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6"> <strong>Location</strong>
                                                <br />
                                                <p className="text-muted">London</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <p className="mt-4">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h4 className="font-medium mt-4">Skill Set</h4>
                                        <hr />
                                        <h5 className="mt-4">Wordpress <span className="pull-right">80%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%',height:'6px'}}> <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        <h5 className="mt-4">HTML 5 <span className="pull-right">90%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%',height:'6px'}}> <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        <h5 className="mt-4">jQuery <span className="pull-right">50%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:'50%',height:'6px'}}> <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="pills-setting-tab">
                                    <FromProfile />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
             

            </div>
            
    
            
        );
    }
}
export default AccountIndex;