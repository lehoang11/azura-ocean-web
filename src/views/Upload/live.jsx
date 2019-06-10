import React from "react"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uploadAPI from '../../api/uploadApi'
import _ from 'lodash';
import toastConstant from '../../constants/toastConstant'
import showToast from '../../components/toast/showToast'
import LoadingBar from 'react-top-loading-bar'
import ReactLoading from 'react-loading';
import '../../assets/css/upload.css'

class OpenStreaming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: null,
            loadingBarProgress: 0,
            uploadVideo : false,
            uploadImage : false,
            videoLink : '',
            imageLink : '',

        };

        
    }

    render() {
        return (
        <div>
                <LoadingBar
                progress={this.state.loadingBarProgress}
                height={3}
                color="red"
                />
            
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    <div className="row">
                    
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="upload-page-wrapper">
                                        
                                     upload
                                    </div> 
                                </div> 
    
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="card">
                                <div className="card-body">
                                    {/* {this.renderTutorialForm()} */}
                                </div> 
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body" style={{minHeight:'800px'}}>
                                    <div className="card-title">Pa Adonis Le</div>
                                </div> 
                            </div>
                        </div>
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

    
export default connect(mapStateToProps)(OpenStreaming);