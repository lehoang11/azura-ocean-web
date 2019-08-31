import React                 from 'react';
import { Link }              from 'react-router-dom';
import eduAPI                from '../../api/eduApi'
import Banner                from  './components/Banner'
import Navigation from       './components/Navigation'
import "../../assets/css/video.css"
import "../../assets/css/edu.css"
import { connect } from 'react-redux';
import toastConstant from '../../constants/toastConstant'
import showToast from '../../components/toast/showToast'
import history from "../../helpers/history";
import queryString from 'query-string'
import EduRouter from '../../routes/eduRouter'
import { getEduByLink } from '../../actions/eduAction'


class EduIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edu: {},
            errors: null,
            tutorials : [],
            isLoadingTutorial: true,
          };
    }



      componentWillMount(){
        //this.getEdu();
        let eduShortName = this.props.match.params.shortName;
        console.log ('Link edu'+ eduShortName);
        this.props.showEdu(eduShortName);
      }

      componentDidMount() {
    
    }


    render (){
        const { user , eduData } = this.props;
        return (
        <div className="page-wrapper">
            <div className="page-content container-fluid">
            {eduData.isDone == true ? (
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Banner />
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
    

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Navigation edu = {eduData.data} user = {user} />
                        
                        <div className="tab-content">
                            <div className="tab-pane active" id="video" role="tabpanel">

                                <EduRouter match={this.props.match} />

                            </div>
                            

                        </div>
                        {/* end tab content */}
                    </div>
                </div>
            </div>
        </div>


    );
    }
}


const mapStateToProps = state => ({
    user :state.userReducer.user,
    eduData: state.eduReducer.edu
  });
    
const mapDispatchToProps = {
    showEdu: getEduByLink,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(EduIndex);