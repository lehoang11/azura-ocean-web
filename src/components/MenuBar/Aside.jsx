import React from "react";
import { Link } from 'react-router-dom';
import userAvatar from "../../assets/img/varun.jpg";
// import { connect } from 'react-redux';

class Aside extends React.Component {

    render () {
        return (
            <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item">
                            <Link className="sidebar-link  waves-effect waves-dark profile-dd" to="/home" aria-expanded="false">
                                <img src={userAvatar} className="rounded-circle ml-2" width="30" />
                                <span className="hide-menu">Steve Jection </span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/auth" aria-expanded="false">
                                <i className="mdi mdi-calendar-check"></i>
                                <span className="hide-menu">Calendar</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/vi" aria-expanded="false">
                                <i className="mdi mdi-adjust text-info"></i>
                                <span className="hide-menu">Log Out</span>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </aside>
        );
    }
}

export default Aside;