import React from 'react';
import { Link } from 'react-router-dom';
import toastConstant from '../../constants/toastConstant'
import showToast from '../../components/toast/showToast'
import eduAPI from '../../services/eduService'


class SettingTab extends React.Component {
    constructor(props){
        super(props);


        const eduFormObj = this.props.edu;
        console.log(eduFormObj)
        this.state = {
            eduFormObj :{} ,
            eduSubmitted : false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.loadEdu();
    }

    componentWillReceiveProps(nextProps) {
        // const eduFormObj = nextProps.eduFormObj
        
        // if (!_.isEqual(this.state.eduFormObj, eduFormObj)) {
        //   this.setState({ eduFormObj })
        // }
        
    }

    loadEdu() {
        const { eduFormObj } = this.props;
        console.log(eduFormObj)
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
             eduFormObj: {
                    ...this.state.eduFormObj,
                    [name]: value}
                })
        
        
    }

    render (){
        const {edu} = this.props;

        return (     
        <div className="container-fluid">                    
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"> EDU Setting</h4>
                            <h6 className="card-subtitle">{edu.name}</h6>
                            <form className="form-horizontal pt-3">
                            <div className={'form-group row' + (this.state.eduSubmitted && !this.state.eduFormObj.name ? ' has-error' : '')}>
                                <label htmlFor="name" className="col-sm-3 control-label">Edu Name*</label>
                                    <div className="col-sm-9">
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
                                <div className={'form-group row' + (this.state.eduSubmitted && !this.state.eduFormObj.name ? ' has-error' : '')}>
                                    <label htmlFor="email4" className="col-sm-3 control-label">Email*</label>
                                    <div className="col-sm-9">
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="ti-email"></i></span></div>
                                            <input 
                                            type="email" 
                                            className="form-control" 
                                            name="email" 
                                            placeholder="Enter email"
                                            value={this.state.eduFormObj.email}
                                            onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={'form-group row' + (this.state.eduSubmitted && !this.state.eduFormObj.shortName ? ' has-error' : '')}>
                                    <label htmlFor="web" className="col-sm-3 control-label">Link</label>
                                    <div className="col-sm-9">
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="ti-world"></i></span></div>
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            name="shortName" 
                                            placeholder="Link"
                                            value={this.state.eduFormObj.email}
                                            onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 control-label">Phone</label>
                                    <div className="col-sm-9">
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="ti-mobile"></i></span></div>
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            name="phone" 
                                            value={this.state.eduFormObj.phone}
                                            onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 control-label">Keyword</label>
                                    <div className="col-sm-9">
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
                                <div className="form-group row">
                                    <label className="col-sm-3 control-label">
                                        Description
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea 
                                        name="description"
                                        id="ckeditor"
                                        rows="5"
                                        className="ckeditor"
                                        style={{width:'100%'}}
                                        placeholder="description"
                                        value={this.state.eduFormObj.description}
                                        onChange={this.handleInputChange}></textarea>
                                    </div>
                                </div>
                                <div className="form-group row mb-0">
                                    <div className="offset-sm-3 col-sm-9">
                                        <button type="submit" className="btn btn-info waves-effect waves-light">Lưu thay đổi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        );
    }
}

export default SettingTab;