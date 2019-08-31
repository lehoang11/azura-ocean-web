import React from 'react'

class CommentItem extends React.Component {
    constructor(props){
        super(props);
    }



    render () {
        return(
            <div className="comment-item">
                <div className="us-comment-avatar">
                    <img src={usAvatar} />
                </div>
                <div className="comment-inner">
                    <div className="us-comment-name">Le Hoang <span className="comment-date">20/20/2019</span></div>
                    <div className="comment-content">this is comment</div>
                </div>
            </div>
        );
    }
}


export default CommentItem;