import React, { Component }   from 'react';
import Header  from "./Header";
import SideBar  from "./SideBar";
import "../../assets/css/layout.css"
import { connect } from 'react-redux';
class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        const { user } = this.props;
        //console.log(user)
        return (
            <div>
                <div id="main-wrapper">
                    <Header user = {user} />
                    <SideBar />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user :state.userReducer.user
  });

export default connect(mapStateToProps)(MainLayout);