import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"
import { Link } from 'react-router-dom';
import "../../assets/css/school.css"
import "../../assets/css/video.css"
import bannerSchool from "../../assets/img/demo/banner-school.jpg";
import usAvatar from "../../assets/img/varun.jpg";
import { Route, Switch  } from 'react-router-dom';
import About from "./About"
import Setting from "./Setting"
import Video from "./Video"


class SchoolView extends React.Component {
    
    render() {
        const { user } = this.props;
        let usId = this.props.match.params.id;
        console.log (usId);
        return (
        <div id="wrapper">
            <Header />
            <Aside />
            <div id ="us-school">
                <div className="us-inner">
                    <div className="thumb">
                         <img className="i-us-school" src={bannerSchool} alt="banner" />
                    </div>
                </div>
            </div>
            <div id="header-school-intro" className ="xycontainer-full">
                <div className="inner-body">
                    <div className="top-header-intro">
                        <div className="avatar-us">
                            <img src={usAvatar} alt="us avatar" />
                        </div>
                        <div className="us-name">University Stofond </div>
                        <div className ="flow-us">
                            <button className ="btn-flow-us btn-danger"><span>Theo dõi</span></button>
                        </div>
                    
                    </div>
                    <nav id="us-nav">
                        <ul>
                            <li className="active"><Link to={'/edu/'+usId }>Video tải lên </Link></li>
                            <li><Link to={'/edu/'+ usId +'/about'}>giới thiệu</Link></li>
                            <li><Link to={'/edu/'+ usId +'/setting'}>Cài đặt</Link></li>

                        </ul>
                    </nav>
                </div>
            </div>
            <div id="content">
                <div>
                <Switch>
                    <Route path="/edu/:usId/" exact component={Video} />
                    <Route path="/edu/:usId/about" component={About} />
                    <Route path="/edu/:usId/setting" component={Setting} />
                </Switch>
                </div>

                {/* end noi section */}
            </div>{/* end noi content */}
        </div>
            
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

export default connect(mapStateToProps)(SchoolView);