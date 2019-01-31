import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import userAction from '../../actions/userAction';
import bgRe1 from "../../assets/img/bg-re-1.png";
import bgRe2 from "../../assets/img/bg-re-2.png";
import "../../assets/css/register.css";

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
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.email && user.password) {
            dispatch(userAction.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
           <div className="register-wrap">
           <div className="inner">
               <img src={bgRe1} alt="" className="image-1" />
               <form name="form" onSubmit={this.handleSubmit} >
                   <h3> Azura Ocean</h3>
                    <div className={'form-holder' + (submitted && !user.firstName ? ' has-error' : '')}>
                       <span className="lnr lnr-user"></span>
                       <input type="text" className="form-control-re" placeholder="First Name" name="firstName" value={user.firstName} onChange={this.handleChange} />
                       {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>

                    <div className={'form-holder' + (submitted && !user.lastName ? ' has-error' : '')}>
                       <span className="lnr lnr-user"></span>
                       <input type="text" className="form-control-re" placeholder="Last Name" name="lastName" value={user.lastName} onChange={this.handleChange} />
                       {submitted && !user.lastName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>

                   {/* <div className="form-holder" >
                       <span className="lnr lnr-phone-handset"></span>
                       <input type="text" className="form-control-re" placeholder="Phone Number" />
                   </div> */}

                    <div className={'form-holder' + (submitted && !user.email ? ' has-error' : '')}>
                       <span className="lnr lnr-envelope"></span>
                       <input type="text" className="form-control-re" name="email" value={user.email} onChange={this.handleChange} placeholder="EMail" />
                       {submitted && !user.email &&
                            <div className="help-block">email is required</div>
                        }
                   </div>
                    <div className={'form-holder' + (submitted && !user.password ? ' has-error' : '')}>
                       <span className="lnr lnr-lock"></span>
                       <input type="password" className="form-control-re" name="password" value={user.password} onChange={this.handleChange} placeholder="Password" />
                       {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                   </div>
                    <div className={'form-holder' + (submitted && !user.confirmPassword ? ' has-error' : '')}>
                       <span className="lnr lnr-lock"></span>
                       <input type="password" name="confirmPassword" className="form-control-re" value={user.confirmPassword} onChange={this.handleChange} placeholder="Confirm Password" />
                       {submitted && !user.confirmPassword &&
                            <div className="help-block">Password is required</div>
                        }
                   </div>
                   <button type="submit">
                       <span>Register</span>
                   </button>
                   <Link to="/login" className="btn btn-link">Đăng nhập</Link>
                   {registering}
               </form>
               <img src={bgRe2} alt="" className="image-2" />
           </div>
           
       </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

export default connect(mapStateToProps)(Register);