import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Private extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            errors: null,
          };
    }

    componentDidMount() {
        
    }




    render() {

        return (
        <div>
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    {/* content */}
                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            <div className="section-title-box">
                                <div className ="section-title"> Private
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        Private
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

export default connect(mapStateToProps)(Private);