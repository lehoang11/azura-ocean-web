import React from "react";
import { Link } from 'react-router-dom';
import userAvatar from "../../assets/img/varun.jpg";
import logoIconDark from "../../assets/images/logos/logo-icon.png";
import logoIconLight from "../../assets/images/logos/logo-light-icon.png";
import logoDark from "../../assets/images/logos/logo-text.png";
import logoLight from "../../assets/images/logos/logo-light-text.png";
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        const { user } = this.props;
        return (
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header border-right">
                        <Link to="#" className="nav-toggler waves-effect waves-light d-block d-md-none">
                        <i className="ti-menu ti-close"></i></Link>
                        <Link className="navbar-brand" to={'/'}>
                            <b className="logo-icon">
                                <img src={logoIconDark} alt="homepage" className="dark-logo" />
                                <img src={logoIconLight} alt="homepage" className="light-logo" />
                            </b>
                            <span className="logo-text">
                                <img src={logoDark} alt="homepage" className="dark-logo" />
                                <img src={logoLight} className="light-logo" alt="homepage" />
                            </span>
                        </Link>
                        
                        <Link className="topbartoggler d-block d-md-none waves-effect waves-light" to="#" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more"></i></Link>
                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav float-left mr-auto">
                            <li className="nav-item ">
                                <Link className="nav-link sidebartoggler waves-effect waves-light" to="#" data-sidebartype="mini-sidebar">
                                <i className="mdi mdi-menu font-18"></i>
                                </Link>
                            </li>
                            <li className="nav-item search-box">
                                <form className="app-search d-none d-lg-block">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <Link to="/av" className="active"><i className="fa fa-search"></i></Link>
                                </form>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav float-right">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle waves-effect waves-dark" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={userAvatar} alt="user" className="rounded-circle" width="36" />
                                    <span className="ml-2 font-medium">{user.email}</span>
                                    <span className="fa fa-angle-down ml-2"></span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                    
                                    <Link className="dropdown-item" to="#"><i className="ti-user mr-1 ml-1"></i> My Profile</Link>
                                    <Link className="dropdown-item" to="#"><i className="ti-wallet mr-1 ml-1"></i> My Balance</Link>
                                    <Link className="dropdown-item" to="#"><i className="ti-email mr-1 ml-1"></i> Inbox</Link>
                                    
                                    <Link className="dropdown-item" to="#"><i className="ti-settings mr-1 ml-1"></i> Account Setting</Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/login"><i className="fa fa-power-off mr-1 ml-1"></i> Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
    
        );
    }

}


export default Header;