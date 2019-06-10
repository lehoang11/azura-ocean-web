import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "../../assets/css/video.css"
import VideoList from "../../components/Video/VideosList"
import TutorialAPI from '../../api/tutorialApi'
import LoadingBar from 'react-top-loading-bar'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorials: [],
            isLoading: true,
            errors: null,
            loadingBarProgress: 0
          };
    }

    complete = () => {
        this.setState({ loadingBarProgress: 100 })
    }
    
    onLoaderFinished = () => {
        this.setState({ loadingBarProgress: 0 })
    }


    getTutorialList = () => {
        return TutorialAPI.getTutorialList().then(
            (res) => {
                if (res.data.code == 200) {
                    this.setState({
                        tutorials: res.data.data.content,
                        isLoading: false,
                    })
                    this.complete()
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

    componentWillMount(){
    }

    componentDidMount() {
        this.getTutorialList();
    }



    render() {
        const { user } = this.props;
        const { isLoading, tutorials } = this.state;
        return (
        <div>
            <LoadingBar
            progress={this.state.loadingBarProgress}
            height={3}
            color="red"
            onLoaderFinished={() => this.onLoaderFinished()}
            />
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    {/* content */}
                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            <div className="section-title-box">
                                <div className ="section-title text-uppercase"> Home
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            {!isLoading ? <div><VideoList tutorials={tutorials} /></div> :<p>Loading...</p>}
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
    user :state.userReducer.user
  });

export default connect(mapStateToProps)(Home);