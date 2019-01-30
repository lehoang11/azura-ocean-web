import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header"


class Home extends React.Component {

    render() {
        const { user } = this.props;
        return (
        <div id="wrapper">
            <Header />
            <section className="container">
                <div className="inner-body">
                    <div className="row">
                        <h1>Hi {user.email}!</h1> 
                    </div>
                </div>
            </section>
        </div>
            
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

export default connect(mapStateToProps)(Home);