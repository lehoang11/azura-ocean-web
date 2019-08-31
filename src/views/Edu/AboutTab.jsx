import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AboutTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount(){

    }

    componentDidMount(){

    }



    render () {

        const { eduData } = this.props;
        const edu = eduData.data;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                {edu.name}
                                </h4>
                                <div className="card-content">
                                {edu.description}
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
    eduData: state.eduReducer.edu
  });
    

export default connect(mapStateToProps)(AboutTab);