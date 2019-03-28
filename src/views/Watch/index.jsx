import React from "react"
import { Link } from 'react-router-dom';
import { Player, ControlBar } from 'video-react';
import video720x480 from "../../assets/video/SampleVideo_720x480_30mb.mp4"
import "video-react/dist/video-react.css";
import ReactPlayer from 'react-player'
import ShowMore from 'react-show-more';
import VideoList from "../../components/Video/VideosList"
import usAvatar from "../../assets/img/varun.jpg";

class Watch extends React.Component {
    render () {
        return (
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-xlg-9 col-md-7">
                            <div className="azura-video-player">
                                <ReactPlayer
                                url={video720x480}
                                className='react-player'
                                playing
                                controls
                                width='100%'
                                height='100%' />
                            </div>
                                    
                            <div className="video-player-details">
                                <div className="video-player-name">
                                    Video hoc tieng anh tot nhat hien nay
                                </div>
                                <div className="video-player-pra">
                                    <span className="video-player-date">
                                        <i className="fa fa-calendar-alt"></i>&nbsp;20/02/2019
                                    </span>
                                    <span className="video-player-view">
                                        <i className="fa fa-eye"></i>&nbsp;16.000 
                                    </span>
                                    <span className="video-player-like">
                                        <i className="fa fa-thumbs-up"></i>&nbsp;1000
                                    </span>
                                    <span className="video-player-unlike">
                                        <i className="fas fa-thumbs-down"></i>&nbsp;20
                                    </span>
                                    <span className="video-player-flow">
                                        <button className="btn btn-danger"><span>Theo dõi</span></button>
                                    </span>
                                </div>
                                <div className="video-player-watch">
                                    <span className="video-edu-avatar">
                                        <img src={usAvatar} />
                                    </span>
                                    <span className="video-edu-name">Toi la toi</span>
                                </div>
                                <div className="video-player-des">
                                    <p className="video-player-tag">
                                        #english#tienganh#ngoaingu
                                    </p>
                                    <div className="content-des">
                                        <ShowMore
                                        lines={3}
                                        more='Hiển thị thêm'
                                        less='Rút gọn'
                                        anchorClass='' >
                                        1. Thời gian đầu, tôi vẫn chưa thể quen với việc rời xa chiếc điện thoại nên tay tôi như thể luôn bồn chồn và có nhiều lúc không kiểm soát được hành vi nên đành phải với lấy điện thoại.
                                            2. Một thời gian sau, khi đã dần quen, tôi đã có một giấc ngủ ngon hơn trước. Có một vài bài báo nói rằng việc để cho mắt nghỉ ngơi trước khi ngủ sẽ giúp bạn có một giấc ngủ sâu hơn. Điều này càng thôi thúc tôi tiếp tục thử nghiệm của mình.
                                            3. Không chỉ chất lượng giấc ngủ được cải thiện, tôi còn cảm nhận được một vài lợi ích khác nữa, trong đó có cả những việc tôi không ngờ tới. Thay đổi lớn nhất có lẽ là cuộc sống hôn nhân của chúng tôi. Tôi và chồng mình đã bắt đầu trò chuyện với nhau nhiều hơn về các vấn đề trong cuộc sống, điều này ý nghĩa hơn hẳn so với việc chỉ ngồi đó và cầm điện thoại. Ngoài ra, chúng tôi còn giải trí bằng cách chơi bài hay giải các câu đố thay vì lướt mạng liên tục.
                                        </ShowMore>
                                    </div>
                                </div>

                            </div>
                        </div> 
    
                            
                        
                        <div className="col-lg-4 col-xlg-3 col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <p>Đề xuất cho bạn</p>
                                    <VideoList />
                                </div> 
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
        );
    }
}
export default Watch;