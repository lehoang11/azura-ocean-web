import React from 'react'
import usAvatar from "../../../assets/img/varun.jpg";
import moment from 'moment';

const CommentItem = ({comment, removeComment, user})=> {
    return(
        <div className="comment-item">
            <div className="us-comment-avatar">
                <img src={comment.userAvatar ? comment.userAvatar:usAvatar} />
            </div>
            <div className="comment-inner">
                <div className="us-comment-name">{comment.userName} <span className="comment-date">{moment(comment.createdAt).fromNow()}</span></div>
                <div className="comment-content">{comment.content}</div>
                {(user.id === comment.userId) ? ( <a href="javascript:void(0)" onClick={() => removeComment(comment.id)}>Delete</a>) :(<div></div>)
                }
                
            </div>
        </div>
    );
}



export default CommentItem;