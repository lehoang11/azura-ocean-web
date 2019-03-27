import React from "react"
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"
import { Link } from 'react-router-dom';
import usAvatar from "../../assets/img/varun.jpg";

class AccountProfile extends React.Component {

      
    render () {
        
        return (
            
        <div id="wrapper">
            <Header />
            <Aside /> 
            <div id="content">

                     <div className ="container acount-page">
                        <div className="header">
                            <div className="title">Cài đặt thông tin tài khoản</div>
                        </div>
                        <hr />
                        <div className ="row acount-page-content">
                        <div className ="col-md-3">
                            <div className ="text-center">
                            <img src={usAvatar} className ="avatar img-circle" alt="avatar" />
                            <h6>Upload một hình ảnh khác...</h6>
                            <input type="file" className ="form-control" />
                            </div>
                        </div>
                        
                        <div className ="col-md-9 personal-info">
                            <h3>Thông tin user</h3>
                            <form className ="form-horizontal" role="form">
                            <div className ="form-group">
                                <label className ="col-lg-3 control-label">First name:</label>
                                <div className ="col-lg-8">
                                <input className ="form-control" type="text" value="Jane" />
                                </div>
                            </div>
                            <div className ="form-group">
                                <label className ="col-lg-3 control-label">Last name:</label>
                                <div className ="col-lg-8">
                                <input className ="form-control" type="text" value="Bishop" />
                                </div>
                            </div>
                            <div className ="form-group">
                                <label className ="col-lg-3 control-label">Company:</label>
                                <div className ="col-lg-8">
                                <input className ="form-control" type="text" value="" />
                                </div>
                            </div>
                            <div className ="form-group">
                                <label className ="col-lg-3 control-label">Email:</label>
                                <div className ="col-lg-8">
                                <input className ="form-control" type="text" value="janesemail@gmail.com" />
                                </div>
                            </div>
                            <div className ="form-group">
                                <label className ="col-md-3 control-label">Username:</label>
                                <div className ="col-md-8">
                                <input className ="form-control" type="text" value="janeuser" />
                                </div>
                            </div>
                            <div className ="form-group">
                            <label className ="col-md-3 control-label"></label>
                            <div className ="col-md-8">
                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">Thay đổi mật khẩu</button>
                            </div>
                            </div>
                            <div className ="form-group">
                                <label className ="col-md-3 control-label">Xác nhận mật khẩu</label>
                                <div className ="col-md-8">
                                <input className ="form-control" type="password" value="11111122333" />
                                </div>
                            </div>
                            <div className ="form-group">
                                <label className ="col-md-3 control-label"></label>
                                <div className ="col-md-8">
                                <input type="button" className ="btn btn-primary" value="Save Changes" />
                                <span></span>
                                <input type="reset" className ="btn btn-default" value="Cancel" />
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    </div>
                        {/* Model change password */}
                        <div className="modal fade" id="myModal" role="dialog">
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Thay đổi mật khẩu</h4>
                                </div>
                                <div className="modal-body">
                                <form className ="form-horizontal" role="form">
                                    <div className ="form-group">
                                        <label className ="col-md-3 control-label">Mật khẩu củ của bạn</label>
                                        <div className ="col-md-8">
                                        <input className ="form-control" type="password" value="11111122333" />
                                        </div>
                                    </div>   
                                    <div className ="form-group">
                                        <label className ="col-md-3 control-label">Mật khẩu mới</label>
                                        <div className ="col-md-8">
                                        <input className ="form-control" type="password" value="11111122333" />
                                        </div>
                                    </div>
                                    <div className ="form-group">
                                        <label className ="col-md-3 control-label">Xác nhận mật khẩu mới</label>
                                        <div className ="col-md-8">
                                        <input className ="form-control" type="password" value="11111122333" />
                                        </div>
                                    </div>
                                    
                                </form>
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-info" data-dismiss="modal">Lưu thay đổi</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* Model change password */}

            </div>
        </div>
            
        );
    }
}
export default AccountProfile;