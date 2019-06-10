import React  from 'react';
import Header  from "../MainLayout/Header";
import SideBar  from "../MainLayout/SideBar";
import "../../assets/css/layout.css"
import { connect } from 'react-redux';
import Account  from './account'
import Private from './private'
import NotFoundPage from './NotFoundPage'
import '../../assets/css/setting.css'

class SettingLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderTabSwitch(){
        const query = new URLSearchParams(this.props.location.search);
        let tab;
        tab = query.get('tab');
        console.log('params' + tab);
        if(tab === undefined || tab === null){
            tab = 'account';
        }
        console.log('tab' + tab);

        switch(tab) {

            case "account":   return <Account />;
            case "private":   return <Private />;
    
            default:      return <NotFoundPage />
          }
    }


    render(){
        
        const { user } = this.props;
        return (
            <div>
                <div id="main-wrapper">
                    <Header user = {user} />
                    <SideBar />

                    {this.renderTabSwitch()}
                    
                    <p>toi la toi</p>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    user :state.userReducer.user
  });

export default connect(mapStateToProps)(SettingLayout);