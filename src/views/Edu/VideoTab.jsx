import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VideoList from "../../components/Video/VideosList"
import TutorialAPI from '../../api/tutorialApi'

class VideoTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorials : [],
            isLoadingTutorial: true,
        };
    }

    componentWillMount(){

    }

    componentDidMount(){
        setTimeout(() => {
            const { eduData } = this.props;
            let eduId = eduData.data.id;
            if(eduId !=='' || eduId !==undefined){
                console.log('h-eduId' +eduId);
                this.getListTutorialByEduId(eduId);
            }
        }, 3000);

    }

    getListTutorialByEduId = (eduId) => {
        return TutorialAPI.getListTutorialByEduId(eduId).then(
            (res) => {
                if (res.data.code == 200) {
                    this.setState({
                        tutorials: res.data.data.content,
                        isLoadingTutorial: false,
                    })
                }
            },
            (err) => {
                console.log("error get data");
                this.setState({
                    isLoadingTutorial: true,
                    errors :err,
                })
            }
        )
    }

    render () {

        const { isLoadingTutorial, tutorials } = this.state;

        return (
            <div className="container-fluid">
                <div className="row p-4">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        <div className="section-title-box">
                            <div className ="section-title text-uppercase"> Video push
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                    {!isLoadingTutorial ? <div><VideoList tutorials={tutorials} /></div> :<p>Loading...</p>}
                    </div>
                </div>
            </div>
    
        );
    }

}

const mapStateToProps = state => ({
    eduData: state.eduReducer.edu
  });
    

export default connect(mapStateToProps)(VideoTab);