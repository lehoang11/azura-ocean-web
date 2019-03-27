import React, { Component }   from 'react';
import Header  from "./Header";
import SideBar  from "./SideBar";
import "../../assets/css/layout.css"

class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                <div id="main-wrapper">
                    
                    <Header />
                    <SideBar />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MainLayout;