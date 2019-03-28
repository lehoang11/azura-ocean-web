import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EduCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: true
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
        //   modal: !prevState.modal
        modal: prevState.modal
        }));
      }


    render (){
        
        return (     
        <div className="page-wrapper">
            <div className="page-content container-fluid">
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                <ModalHeader style={{textAlign:'center',margin:'0 auto'}}>
                    <h3>TẠO MỘT EDU</h3>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label htmlFor="edu_name">Tên EDU:</label>
                            <input type="text" className="form-control" id="edu_name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Mô tả:</label>
                            <textarea className="form-control" rows="5" id="description"></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info"><span>Lưu</span></button>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <a href="/" type="button" className="btn btn-danger" >Hủy</a>
                </ModalFooter>
                </Modal>
               
            </div> 
        </div>
        );
    }
}

export default EduCreate;