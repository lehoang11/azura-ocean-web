import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import userAction from '../../actions/userAction';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userAction.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            let userLogin = {
                email: email,
                password: password
              }      
            dispatch(userAction.login(userLogin));
        }
    }


    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (/*
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button type="submit"
                            className="btn btn-primary">Login</button>
                        { loggingIn }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
            */
        <div className="login-wrapper">
            <div className="login">
            <h1>Login to Azura Ocean</h1>
                <form method="post" action="">
                    <p><input type="text" name="login" value="" placeholder="Username or Email" /></p>
                    <p><input type="password" name="password" value="" placeholder="Password" /></p>
                    <p className="remember_me">
                    <label>
                        <input type="checkbox" name="remember_me" id="remember_me" />
                        Remember me on this computer
                    </label>
                    </p>
                    <p className="submit"><input type="submit" name="commit" value="Login" /></p>
                </form>
        </div>
            <div className="login-help">
            <p>Forgot your password? <a href="#">Click here to reset it</a>.</p>
            </div>
        </div>
        );
    }
}



function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login);
