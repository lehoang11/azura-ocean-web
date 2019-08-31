import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "../../assets/css/video.css"
import eduAPI from '../../api/eduApi'
import queryString from 'query-string'
import EduList from "../../components/Search/EduList"

class EduFollow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            errors: null,
            eduFollow : []
        };
    }

    componentDidMount() {
        this.getListUserFollowEdu();
    }

    getListUserFollowEdu = () => {
        const { user } = this.props;
        if(user){
            const params = queryString.stringify({
                userId :user.id,
                currentPage : 20
            });
            this.getListEduFollow(params);
        }
    }

    getListEduFollow(params){
        return eduAPI.getListEduFollow(params).then(
            (res) => {
                if (res.data.code == 200 && res.data.data.content !== null) {
                    this.setState({
                        eduFollow: res.data.data,
                    })
                }
            },
            (err) => {
                console.log("error get user follow data");
                this.setState({
                    errors :err,
                })
            }
        )
    }


    render() {
        const { eduFollow, isLoading } = this.state;
        return (
        <div>
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    {/* content */}
                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            <div className="section-title-box">
                                <div className ="section-title"> Edu Follow
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            {(Array.isArray(eduFollow.content) && eduFollow.content.length) ? <div><EduList eduList={eduFollow.content} /></div> :<div></div>}
                        </div>
                    </section>
                    {/* content */}
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    user :state.userReducer.user,
  });

export default connect(mapStateToProps)(EduFollow);