import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import avatarDefault from "../../assets/images/users/1.jpg";
import userAPI from '../../api/userApi'
import history from "../../helpers/history";
import toastConstant from '../../constants/toastConstant'
import showToast from '../../components/toast/showToast'
import _ from 'lodash';
import uploadAPI from '../../api/uploadApi'
import {refreshAction} from '../../actions/userAction'

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            errors: null,
            submitted : false,
            uploadAvatar : false,
            avatarLink : '',
            userFormObj :{
                firstName : '',
                lastName : '',
                username : '',
                email : '',
                avatar : '',
                password : '',
                passwordNew : '',
                passwordNewConfirm :'',
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUploadAvatar = this.handleUploadAvatar.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const { userFormObj } = this.state;
        console.log('name :' +name)
        console.log('val :' +value)
        this.setState({
            userFormObj: {
                    ...userFormObj,
                    [name]: value }
        })
    }

    handleUploadAvatar(event){
        let file = event.target.files[0];
        console.log(file);
        this.setState({ uploadAvatar : true })
        this.uploadAvatar(file);
    }

    uploadAvatar(file){
        return uploadAPI.uploadImage(file).then(
            (res) => {
                this.setState({ uploadAvatar : false })
                if (res.data.code === 200 && res.data.status === true) {
                    this.onChangeAvatar(res.data.url);
                }
            },
            (err) => {
                console.log("error data");
                this.setState({
                    errors :err,
                    uploadAvatar : false
                })
            }
        )
    }

    loadUser(){ 
        const { user } = this.props;
        console.log(user)
        this.setState({
            userFormObj : user,
        })   
    }

    onClickChangeName = () => {
        this.onChangeName();
    }
    onClickChangeUsername = () => {
        this.onChangeUsername()  
    }
    onClickChangeEmail = () => {
        this.onChangeEmail()
    }

    onClickChangePassword = () => {
        this.onChangePassword()
    }

    onChangeName = () => {
        const { user } = this.props;
        const firstName = _.trim(this.state.userFormObj.firstName);
        const lastName = _.trim(this.state.userFormObj.lastName);
        let valError = true;
        valError = this.validationEmpty('firstName', firstName) && valError;
        valError = this.validationEmpty('lastName', lastName) && valError;
        if(valError === false) { return; } 
        if(firstName !== user.firstName || lastName !== user.lastName){
            let params = {
                key :'name',
                user :{
                    id :user.id,
                    firstName:firstName,
                    lastName :lastName,
                    email :user.email
                }
            }
           this.userUpdate(params);
        }
    }

    onChangeUsername = () => {
        const { user } = this.props;
        const username = _.trim(this.state.userFormObj.username);
        let valError = true;
        valError = this.validationEmpty('username', username) && valError;
        if(valError === false) { return; } 
        if(username !== user.username){
            let params = {
                key :'username',
                user :{
                    id :user.id,
                    username:username
                }
            }
           this.userUpdate(params);
        }
    }
    onChangeEmail = () => {
        const { user } = this.props;
        const email = _.trim(this.state.userFormObj.email);
        let valError = true;
        valError = this.validationEmpty('email', email) && valError;
        if(valError === false) { return; } 
        if(email !== user.email){
            let params = {
                key :'email',
                user :{
                    id :user.id,
                    email:email
                }
            }
           this.userUpdate(params);
        }
    }

    onChangeAvatar(file){
        const { user } = this.props;
        let params = {
            key :'avatar',
            user :{
                id :user.id,
                avatar:file,
                email :user.email
            }
        }
        this.userUpdate(params);
    }

    onChangePassword = () => {
        const { user } = this.props;
        const password = _.trim(this.state.userFormObj.password);
        const passwordNew = _.trim(this.state.userFormObj.passwordNew);
        const passwordNewConfirm = _.trim(this.state.userFormObj.passwordNewConfirm);
        let valError = true;
        valError = this.validationEmpty('password', password) && valError;
        valError = this.validationEmpty('passwordNew', passwordNew) && valError;
        valError = this.validationEmpty('passwordNewConfirm', passwordNewConfirm) && valError;
        if(valError === false) { return; } 
        if(passwordNew === passwordNewConfirm){
            let params = {
                key :'password',
                passwordOld :password,
                user :{
                    id :user.id,
                    password:passwordNew
                }
            }
           this.userUpdate(params);
        }
    }

    userUpdate = (params) => {
        return userAPI.update(params).then(
            (res) => {
                if (res.data.code == 200) {
                    if(res.data.data != null || res.data.data != ''){
                        // messager create edu success
                        console.log('success update user');
                        let {user} = this.props
                        let {userFormObj} = this.state
                        switch (params.key) {
                            case 'name':
                                user.firstName = params.user.firstName;
                                user.lastName = params.user.lastName;
                                this.setState({
                                    userFormObj: {
                                            ...userFormObj,
                                            firstName: params.user.firstName,
                                            lastName : params.user.lastName}
                                })
                                break;
                            case 'username':
                                user.username = params.user.username;
                                this.setState({
                                    userFormObj: {
                                            ...userFormObj,
                                            username: params.user.username}
                                })
                                break;
                            case 'email':
                                user.email = params.user.email;
                                this.setState({
                                    userFormObj: {
                                            ...userFormObj,
                                            email: params.user.email}
                                })
                                break;
                            case 'avatar':
                                user.avatar = params.user.avatar;
                                this.setState({
                                    userFormObj: {
                                            ...userFormObj,
                                            avatar: params.user.avatar }
                                })
                                break;
                            case 'password':
                                history.push('/login');
                                break;
                            default:
                                break;
                        }
                        //console.log(user)
                        this.props.refreshUser(user);

                        showToast("User update successful",toastConstant.SUCCESS);
                    }else{
                        //messager create edu fail
                        showToast("User update errror",toastConstant.ERROR);
                    }   
                }else{
                    showToast(res.data.message,toastConstant.ERROR);
                }
            },
            (err) => {
                console.log("error get data");
                showToast("System update user errror"+err.toString(),toastConstant.ERROR);
            }
        )
    }

    validationEmpty = (key,val) =>{
        if (val === '' || val === null ) {
            showToast(key+ " requird", toastConstant.ERROR);
            return false;
        }
        return true;
    }

    componentWillMount(){
        setTimeout(() => {
            this.loadUser();
        }, 1000);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(){
        this.loadUser();
        const {user} = this.props;
        console.log(user)
    }




    render() {

        return (
        <div>
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    {/* content */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> Acount Setting</h4>
                                    <div className="formItem">
                                        <div className="setting-avatar">
                                            <div className="thumb">
                                                <img src={this.state.userFormObj.avatar ? this.state.userFormObj.avatar:avatarDefault} />
                                                <div className="update-avatar">
                                                <div className="update-wrapper">
                                                    <div className="fload">Update
                                                    </div>
                                                    <input 
                                                    type="file" 
                                                    name="avatar"
                                                    onChange={this.handleUploadAvatar}
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="formItem">
                                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#name">
                                            <h3 className="Item-settingLab"> Name*</h3>
                                            <span className="Item-settingContent">{this.state.userFormObj.firstName +' '}  {this.state.userFormObj.lastName}</span>
                                            <span className="Item-settingEdit"><i className="ti-pencil"></i> edit</span>
                                        </a>
                                        <div id="name" className="collapse">
                                            <div className="formOne-edit">
                                                <table className="table-setting">
                                                    <tbody>
                                                        <tr className="table-tr-setting">
                                                            <th className="table-th-setting">
                                                            <label htmlFor="">FirstName</label></th>
                                                            <td className="table-td-setting">
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                name="firstName"
                                                                placeholder="First Name"
                                                                value={this.state.userFormObj.firstName}
                                                                onChange={this.handleInputChange} />
                                                            </td>
                                                            <td>{this.state.submitted && !this.state.userFormObj.firstName &&
                                                                <div className="help-block "> FirstName is required</div>
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr className="table-tr-setting">
                                                            <th className="table-th-setting">
                                                            <label htmlFor="">LastName</label></th>
                                                            <td className="table-td-setting">
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                name="lastName"
                                                                placeholder="Last Name"
                                                                value={this.state.userFormObj.lastName}
                                                                onChange={this.handleInputChange} />
                                                            </td>
                                                            <td>{this.state.submitted && !this.state.userFormObj.lastName &&
                                                                <div className="help-block "> LastName is required</div>
                                                                }
                                                            </td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                                <div className="setting-button">
                                                    <button onClick={this.onClickChangeName} type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="formItem">
                                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#username">
                                            <h3 className="Item-settingLab"> Username*</h3>
                                            <span className="Item-settingContent">{this.state.userFormObj.username}</span>
                                            <span className="Item-settingEdit"><i className="ti-pencil"></i> edit</span>
                                        </a>
                                        <div id="username" className="collapse">
                                            <div className="formOne-edit">
                                                <table className="table-setting">
                                                    <tbody>
                                                        <tr className="table-tr-setting">
                                                            <th className="table-th-setting">
                                                            <label htmlFor="">Username</label></th>
                                                            <td className="table-td-setting">
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                name="username"
                                                                placeholder="Username"
                                                                value={this.state.userFormObj.username}
                                                                onChange={this.handleInputChange} />
                                                            </td>
                                                            <td>{this.state.submitted && !this.state.userFormObj.username &&
                                                                <div className="help-block "> Username is required</div>
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="setting-button">
                                                    <button onClick={this.onClickChangeUsername} type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="formItem">
                                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#email">
                                            <h3 className="Item-settingLab"> Email*</h3>
                                            <span className="Item-settingContent">{this.state.userFormObj.email}</span>
                                            <span className="Item-settingEdit"><i className="ti-pencil"></i> edit</span>
                                        </a>
                                        <div id="email" className="collapse">
                                            <div className="formOne-edit">
                                                <table className="table-setting">
                                                    <tbody>
                                                        <tr className="table-tr-setting">
                                                            <th className="table-th-setting">
                                                            <label htmlFor="">Email</label></th>
                                                            <td className="table-td-setting">
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                name="email"
                                                                placeholder="Username"
                                                                value={this.state.userFormObj.email}
                                                                onChange={this.handleInputChange} />
                                                            </td>
                                                            <td>{this.state.submitted && !this.state.userFormObj.email &&
                                                                <div className="help-block "> Email is required</div>
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="setting-button">
                                                    <button onClick={this.onClickChangeEmail} type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="formItem">
                                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#password">
                                            <h3 className="Item-settingLab"> Password*</h3>
                                            <span className="Item-settingContent">******</span>
                                            <span className="Item-settingEdit"><i className="ti-pencil"></i> edit</span>
                                        </a>
                                        <div id="password" className="collapse">
                                            <div className="formOne-edit">
                                                <table className="table-setting">
                                                    <tbody>
                                                        <tr className="table-tr-setting">
                                                            <th className="table-th-setting">
                                                            <label htmlFor="">Password</label></th>
                                                            <td className="table-td-setting">
                                                                <input 
                                                                type="password" 
                                                                className="form-control" 
                                                                name="password"
                                                                placeholder="Password"
                                                                value={this.state.userFormObj.password}
                                                                onChange={this.handleInputChange} />
                                                            </td>
                                                            <td>{this.state.submitted && !this.state.userFormObj.password &&
                                                                <div className="help-block "> Password is required</div>
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr className="table-tr-setting">
                                                            <th className="table-th-setting">
                                                            <label htmlFor="">Password New</label></th>
                                                            <td className="table-td-setting">
                                                                <input 
                                                                type="password" 
                                                                className="form-control" 
                                                                name="passwordNew"
                                                                placeholder="Password New"
                                                                value={this.state.userFormObj.passwordNew}
                                                                onChange={this.handleInputChange} />
                                                            </td>
                                                            <td>{this.state.submitted && !this.state.userFormObj.passwordNew &&
                                                                <div className="help-block "> Password New is required</div>
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr className="table-tr-setting">
                                                            <th className="table-th-setting">
                                                            <label htmlFor="">Password New Confirm</label></th>
                                                            <td className="table-td-setting">
                                                                <input 
                                                                type="password" 
                                                                className="form-control" 
                                                                name="passwordNewConfirm"
                                                                placeholder="Password New Confirm"
                                                                value={this.state.userFormObj.passwordNewConfirm}
                                                                onChange={this.handleInputChange} />
                                                            </td>
                                                            <td>{this.state.submitted && !this.state.userFormObj.passwordNewConfirm &&
                                                                <div className="help-block "> Password New is required</div>
                                                                }
                                                            </td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                                <div className="setting-button">
                                                    <button onClick={this.onClickChangePassword} type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
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
const mapDispatchToProps = {
    refreshUser: refreshAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);