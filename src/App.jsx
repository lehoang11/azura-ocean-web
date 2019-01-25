import React from 'react';
import { connect } from 'react-redux';
import alertAction from './actions/alertAction';
import AppRouter from './routes';
import history from './helpers/history';

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
        const { alert } = this.props;
        return (
            <div>
                <div>
                    {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>}
                </div>
                <AppRouter />
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