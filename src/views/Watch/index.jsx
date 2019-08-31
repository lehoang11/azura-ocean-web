import React from "react"
import { Link } from 'react-router-dom';
import { Player, ControlBar } from 'video-react';
import "video-react/dist/video-react.css";
import ReactPlayer from 'react-player'
import ShowMore from 'react-show-more';
import usAvatar from "../../assets/img/varun.jpg";
import TutorialAPI from '../../api/tutorialApi';
import moment from 'moment';
import '../../assets/css/watch.css'
import commentAPI from '../../api/commentApi';
import CommentItem from './components/CommentItem'
import queryString from 'query-string'
import _ from 'lodash';
import { connect } from 'react-redux';
import history from "../../helpers/history";
import eduAPI   from '../../api/eduApi'
import likeAPI   from '../../api/likeApi'
import ImageDocCoCauBai from "../../assets/img/doc-co-cau-bai.jpg";

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorial: [],
            isLoading: true,
            errors: null,
            userHasLike : null,
            countLike :0,
            followSubmitted: false,
            eduUserFollow : null,
            countEduFollow :0,
            commentSubmit :false,
            commentObj :{},
            commentList :[],
            commentNew : null,
            commentForm :{
                commentContent :''
            }
        };
        this.removeComment = this.removeComment.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    removeComment(id){
        this.commentDelete(id);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const { commentForm } = this.state;
        this.setState({
            commentForm: {
                    ...commentForm,
                    [name]: value }
        })
    }

    componentDidMount() {
        this.getTutorialById();

        setTimeout(() => {
            this.getCommentList();

            const {tutorial } = this.state;

            const { user} = this.props;
            let eduId = tutorial.eduId;
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
                    //check user Like
                    this.checkUserLike();
                }
                const paramsCountFollow = queryString.stringify({eduId: eduId});
                console.log("eq"+paramsCountFollow)
                this.getCountEduFollow(paramsCountFollow);
            }

        }, 3000);

        setTimeout(() => {
            let tutorialId = this.props.match.params.id;
            this.updateView(tutorialId);

        }, 5000);
    }

    onClickFollow = () =>{
        this.onEduFollow();    
    }

    checkUserLike = () =>{
        const {tutorial } = this.state;
        const {user } = this.props;
        let params = queryString.stringify({
            tutorialId: tutorial.id,
            userId :user.id
        });
        this.checkUserHasLike(params);  
    }

    onEduFollow = () => {
        const {tutorial, eduUserFollow } = this.state;
        const { user} = this.props;
        let eduId = tutorial.eduId; 
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

    getTutorialById = () => {
        let tutorialId = this.props.match.params.id;
        console.log (tutorialId);
        return TutorialAPI.getTutorialById(tutorialId).then(
            (res) => {
                if (res.data.code == 200) {
                    this.setState({
                        tutorial: res.data.data,
                        isLoading: false,
                    })
                }
            },
            (err) => {
                console.log("error get data");
                this.setState({
                    isLoading: true,
                    errors :err,
                })
            }
        )
    }

    getCommentList(){
        let tutorialId = this.props.match.params.id;
        const params = queryString.stringify({
            tutorialId : tutorialId,
            currentPage :1,
            pageSize :20
        });
        this.commentFilter(params);
    }

    onClickComment = () => {
        const {user} = this.props;
        if(!user){
            history.push('/login');
        }
        this.setState({
            commentSubmit:true
        });
        const content = this.state.commentForm.commentContent;
        let params = {
            tutorialId :this.state.tutorial.id,
            userId :user.id,
            content :content
        }
        if(content !== '' && content !== null){
            this.commentCreate(params);
        }
        
    }

    commentCreate = (params) => {
        return commentAPI.commentCreate(params).then(
            (res) => {
                if (res.data.code == 200) {
                    let commentNew = res.data.data;
                    let {commentList} = this.state;
                    commentList.unshift(commentNew);  
                    this.setState({
                        commentList:commentList,
                        commentSubmit: false,
                    })
                }
            },
            (err) => {
                console.log("error submit data");
                this.setState({
                    commentSubmit: false,
                    errors :err,
                })
            }
        )
    }

    commentFilter = (params) => {
        return commentAPI.commentFilter(params).then(
            (res) => {
                if (res.data.code == 200) {
                    this.setState({
                        commentObj :res.data.data,
                        commentList: res.data.data.content,
                        commentLoading: false,
                    })
                }
            },
            (err) => {
                console.log("error submit data");
                this.setState({
                    commentLoading: false,
                    errors :err,
                })
            }
        )
    }

    commentDelete(id){
        return commentAPI.commentDelete(id).then(
            (res) => {
                if (res.data.code == 200 && res.data.data === true) {
                    this.setState(prevState => ({
                        commentList: prevState.commentList.filter(comment => comment.id != id )
                    }));
                }
            },
            (err) => {
                console.log("error delete data");
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

    checkUserHasLike(params){
        return likeAPI.likeCheckHasUser(params).then(
            (res) => {
                if (res.data.code == 200 && res.data.data !== null) {
                    this.setState({
                        userHasLike: res.data.data,
                    })
                    console.log(res.data.data);
                }
            },
            (err) => {
                console.log("error follow data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    onClickLike = () =>{
        const {user} = this.props;
        const {tutorial, userHasLike} = this.state;
        if(!user){
            history.push('/login');
        }
        if(userHasLike === null){
            //save like
            const params = {
                tutorialId : tutorial.id,
                userId : user.id
            };
            this.LikeCreate(params)
        }
        if(userHasLike !== null){
            this.LikeRemove(tutorial.id)
        }
        
    }

    LikeRemove(params){
        return likeAPI.likeDelete(params).then(
            (res) => {
                if (res.data.code == 200 && res.data.data === true) {
                    this.setState({
                        userHasLike: null,
                        countLike :this.state.countLike -1,
                    })
                }
            },
            (err) => {
                console.log("error remove data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    LikeCreate(params){
        return likeAPI.LikeCreate(params).then(
            (res) => {
                if (res.data.code == 200 && res.data.data !== null) {
                    this.setState({
                        userHasLike: res.data.data,
                        countLike :this.state.countLike + 1,
                    })
                    console.log(res.data.data);
                }
            },
            (err) => {
                console.log("error create like");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    updateView(id){
        return TutorialAPI.updateView(id).then(
            (res) => {
                if (res.data.code == 200 && res.data.data === true) {
                    console.log('update View succes')
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



    render () {
        const { isLoading, tutorial, eduUserFollow, countEduFollow, userHasLike } = this.state;
        const {user} = this.props;
        
        return (
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    <div className="row">
                        <div className=" col-md-8">
                        {!isLoading ? (
                            <div>
                            <div className="azura-video-player">
                                <ReactPlayer
                                url={tutorial.medialUrl}
                                className='react-player'
                                playing
                                controls
                                width='100%'
                                height='100%' />
                            </div>
                                    
                            <div className="video-player-details">
                                <div className="video-player-name">
                                {tutorial.name}
                                </div>
                                <div className="video-player-pra">
                                    <span className="video-player-date">
                                        <i className="fa fa-calendar-alt"></i>&nbsp;{moment(tutorial.createdAt).fromNow()}
                                    </span>
                                    <span className="video-player-view">
                                        <i className="fa fa-eye"></i>&nbsp;{tutorial.viewTotal}
                                    </span>
                                    <span className="video-player-like">
                                    <a className="text-dark" href="javascript:void(0)" onClick={this.onClickLike} >
                                        <span>{userHasLike ? <i className="text-info fa fa-thumbs-up"></i> :<i className="fa fa-thumbs-up"></i>} &nbsp;{tutorial.likeTotal} </span>
                                    </a>
                                    </span>
                                    {/* <span className="video-player-unlike">
                                        <i className="fas fa-thumbs-down"></i>&nbsp;0
                                    </span> */}
                                    <span className="video-player-flow">
                                        <button className="btn btn-danger" onClick={this.onClickFollow} ><span>{eduUserFollow ? 'UnFollow' :'Follow'} &nbsp; {countEduFollow} </span></button>
                                    </span>
                                </div>
                                <div className="video-player-watch">
                                    <span className="video-edu-avatar">
                                        <img src={tutorial.eduAvatar ? tutorial.eduAvatar:usAvatar} />
                                    </span>
                                    <span className="video-edu-name">
                                    <Link to={'/edu/'+tutorial.eduShortName}>{tutorial.eduName}</Link>
                                    </span>
                                </div>
                                <div className="video-player-des">
                                    <p className="video-player-tag">
                                    {tutorial.keyword}
                                    </p>
                                    <div className="content-des">
                                        <ShowMore
                                        lines={3}
                                        more='Hiển thị thêm'
                                        less='Rút gọn'
                                        anchorClass='' >
                                        {tutorial.content}
                                        </ShowMore>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-wrap">
                                <div className="form-comment">
                                    <textarea 
                                    name="commentContent"
                                    className="form-control" 
                                    placeholder="comment" 
                                    value={this.state.commentForm.commentContent}
                                    onChange={this.handleInputChange}>{this.state.commentForm.commentContent}</textarea>
                                    <div className="comment-submit">
                                        <button onClick={this.onClickComment} type="submit" className="btn btn-info">Comment</button>
                                    </div>
                                </div>
                                <p>Total comment {this.state.commentObj.totalElements}</p>
                                <div className="comment-list">
                                    
                                    {this.state.commentList.map((comment, i)=> {
                                        return (
                                            <CommentItem 
                                            key={i} 
                                            user = {user}
                                            removeComment = {this.removeComment}
                                            comment={comment} />
                                        );
                                    })
                                    }

                                </div>
                            </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                        </div> 
    
                            
                        
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">

                                    <div className="playlist-wrap">

                                        <div className="item-playlist">
                                            <div className="thumb">
                                                <Link to={'/watch/'}>
                                                    <img src= {ImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>
                                            
                                                <div className = "time-play">
                                                    <span className ="duration">45:20</span>
                                                </div>
                                            </div>
                                       
                                            <div className="playlist-detail">
                                                <h3>
                                                    <Link to={'/watch/'} className ="title"> Học tiếng anh cấp tốc chương trình lớp 1</Link>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="item-playlist">
                                            <div className="thumb">
                                                <Link to={'/watch/'}>
                                                    <img src= {ImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>
                                            
                                                <div className = "time-play">
                                                    <span className ="duration">45:20</span>
                                                </div>
                                            </div>
                                       
                                            <div className="playlist-detail">
                                                <h3>
                                                    <Link to={'/watch/'} className ="title"> Học tiếng anh cấp tốc chương trình lớp 2 </Link>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="item-playlist">
                                            <div className="thumb">
                                                <Link to={'/watch/'}>
                                                    <img src= {ImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>
                                            
                                                <div className = "time-play">
                                                    <span className ="duration">45:20</span>
                                                </div>
                                            </div>
                                       
                                            <div className="playlist-detail">
                                                <h3>
                                                    <Link to={'/watch/'} className ="title"> Học tiếng anh cấp tốc chương trình lớp 3 </Link>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="item-playlist">
                                            <div className="thumb">
                                                <Link to={'/watch/'}>
                                                    <img src= {ImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>
                                            
                                                <div className = "time-play">
                                                    <span className ="duration">45:20</span>
                                                </div>
                                            </div>
                                       
                                            <div className="playlist-detail">
                                                <h3>
                                                    <Link to={'/watch/'} className ="title"> Học tiếng anh cấp tốc chương trình lớp 4 </Link>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="item-playlist">
                                            <div className="thumb">
                                                <Link to={'/watch/'}>
                                                    <img src= {ImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>
                                            
                                                <div className = "time-play">
                                                    <span className ="duration">45:20</span>
                                                </div>
                                            </div>
                                       
                                            <div className="playlist-detail">
                                                <h3>
                                                    <Link to={'/watch/'} className ="title"> Học tiếng anh cấp tốc chương trình lớp 5</Link>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="item-playlist">
                                            <div className="thumb">
                                                <Link to={'/watch/'}>
                                                    <img src= {ImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>
                                            
                                                <div className = "time-play">
                                                    <span className ="duration">45:20</span>
                                                </div>
                                            </div>
                                       
                                            <div className="playlist-detail">
                                                <h3>
                                                    <Link to={'/watch/'} className ="title"> Học tiếng anh cấp tốc chương trình lớp 6 </Link>
                                                </h3>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="videolist-y-wrap">
                                        <div className="item-videolist-y">
                                            <div className ="thumb">
                                                <Link to={'/watch/'}>
                                                    <img src= {ImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>

                                                <div className = "time-play">
                                                    <span className ="duration">45:20</span>
                                                </div>
                                            </div>
                                            
                                            <div className="videolist-y-detail">
                                                <h3>
                                                    <Link to={'/watch/'} className ="title"> Học tiếng anh cấp tốc chương trình lớp 6 </Link>
                                                </h3>
                                                <div className = "meta">
                                                    <span className = "view-meta">{tutorial.viewTotal} <i className="ti-eye"></i> </span>
                                                    <span className = "date-meta">{moment(tutorial.createdAt).fromNow()}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-videolist-y">
                                            <div className ="thumb">
                                                <Link to={'/watch/'}>
                                                    <img src= {ImageDocCoCauBai} alt="videoImageDocCoCauBai" />
                                                </Link>

                                                <div className = "time-play">
                                                    <span className ="duration">45:20</span>
                                                </div>
                                            </div>
                                            
                                            <div className="videolist-y-detail">
                                                <h3>
                                                    <Link to={'/watch/'} className ="title"> Học tiếng anh cấp tốc chương trình lớp 6 </Link>
                                                </h3>
                                                <div className = "meta">
                                                    <span className = "view-meta">{tutorial.viewTotal} <i className="ti-eye"></i> </span>
                                                    <span className = "date-meta">{moment(tutorial.createdAt).fromNow()}</span>
                                                </div>
                                            </div>
                                        </div>

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
    user :state.userReducer.user
});
 
export default connect(mapStateToProps)(Watch);