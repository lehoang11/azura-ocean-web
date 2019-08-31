import React from "react";
import { Link } from 'react-router-dom';
import userAvatar from "../../assets/img/varun.jpg";
// import { connect } from 'react-redux';

class SideBar extends React.Component {

    render () {
        return (
            <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/" aria-expanded="false">
                                <i className="mdi mdi-home"></i>
                                <span className="hide-menu">Home</span>
                            </Link>
                        </li>
                        {/* <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/history" aria-expanded="false">
                                <i className="mdi mdi-history"></i>
                                <span className="hide-menu">History</span>
                            </Link>
                        </li> */}
                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/edufollow" aria-expanded="false">
                                <i className="mdi mdi-calendar-check"></i>
                                <span className="hide-menu">Edu follow</span>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </aside>
        );
    }
}

export default SideBar;