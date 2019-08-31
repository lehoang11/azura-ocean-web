import React from 'react'
import eduBannerDefault from "../../../assets/images/banner/banner-edu.jpg";
import eduAvatarDefault from "../../../assets/images/users/1.jpg";
import { connect } from 'react-redux';
import eduAPI                from '../../../api/eduApi'
import queryString from 'query-string'
import history from "../../../helpers/history";
import uploadAPI from '../../../api/uploadApi'
import { getEduByLink } from '../../../actions/eduAction'
import toastConstant from '../../../constants/toastConstant'
import showToast from '../../../components/toast/showToast'
import ReactLoading from 'react-loading';

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errors: null,
            followSubmitted: false,
            eduUserFollow : null,
            countEduFollow :0,
            uploadBanner : false,
            uploadAvatar : false,
            imageLink : '',
        };

        this.handleUploadAvatar = this.handleUploadAvatar.bind(this);
        this.handleUploadBanner = this.handleUploadBanner.bind(this);
        
    }

    handleUploadAvatar(event){
        let file = event.target.files[0];
        console.log(file);
        this.setState({ uploadAvatar : true })
        this.uploadAvatar(file);
    }

    handleUploadBanner(event){
        let file = event.target.files[0];
        console.log(file);
        this.setState({ uploadBanner : true })
        this.uploadBanner(file);
    }

    componentWillMount(){

    }

    componentDidMount() {
        setTimeout(() => {
           // let eduId = this.state.edu.id;
            const {eduData, user} = this.props;
            let eduId = eduData.data.id;
            if(eduId !=='' || eduId !==undefined){
                console.log('eduId' +eduId);
            
                //this.getListTutorialByEduId(eduId);
                if(user && user !== null){
                    const paramsFollow = queryString.stringify({
                        eduId: eduId,
                        userId :user.id
                    });
                    console.log("uq"+paramsFollow)
                    this.getEduFollow(paramsFollow);
                }
                const paramsCountFollow = queryString.stringify({eduId: eduId});
                console.log("eq"+paramsCountFollow)
                this.getCountEduFollow(paramsCountFollow);
            }
        }, 1000);    
    }

    onClickFollow = () =>{
        this.onEduFollow();    
    }

    onEduFollow = () => {
        const {eduData, user} = this.props;
        const { eduUserFollow } = this.state;
        let eduId = eduData.data.id; 
        let userId = user.id;
        if(user == null || user ==undefined){
            history.push('/login');
        }
        if(eduUserFollow === null){
            //save follow
            const params = {
                eduId : eduId,
                userId : userId
            };
            this.EduFollow(params)
        }
        if(eduUserFollow !== null){
            this.EduUnFollow(eduUserFollow)
        }
    }

    getEduFollow(params){
        return eduAPI.getEduFollow(params).then(
            (res) => {
                if (res.data.code == 200 && res.data.data !== null) {
                    this.setState({
                        eduUserFollow: res.data.data,
                    })
                    console.log(res.data.data);
                }
            },
            (err) => {
                console.log("error get edu user follow data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    getCountEduFollow(params){
        return eduAPI.getCountEduFollow(params).then(
            (res) => {
                if (res.data.code == 200 && res.data.data !== null) {
                    this.setState({
                        countEduFollow: res.data.data,
                    })
                    console.log("count" +res.data.data);
                }
            },
            (err) => {
                console.log("error get edu user follow data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    EduFollow(params){
        return eduAPI.eduFollow(params).then(
            (res) => {
                if (res.data.code == 200 && res.data.data !== null) {
                    this.setState({
                        eduUserFollow: res.data.data,
                        countEduFollow :this.state.countEduFollow + 1,
                    })
                    console.log(res.data.data);
                }
            },
            (err) => {
                console.log("error get edu user follow data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    EduUnFollow(params){
        return eduAPI.eduUnFollow(params).then(
            (res) => {
                if (res.data.code == 200 && res.data.data === true) {
                    this.setState({
                        eduUserFollow: null,
                        countEduFollow :this.state.countEduFollow - 1,
                    })
                }
            },
            (err) => {
                console.log("error get edu user follow data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    uploadAvatar(file){
        return uploadAPI.uploadImage(file).then(
            (res) => {
                this.setState({ uploadAvatar : false })
                if (res.data.code === 200 && res.data.status === true) {
                    // this.setState({
                    //     imageLink: res.data.url,
                    // })
                    this.onChangeAvatar(res.data.url);
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

    uploadBanner(file){
        return uploadAPI.uploadImage(file).then(
            (res) => {
                this.setState({ uploadBanner : false })
                if (res.data.code === 200 && res.data.status === true) {
                    // this.setState({
                    //     imageLink: res.data.url,
                    // })
                    this.onChangeBanner(res.data.url);
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

    onChangeAvatar = (avatar) => {
        const { eduData } = this.props;
        let params = {
            key :'avatar',
            edu :{
                id :eduData.data.id,
                avatar :avatar
            }
        }
        this.eduUpdate(params);  
    }

    onChangeBanner = (banner) => {
        const { eduData } = this.props;
        let params = {
            key :'banner',
            edu :{
                id :eduData.data.id,
                banner :banner
            }
        }
        this.eduUpdate(params);  
    }

    eduUpdate = (params) => {
        const { eduData } = this.props;
        return eduAPI.eduUpdate(params).then(
            (res) => {
                if (res.data.code == 200) {
                    if(res.data.data != null || res.data.data != ''){
                        // messager create edu success
                        this.props.showEdu(eduData.data.shortName);
                        console.log('success update edu');
                    }else{
                        //messager create edu fail
                        showToast("Edu update errror",toastConstant.ERROR);
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

    renderLoadingMul(){
        return(
            <div className="loading-wrap" style={{width:'100%',height:'100%',margin:'0 auto',position:'relative'}}>
                <div style={{position: 'absolute',top: '50%',left: '50%',margin:'50px 0px 0px -50px'}}>
                    <ReactLoading type="spinningBubbles" color="rgb(53, 126, 221)" />
                </div>
            </div>
        );
    }

    render () {
        const { eduUserFollow, countEduFollow } = this.state;
        const { eduData } = this.props;
        const edu = eduData.data; 
        return (
            <div className="banner-edu">
                <div className="img-main">
                    <img src={edu.banner ? edu.banner :eduBannerDefault} />
                    <div className="update-banner">
                        <div className="banner-update-wrapper">
                            <div className="fload">Update
                            </div>
                            <input 
                            type="file" 
                            name="banner"
                            onChange={this.handleUploadBanner}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="banner-avatar-edu">
                    <div className="box-ava">
                        <img src={edu.avatar ? edu.avatar :eduAvatarDefault} />
                        <div className="caption">
                            <div className="file-btn-wrapper">
                                <div className="fload">Update
                                </div>
                                <input 
                                type="file" 
                                name="avatar"
                                onChange={this.handleUploadAvatar}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edu-name-show">
                    {edu.name}
                </div>
                <div className="edu-flow">
                    <button onClick={this.onClickFollow} type="submit" className="btn btn-rounded btn-block btn-danger edu-flow-btn"><span>{eduUserFollow ? 'UnFollow' :'Follow'} &nbsp; {countEduFollow} </span></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);