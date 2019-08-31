import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "../../assets/css/login.css";
import { register} from '../../actions/userAction'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword : ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (


        <div id="login-wrap">
            <div>.</div>
                <h1>
                    <span>A</span>zura
                    <span>O</span>cean
                </h1>

                <div className="sub-main-w3">
                    <form name="form" onSubmit={this.handleSubmit} >
                        <div style={{width:"100%",float:"left"}}>
                            <div style={{width:"50%",float:"left"}}>
                            <div className={'form-style-agile' + (submitted && !user.firstName  ? ' has-error' : '')}>
                                <label>
                                First Name
                                    {/* <i className="fas fa-user"></i> */}
                                </label>
                                <input placeholder="First Name"  type="text" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                {submitted && !user.firstName &&
                                    <div className="help-block">First Name is required</div>
                                }
                            </div>
                            </div>
                            <div style={{width:"50%",float:"left"}}>
                            <div className={'form-style-agile' + (submitted && !user.lastName ? ' has-error' : '')}>
                            <label>
                                Last Name
                                    {/* <i className="fas fa-user"></i> */}
                                </label>
                            <input type="text" className="form-control-re" placeholder="Last Name" name="lastName" value={user.lastName} onChange={this.handleChange} />
                            {submitted && !user.lastName &&
                                    <div className="help-block">Last Name is required</div>
                                }
                            </div>
                            </div>
                        </div>
                        <div className={'form-style-agile' + (submitted && !user.email ? ' has-error' : '')}>
                            <label>
                            Email
                                {/* <i className="fas fa-user"></i> */}
                            </label>
                        <input type="text" className="form-control-re" name="email" value={user.email} onChange={this.handleChange} placeholder="EMail" />
                        {submitted && !user.email &&
                                <div className="help-block">email is required</div>
                            }
                    </div>

                        <div className={'form-style-agile' + (submitted && !user.password ? ' has-error' : '')}>
                            <label>
                            Password
                                {/* <i className="fas fa-user"></i> */}
                            </label>
                        <input type="password" className="form-control-re" name="password" value={user.password} onChange={this.handleChange} placeholder="Password" />
                        {submitted && !user.password &&
                                <div className="help-block">Password is required</div>
                            }
                    </div>

                        <div className={'form-style-agile' + (submitted && !user.confirmPassword ? ' has-error' : '')}>
                            <label>
                            Password confirm
                                {/* <i className="fas fa-user"></i> */}
                            </label>
                        <input type="password" name="confirmPassword" className="form-control-re" value={user.confirmPassword} onChange={this.handleChange} placeholder="Confirm Password" />
                        {submitted && !user.confirmPassword &&
                                <div className="help-block">Password is required</div>
                            }
                    </div>


                        <div className="wthree-text">
                            <ul>
                                <li>
                                    <div className="checkout-w3l">
                                        <Link to ="/login">Login</Link>
                                    </div>

                                </li>
                            </ul>
                        </div>
                        <input type="submit" value="Register" />
                    </form>
            </div>
        </div>


        );
    }
}


const mapStateToProps = state => ({
    registration :state.registration.registering
  });
    
const mapDispatchToProps = {
    register :register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);