import React from 'react';
import { Link } from 'react-router-dom';


class AboutTab extends React.Component {
    render (){
        return (     
        <div className="container-fluid">                    
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Cài đặt EDU</h4>
                            <h6 className="card-subtitle">Neu Edu</h6>
                            <form className="form-horizontal pt-3">
                                <div className="form-group row">
                                    <label for="username" className="col-sm-3 control-label">Tên Edu*</label>
                                    <div className="col-sm-9">
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="ti-user"></i></span></div>
                                            <input type="text" className="form-control" id="username" placeholder="Tên Edu" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="email4" className="col-sm-3 control-label">Email*</label>
                                    <div className="col-sm-9">
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="ti-email"></i></span></div>
                                            <input type="email" className="form-control" id="email4" placeholder="Enter email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="web" className="col-sm-3 control-label">Website</label>
                                    <div className="col-sm-9">
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="ti-world"></i></span></div>
                                            <input type="text" className="form-control" id="web" placeholder="Enter Website Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 control-label">Phone*</label>
                                    <div className="col-sm-9">
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="ti-mobile"></i></span></div>
                                            <input type="text" className="form-control" id="exampleInputpwd4" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 control-label">
                                        Mô tả
                                    </label>
                                    <div className="col-sm-9">
                                            <textarea name="ckeditor" id="ckeditor" rows="5" className="ckeditor" style={{width:'100%'}}></textarea>
                                    </div>
                                </div>
                                <div className="form-group row mb-0">
                                    <div className="offset-sm-3 col-sm-9">
                                        <button type="submit" className="btn btn-info waves-effect waves-light">Lưu thay đổi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        );
    }
}

export default AboutTab;