import React from "react"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uploadAPI from '../../api/uploadApi'
import TutorialAPI from '../../api/tutorialApi'
import _ from 'lodash';
import toastConstant from '../../constants/toastConstant'
import showToast from '../../components/toast/showToast'
import ReactPlayer from 'react-player'
import { getEduByLink } from '../../actions/eduAction'
import LoadingBar from 'react-top-loading-bar'
import ReactLoading from 'react-loading';
import '../../assets/css/upload.css'

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: null,
            loadingBarProgress: 0,
            uploadVideo : false,
            uploadImage : false,
            videoLink : '',
            imageLink : '',
            tutorialForm :{
                name :'',
                avatar :'',
                video : '',
                keyword : '',
                status : '',
                content :'',
                
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleUploadVideo = this.handleUploadVideo.bind(this)
        
    }

    complete = () => {
        this.setState({ loadingBarProgress: 100 })
    }
    
    onLoaderFinished = () => {
        this.setState({ loadingBarProgress: 0 })
    }

    componentDidMount(){
        setTimeout(() => {
            const {user,eduData} = this.props;
            if(eduData.data === null || eduData.data === ''){
                if(user.edu !== null){
                    this.props.showEdu(user.edu.shortName);
                }
            }
        }, 3000);  
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const { tutorialForm } = this.state;
        this.setState({
            tutorialForm: {
                    ...tutorialForm,
                    [name]: value }
        })
    }

    handleUploadImage(event){
        let file = event.target.files[0];
        console.log(file);
        this.setState({ uploadImage : true })
        this.uploadImage(file);
    }

    handleUploadVideo(event){
        let file = event.target.files[0];
        console.log(file);
        this.setState({ uploadVideo : true })
        this.uploadVideo(file);
        
    }

    uploadImage(file){
        return uploadAPI.uploadImageDraft(file).then(
            (res) => {
                this.setState({ uploadImage : false })
                if (res.data.code === 200 && res.data.status === true) {
                    this.setState({
                        imageLink: res.data.url,
                    })
                    console.log(res);
                }
            },
            (err) => {
                console.log("error data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    uploadVideo(file){
        return uploadAPI.uploadVideo(file).then(
            (res) => {
                this.setState({ uploadVideo : false })
                if (res.data.code === 200 && res.data.status === true) {
                    this.setState({
                        videoLink: res.data.url,
                    })
                    console.log(res);
                }
            },
            (err) => {
                console.log("error data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    onClickTutorialPush =()=>{
        this.onLoaderFinished();
        this.onTutorialPush();
    }

    onTutorialPush(){
        const { tutorialForm } = this.state;
        const { user, eduData } = this.props;
        let name = _.trim(tutorialForm.name);
        let avatar = this.state.imageLink;
        let video = this.state.videoLink;
        let eduId = eduData.data.id;
        let valError = true;
        
        valError = this.validationEmpty('Name', name) && valError;
        valError = this.validationEmpty('Avatar', avatar) && valError;
        valError = this.validationEmpty('Video', video) && valError;

        if(valError === false) {
            return;
        } 
        let tutorialModel = {
            name :name,
            userId :user.id,
            eduId :eduId,
            avatar :avatar,
            video : video,
            keyword :tutorialForm.keyword,
            status :tutorialForm.status
        }

        let materialModel = {
            content : tutorialForm.content
        }

        let params = {
            tutorial :tutorialModel,
            material : materialModel
        }
        console.log(params)
        return TutorialAPI.create(params).then(
            (res) => {
                this.complete()
                if (res.data.code == 200) {
                    if(res.data.data.tutorial !== null || res.data.data.tutorial !== ''){
                        // messager create edu success
                        console.log('Tutorial created success ');
                        this.setState({
                            tutorialSubmit: false
                        })
                        showToast("Tutorial created successful",toastConstant.SUCCESS);
                    }else{
                        //messager create edu fail
                        showToast("Tutorial created errror",toastConstant.ERROR);
                    }   
                }
            },
            (err) => {
                console.log("error get data");
                this.setState({
                    errors :err,
                })
            }
        )
        
    }

    validationEmpty = (key,val) =>{
        if (val === '' || val === null ) {
            showToast(key+ " requird", toastConstant.ERROR);
            return false;
        }
        return true;
    }

    renderLoadingMul(){
        return(
            <div className="loading-wrap" style={{width:'100%',height:'100%',margin:'0 auto',position:'relative'}}>
                <div style={{position: 'absolute',top: '50%',left: '50%',margin:'50px 0px 0px -50px'}}>
                    <ReactLoading type="spinningBubbles" color="rgb(53, 126, 221)" />
                </div>
            </div>
        );
    }



    renderTutorialForm(){
        return(
        <div className="form-upload">
            <div className="form-horizontal pt-3">
                <div className={'form-group row' + (this.state.tutorialSubmit && !this.state.tutorialForm.name ? ' has-error' : '')}>
                    <div className="col-sm-12">
                        <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Title"
                        value={this.state.tutorialForm.name}
                        onChange={this.handleInputChange} />
                        {this.state.tutorialSubmit && !this.state.tutorialSubmit.name &&
                        <div className="help-block"> Title is required</div>
                        }
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-12">
                        <input 
                        type="text" 
                        className="form-control" 
                        name="video" 
                        placeholder="Video link" 
                        disabled="" 
                        defaultValue={this.state.videoLink} />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-12">
                        <select 
                        className="form-control" 
                        name="status" 
                        value={this.state.tutorialForm.status}
                        onChange={this.handleInputChange}>
                        <option value="1">public</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-12">
                        <input type="text" 
                        className="form-control" 
                        name="keyword" 
                        placeholder="Keyword"
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-12">
                        <textarea 
                        name="content" 
                        id="ckeditor" 
                        style={{width:'100%'}} rows="5" 
                        className="ckeditor"
                        value={this.state.tutorialForm.content}
                        onChange={this.handleInputChange}
                        >{this.state.tutorialForm.content}</textarea>
                    </div>
                </div>
                <div className="form-group row mb-0">
                    <div className="offset-sm-3 col-sm-9">
                        <button onClick={this.onClickTutorialPush} type="submit" className="btn btn-info waves-effect waves-light">Push</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }


    render () {
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
                                        <div className="video-upload-wrap">
                                            <div className="btn-video-wrap">
                                                <div className="video-btn-wrapper">
                                                <button className="btn">Upload a video or mp3</button>
                                                <input 
                                                type="file" 
                                                name="videoLink" 
                                                onChange={this.handleUploadVideo}
                                                />
                                                </div> 
                                            </div>
                                            <div className="show-video-upload">
                                                {this.state.videoLink ?
                                                   (<ReactPlayer
                                                    url={this.state.videoLink}
                                                    className='react-player'
                                                    playing
                                                    controls
                                                    width='250px'
                                                    height='180px'  />
                                                    ):('')
                                                }
                                                {this.state.uploadVideo ? this.renderLoadingMul() :''}
                                            </div>
                                        </div>
                                        <div className="image-upload-wrap">
                                            <div className="btn-img-upload">
                                                <div className="image-btn-wrapper">
                                                    <button className="btn">Upload thumbnail
                                                    </button>
                                                    <input 
                                                    type="file" 
                                                    name="imageLink"
                                                    onChange={this.handleUploadImage}
                                                     />
                                                </div>
                                            </div>
                                            <div className="show-img-upload">
                                                {this.state.imageLink !=='' && <img src={this.state.imageLink} style={{width:'220px',height:'150px'}}/>}
                                                {this.state.uploadImage ? this.renderLoadingMul() :''}
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
    
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="card">
                                <div className="card-body">
                                    {this.renderTutorialForm()}
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

const mapDispatchToProps = {
    showEdu: getEduByLink,
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Upload);