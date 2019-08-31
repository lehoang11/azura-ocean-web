import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ({edu, user}) => {
    var currentPath = window.location.pathname;
    return (
        <ul className="nav nav-tabs customtab" role="tablist">
            <li className="nav-item" style={{marginLeft :'220px'}}> 
                <Link className={currentPath == '/edu/'+edu.shortName ? "nav-link active":"nav-link" } to={'/edu/'+edu.shortName} ><span className="hidden-sm-up"><i className="ti-video-clapper"></i></span> <span className="hidden-xs-down">Video</span></Link> 
            </li>
            <li className="nav-item"> 
                <Link className={currentPath == '/edu/'+edu.shortName+'/about' ? "nav-link active":"nav-link" } to={'/edu/'+edu.shortName+'/about'} ><span className="hidden-sm-up"><i className="ti-user"></i></span> <span className="hidden-xs-down">About</span></Link> 
            </li>
            {user.edu && user.edu.id === edu.id &&
            <li className="nav-item">
                <Link className={currentPath == '/edu/'+edu.shortName+'/setting' ? "nav-link active":"nav-link" } to={'/edu/'+edu.shortName+'/setting'} ><span className="hidden-sm-up"><i className="ti-settings"></i></span> <span className="hidden-xs-down">Setting</span></Link> 
            </li>
            }
        </ul>
    );
}

export default Navigation;