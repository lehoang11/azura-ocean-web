import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';
import eduAPI from '../../services/eduService'
import toastConstant from '../../constants/toastConstant'
import showToast from '../../components/toast/showToast'
import { connect } from 'react-redux';


class EduCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,    
            eduFormObj : {
                name :'',
                keyword :'',
                classButton :'',
            },
            eduSubmitted : false,
            
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        //check user has edu, if edu return home, else return ;
    }
    
    toggle() {
        this.setState(prevState => ({
        //   modal: !prevState.modal
        modal: prevState.modal
        }));
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const { eduFormObj } = this.state;
        this.setState({
            eduFormObj: {
                ...eduFormObj,
                [name]: value
            }
        });
        
    }
    


    onClickEduCreate = () =>{
        this.setState({
            eduSubmitted :true
        });
        this.onEduCreate();
        
    }
    onEduCreate = () => {
        const name = _.trim(this.state.eduFormObj.name);
        const keyword = this.state.eduFormObj.keyword;
        const { user } = this.props;
        let params = {
            name :name,
            keyword: keyword,
            userId :user.id,
        };
        let status = true;
        status = this.validationEduName(name) && status;
        if(status === false) {
            return;
        } 
        return eduAPI.eduCreate(params).then(
            (res) => {
                if (res.data.code == 200) {
                    if(res.data.data != null || res.data.data != ''){
                        // messager create edu success
                        const edu = res.data.data;
                        console.log('success create edu');
                        showToast("Edu created successful",toastConstant.SUCCESS);
                        window.location = '/edu/'+ edu.shortName+'_.'+edu.id ;
                        
                    }else{
                        //messager create edu fail
                        showToast("Edu created errror",toastConstant.ERROR);
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


    render (){
        
        return (     
        <div className="page-wrapper">
            <div className="page-content container-fluid">
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                <ModalHeader style={{textAlign:'center',margin:'0 auto'}}>
                    <div><h3> Edu create</h3></div>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <div className={'form-group' + (this.state.eduSubmitted && !this.state.eduFormObj.name ? ' has-error' : '')}>
                            <label htmlFor="edu_name"> EDU Name:</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={this.state.eduFormObj.name}
                            onChange={this.handleInputChange} />
                            {this.state.eduSubmitted && !this.state.eduFormObj.name &&
                            <div className="help-block"> Edu Name is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Keyword:</label>
                            <textarea 
                            className="form-control" 
                            rows="5" 
                            name="keyword"
                            value={this.state.eduFormObj.keyword}
                            onChange={this.handleInputChange}></textarea>
                        </div>
                        <div className="form-group">
                            <button onClick={this.onClickEduCreate} className={"btn btn-info "+ this.state.eduFormObj.classButton} disabled ={this.state.eduFormObj.classButton}><span>Lưu</span></button>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <a href="/" type="button" className="btn btn-danger" >Cancel</a>
                </ModalFooter>
                </Modal>
               
            </div> 
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

export default connect(mapStateToProps)(EduCreate);

  