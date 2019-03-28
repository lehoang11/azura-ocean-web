import React from "react"
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"
import { Link } from 'react-router-dom';
import usAvatar from "../../assets/img/varun.jpg";
import bannerSchool from "../../assets/img/demo/banner-school.jpg";


class FromProfile extends React.Component {

      
    render () {
        return (  
            <div className="card-body">
                <form className="form-horizontal form-material">
                    <div className="form-group">
                        <label className="col-md-12">Full Name</label>
                        <div className="col-md-12">
                            <input type="text" placeholder="Johnathan Doe" className="form-control form-control-line" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="example-email" className="col-md-12">Email</label>
                        <div className="col-md-12">
                            <input type="email" placeholder="johnathan@admin.com" className="form-control form-control-line" name="example-email" id="example-email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-12">Password</label>
                        <div className="col-md-12">
                            <input type="password" value="password" className="form-control form-control-line" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-12">Phone No</label>
                        <div className="col-md-12">
                            <input type="text" placeholder="123 456 7890" className="form-control form-control-line" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-12">Message</label>
                        <div className="col-md-12">
                            <textarea rows="5" className="form-control form-control-line"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-12">Select Country</label>
                        <div className="col-sm-12">
                            <select className="form-control form-control-line">
                                <option>London</option>
                                <option>India</option>
                                <option>Usa</option>
                                <option>Canada</option>
                                <option>Thailand</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <button className="btn btn-success">Update Profile</button>
                        </div>
                    </div>
                </form>
            </div>
    
        );
    }
}
export default FromProfile;