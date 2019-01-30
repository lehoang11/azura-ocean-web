import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/img/varun.jpg";
import { connect } from 'react-redux';

class Header extends React.Component {

  
    render () {
        const { user } = this.props;
        return (     
        <nav className="top-nav">
            <div className="app-logo">
                <Link to="#" className="logo-text">azura</Link> 
            </div>            
            <div className="app-nav-search">
                <form className="">
                    <input type="text" name="q" className="app-input-search" placeholder="search" />
                    <button type="submit" className="app-btn-search">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>

            <div className="top-nav-right">
                <div className="user-profile dropdown">
                    <Link to="#" className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <img src={logo} alt="" className="user-avatar-md rounded-circle" /> 
                    </Link>

                    <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                    <div className="nav-user-info">
                    <h5 className="mb-0 text-white nav-user-name">{user.lastName} </h5>
                    </div>
                    <Link to="#" className="dropdown-item">
                    <i className="fa fa-cog mr-2"></i> Setting
                    </Link>
                    <Link to="/login" className="dropdown-item">
                        <i className="fa fa-power-off mr-2"></i>Logout
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    
        );
    }

}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}
export default connect(mapStateToProps)(Header);