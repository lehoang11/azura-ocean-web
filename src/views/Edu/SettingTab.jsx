import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toastConstant from '../../constants/toastConstant'
import showToast from '../../components/toast/showToast'
import _ from 'lodash';
import eduAPI    from '../../api/eduApi'
import { getEduByLink } from '../../actions/eduAction'
import history from "../../helpers/history";

class SettingTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edu: {},
            eduFormObj :{
                name : '',
                shortName : '',
                keyword : '',
                description : '',

            },
            eduSubmitted : false,
            isLoading: true,
            errors: null
          };
         
        //console.log(this.props.leHoang);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const { eduFormObj } = this.state;
        const { eduData } = this.props;
        console.log('name :' +name)
        console.log('val :' +value)
        if(name ==='shortName'){
            const linkEdu = _.trim(value);
            if(linkEdu !== '' && linkEdu !== eduData.data.shortName){
                this.eduCheckExists(linkEdu);
            }
        }
        this.setState({
            eduFormObj: {
                    ...eduFormObj,
                    [name]: value }
        })
    }

    componentWillMount(){
        setTimeout(() => {
            this.loadEdu();
        }, 1000);
    }

    componentDidMount(){
        //this.loadEdu();
    }

    componentWillUpdate(){

    }
    componentDidUpdate(){
        
    }

    loadEdu(){ 
        const { eduData } = this.props;
        console.log(eduData.data)
        this.setState({
            eduFormObj : eduData.data,
        })   
    }
    componentWillReceiveProps(){
        //this.loadEdu();
    }

    onClickEduUpdate = () =>{
        this.setState({
            eduSubmitted :true
        });
        this.onEduUpdate();
        
    }

    onClickChangeEduName = () => {
        this.onChangeEduName();
    }
    
    onChangeEduName = () => {
        const { eduData } = this.props;
        const  edu  = eduData.data;
        const name = _.trim(this.state.eduFormObj.name);
        if(name !== edu.name){
            let eduFormObj = this.state.eduFormObj;
            eduFormObj.name = name;
            if(this.validationEduName(name)===false) return;
            let params = {
                key :'name',
                edu :eduFormObj
            }
            this.eduUpdate(params);
        }
    }

    onClickChangeEdushortName = () => {
        this.onChangeEdushortName();
    }
    
    onChangeEdushortName = () => {
        const { eduData } = this.props;
        const  edu  = eduData.data;
        const shortName = _.trim(this.state.eduFormObj.shortName);
        if(shortName !== edu.shortName){
            let eduFormObj = this.state.eduFormObj;
            eduFormObj.shortName = shortName;
            if(this.validationEduShortName(shortName)===false) return;
            let params = {
                key :'shortName',
                edu :eduFormObj
            }
            this.eduUpdate(params);
        }
    }

    onClickChangeEduKeyword = () => {
        this.onChangeEduKeyword();
    }
    
    onChangeEduKeyword = () => {
        const { eduData } = this.props;
        const  edu  = eduData.data;
        const keyword = this.state.eduFormObj.keyword;
        if(keyword !== edu.keyword){
            let eduFormObj = this.state.eduFormObj;
            eduFormObj.keyword = keyword;
            let params = {
                key :'keyword',
                edu :eduFormObj
            }
            this.eduUpdate(params);
        }
    }

    onClickChangeEduDescription = () => {
        this.onChangeEduDescription();
    }
    
    onChangeEduDescription = () => {
        const { eduData } = this.props;
        const  edu  = eduData.data;
        const description = this.state.eduFormObj.description;
        if(description !== edu.description){
            let eduFormObj = this.state.eduFormObj;
            eduFormObj.description = description;
            let params = {
                key :'description',
                edu :eduFormObj
            }
            this.eduUpdate(params);
        }
    }

    eduUpdate = (params) => {
        const { eduData } = this.props;
        return eduAPI.eduUpdate(params).then(
            (res) => {
                if (res.data.code == 200) {
                    if(res.data.data != null || res.data.data != ''){
                        // messager create edu success
                        if(params.edu.shortName !== eduData.data.shortName){
                            history.push('/edu/'+res.data.data.shortName);
                        }
                        this.props.showEdu(params.edu.shortName);
                        console.log('success update edu');
                        showToast("Edu update successful",toastConstant.SUCCESS);
                    }else{
                        //messager create edu fail
                        showToast("Edu update errror",toastConstant.ERROR);
                    }   
                }
            },
            (err) => {
                console.log("error get data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    eduCheckExists(link){
        return eduAPI.eduCheckExists(link).then(
            (res) => {
                if (res.data.code == 200 && res.data.data === true) {
                    showToast("Link edu Exists",toastConstant.ERROR);
                    console.log(res.data.data);
                }
            },
            (err) => {
                console.log("error get edu  data");
                this.setState({
                    errors :err,
                })
            }
        )
    }

    onEduUpdate = () => {
        const name = _.trim(this.state.eduFormObj.name);
        const shortName = _.trim(this.state.eduFormObj.shortName);
        const description = this.state.eduFormObj.description;
        const keyword = this.state.eduFormObj.keyword;
        const { eduData } = this.props;
        const  edu  = eduData.data;

        let params = {
            id : edu.id,
            name :name,
            keyword : keyword,
            description :description
        };
        let status = true;
        status = this.validationEduName(name) && status;
        if(status === false) {
            return;
        } 
        return eduAPI.eduUpdate(params).then(
            (res) => {
                if (res.data.code == 200) {
                    if(res.data.data != null || res.data.data != ''){
                        // messager create edu success
                        this.props.showEdu(shortName);
                        console.log('success update edu');
                        showToast("Edu update successful",toastConstant.SUCCESS);
                    }else{
                        //messager create edu fail
                        showToast("Edu update errror",toastConstant.ERROR);
                    }   
                }
            },
            (err) => {
                console.log("error get data");
                this.setState({
                    isLoading: true,
                    errors :err,
                })
            }
        )
    }

    validationEduName = (name) =>{
        if (name === '' || name === null ) {
            showToast("Edu name requird", toastConstant.ERROR);
            return false;
        }
        return true;
    }
    validationEduShortName = (shortName) =>{
        if (shortName === '' || shortName === null ) {
            showToast("Edu shortName requird", toastConstant.ERROR);
            return false;
        }
        return true;
    }



    render () {
        return (
            <div className="container-fluid">                    
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"> Edu Setting</h4>
                                <div className="eduFormItem">
                                    <a href="javascript:void(0)" data-toggle="collapse" data-target="#eduName">
                                        <h3 className="eduItem-settingLab">Edu Name*</h3>
                                        <span className="eduItem-settingContent">{this.state.eduFormObj.name}</span>
                                        <span className="eduItem-settingEdit"><i className="ti-pencil"></i> edit</span>
                                    </a>
                                    <div id="eduName" className="collapse">
                                        <div className="edu-formOne-edit">
                                            <div className={'form-group row' + (this.state.eduSubmitted && !this.state.eduFormObj.name ? ' has-error' : '')}>
                                                <div className="col-sm-12">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend"><span className="input-group-text"><i className="ti-user"></i></span></div>
                                                        <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="name"
                                                        placeholder="Edu Name"
                                                        value={this.state.eduFormObj.name}
                                                        onChange={this.handleInputChange} />
                                                        {this.state.eduSubmitted && !this.state.eduFormObj.name &&
                                                        <div className="help-block"> Edu Name is required</div>
                                                        }
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-group row mb-0">
                                                <div className="offset-sm-3 col-sm-9">
                                                    <button onClick={this.onClickChangeEduName} type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduFormItem">
                                    <a href="javascript:void(0)" data-toggle="collapse" data-target="#eduKeyword">
                                        <h3 className="eduItem-settingLab">Keyword</h3>
                                        <span className="eduItem-settingContent">Add keyword for Edu</span>
                                        <span className="eduItem-settingEdit"><i className="ti-pencil"></i> edit</span>
                                    </a>
                                    <div id="eduKeyword" className="collapse">
                                        <div className="edu-formOne-edit">
                                            <div className="form-group row">
                                                <div className="col-sm-12">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend"><span className="input-group-text"><i className="ti-mobile"></i></span></div>
                                                        <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="keyword" 
                                                        placeholder="Keyword"
                                                        value={this.state.eduFormObj.keyword}
                                                        onChange={this.handleInputChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row mb-0">
                                                <div className="offset-sm-3 col-sm-9">
                                                    <button onClick={this.onClickChangeEduKeyword} type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduFormItem">
                                    <a href="javascript:void(0)" data-toggle="collapse" data-target="#eduDescription">
                                        <h3 className="eduItem-settingLab">Description</h3>
                                        <span className="eduItem-settingContent">Add description for Edu</span>
                                        <span className="eduItem-settingEdit"><i className="ti-pencil"></i> edit</span>
                                    </a>
                                    <div id="eduDescription" className="collapse">
                                        <div className="edu-formOne-edit">
                                            <div className="form-group row">
                                                <div className="col-sm-12">
                                                    <textarea 
                                                    name="description"
                                                    id="ckeditor"
                                                    rows="5"
                                                    className="ckeditor"
                                                    style={{width:'100%'}}
                                                    placeholder="description"
                                                    value ={this.state.eduFormObj.description}
                                                    onChange={this.handleInputChange}>{this.state.eduFormObj.description}</textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row mb-0">
                                                <div className="offset-sm-3 col-sm-9">
                                                    <button onClick={this.onClickChangeEduDescription} type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* end col-lg-6 */}
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                            <h4 className="card-title"> Edu details</h4>
                                <a href="javascript:void(0)" data-toggle="collapse" data-target="#eduLink">
                                    <h3 className="eduItem-settingLab">Link Edu</h3>
                                    <span className="eduItem-settingContent">{'http://lehoang/edu/'+this.state.eduFormObj.shortName}</span>
                                    <span className="eduItem-settingEdit"><i className="ti-pencil"></i> edit</span>
                                </a>
                                <div id="eduLink" className="collapse">
                                   <div className="edu-formOne-edit">
                                        <div className={'form-group row' + (this.state.eduSubmitted && !this.state.eduFormObj.shortName ? ' has-error' : '')}>
                                            <div className="col-sm-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend"><span className="input-group-text"><i className="ti-world"></i></span></div>
                                                    <input 
                                                    type="text" 
                                                    className="form-control"
                                                    defaultValue ="http://lehoang/edu/" 
                                                    disabled
                                                    />
                                                    <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="shortName" 
                                                    placeholder="Link"
                                                    value={this.state.eduFormObj.shortName}
                                                    onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row mb-0">
                                            <div className="offset-sm-3 col-sm-9">
                                                <button onClick={this.onClickChangeEdushortName} type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    {/* end col-lg-6 */}
                </div>
            </div>  

    
        );
    }

}

const mapStateToProps = state => ({
    eduData: state.eduReducer.edu
  });

const mapDispatchToProps = {
    showEdu: getEduByLink,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingTab);