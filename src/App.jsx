import React from 'react';
import { connect } from 'react-redux';
import alertAction from './actions/alertAction';
import AppRouter from './routes';
import history from './helpers/history';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertAction.clear());
        });
    }


    render() {
        //const { alert } = this.props;
        return ( 
            <div>
                <AppRouter />

                <ToastContainer autoClose={5000} />
            </div>
            );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);