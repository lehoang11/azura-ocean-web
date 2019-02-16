import React from "react";
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';

class Aside extends React.Component {

    render () {
        return (
            <aside>
                <div id="sidebar" className="nav-collapse hide-left-bar">
                    <div className="leftside-navigation">
                        <ul className="sidebar-menu" id="nav-accordion">
                            <li>
                                <Link to="/">
                                    <i class="fa fa-home"></i>
                                    <span>Trang chủ</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i class="fa fa-history"></i>
                                    <span>Lịch sử</span>
                                </Link>
                            </li>
                            
                            <li className="sub-menu">
                                <Link to="#">
                                    <i className="fa fa-book"></i>
                                    <span>Theo dõi</span>
                                </Link>
                                <ul className="sub">
                                    <li><Link to="/abj">Tiếng Anh 123</Link></li>
                                    <li><Link to="/abj">Lập trình Khoa Phạm</Link></li>
                                    <li><Link to="/abj">Mẹo cuộc sống</Link></li>
                                </ul>
                            </li>
 
                        </ul>           
                    </div>
                </div>
            </aside>
        );
    }
}

export default Aside;