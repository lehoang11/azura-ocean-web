import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "../../assets/css/login.css";
import {login,logout } from '../../actions/userAction'

class Login extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
        this.props.logoutAction();

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
        if (email && password) {
            let userLogin = {
                email: email,
                password: password
              }      
            this.props.loginAction(userLogin);
        }
    }


    render() {
        const { email, password, submitted } = this.state;
        return (
        <div id="login-wrap">
        <div>.</div>
            <h1>
                <span>L</span>ogIn
                <span>T</span>o
                <span>A</span>zura
                <span>O</span>cean
            </h1>

            <div className="sub-main-w3">
                <form name="form" onSubmit={this.handleSubmit} >
                    <div className={'form-style-agile' + (submitted && !email ? ' has-error' : '')}>
                        <label>
                            Email
                            <i className="fas fa-user"></i>
                        </label>
                        <input placeholder="Email or Username"  type="text" name="email" value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-style-agile' + (submitted && !password ? ' has-error' : '')}>
                        <label>
                            Password
                            <i className="fas fa-unlock-alt"></i>
                        </label>
                        <input placeholder="Password" type="password" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="wthree-text">
                        <ul>
                            <li>
                                <div className="checkout-w3l">
                                    <div className="demo5">
                                        <div className="switch demo3">
                                            <input type="checkbox" />
                                            <label>
                                                <i></i>
                                                
                                            </label>
                                        </div>
                                    </div>
                                    <Link to ="/register">Register</Link>
                                </div>

                            </li>
                            <li>
                                <Link to ="#">Forgot Password?</Link>
                            </li>
                        </ul>
                    </div>
                    <input type="submit" value="Log In" />
                </form>
            </div>

            <div className="footer">
                <p>&copy; 2019 Azura Ocean |
                    <Link to ="#">Hi</Link>
                </p>
            </div>
        </div>
        );
    }
}



const mapStateToProps = state => ({
    user :state.userReducer.user
});
    
const mapDispatchToProps = {
    loginAction: login,
    logoutAction :logout
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
