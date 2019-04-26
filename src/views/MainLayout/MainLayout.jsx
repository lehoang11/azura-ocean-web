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

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}
export default connect(mapStateToProps)(MainLayout);