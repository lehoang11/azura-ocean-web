import React from "react";
import { Link } from 'react-router-dom';
import userAvatar from "../../assets/img/varun.jpg";
import history from "../../helpers/history";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.input = null;
        this.state = {};
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown, false);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown, false);
    }
    
    onKeyDown(e) {
        if (e.keyCode === 191) {
          const insideInput = e.target.tagName.toLowerCase().match(/input|textarea/);
          if (!insideInput) {
            e.preventDefault();
            this.input.focus();
          }
        }
    }

    onKeyPress(e) {
        if (e.charCode === 13) {
            const value = e.currentTarget.value.trim();
            if (value !== '') {
            // redirect
            history.push('/search?q='+value);
            }
        }
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
                            <span className="logo-text" style={{paddingLeft:'35px'}}>
                                <span style={{color:'#10a7e9', paddingRight: '3px',fontSize:'24px',fontWeight:'bold'}}>A</span><span style={{color:'#10a7e9',fontWeight:'bold'}}>zura</span>
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
                                <div className="app-search d-none d-lg-block" >
                                    <input
                                    ref={(node) => { this.input = node; }}
                                    className="form-control"
                                    placeholder="Search..."
                                    onKeyPress={this.onKeyPress}
                                    type="text"
                                    />
                                    <a href="#" className="active"><i className="fa fa-search"></i></a>
                                </div>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav float-right">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle waves-effect waves-dark" to="#" style={{color:'#333'}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="ml-2 font-medium" style={{color:'#333'}}><i className="ti-upload mr-1 ml-1"></i>Upload</span>
                                    <span className="fa fa-angle-down ml-2"></span>
                                    
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                    <Link className="dropdown-item" to="/upload"><i className="ti-layout-tab-window mr-1 ml-1"></i> upload Tutorial</Link>
                                    <Link className="dropdown-item" to="/openClass"><i className="ti-rss-alt mr-1 ml-1"></i> Open treaming</Link>
                                </div>
                            </li>
                        { user ? (
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle waves-effect waves-dark" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={userAvatar} alt="user" className="rounded-circle" width="36" />
                                    <span className="ml-2 font-medium" style={{color:'#333'}}>{user.username}</span>
                                    <span className="fa fa-angle-down ml-2"></span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                {user.edu ? (
                                        <Link className="dropdown-item" to={'/edu/'+user.edu.shortName}><i className="ti-briefcase mr-1 ml-1"></i>My Edu</Link>
                                    ) :(
                                        <Link className="dropdown-item" to={'/edu_create'}><i className="ti-wallet mr-1 ml-1"></i> Create an Edu</Link>
                                    )
                                }
                                    <Link className="dropdown-item" to="#"><i className="ti-user mr-1 ml-1"></i> My Profile</Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/login"><i className="fa fa-power-off mr-1 ml-1"></i> Logout</a>
                                </div>
                            </li>) :(
                                <a className="dropdown-item" href="/login"><i className="fa fa-power-off mr-1 ml-1"></i> Login</a>
                            )
                        }
                        </ul>
                    </div>
                </nav>
            </header>
    
        );
    }

}


export default Header;
