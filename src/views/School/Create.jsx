import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"

class SchoolCreate extends React.Component {
    
    render() {
        const { user } = this.props;
        let usId = this.props.match.params.id;
        console.log (usId);
        return (
        <div id="wrapper">
            <Header />
            <Aside />
            <div id="content">
                <div className="school-create-page">  
                    <form id="form-edu-create" >
                        <h3>Tạo một Edu dạy học</h3>
                        <fieldset>
                        <input placeholder="Tên Edu" type="text" tabindex="1" required autofocus />
                        </fieldset>
                        <fieldset>
                        <textarea placeholder="Mô tả Edu" tabindex="5" required></textarea>
                        </fieldset>
                        <fieldset>
                        <button name="submit" type="submit" id="edu-create-submit" data-submit="...Sending" >Tạo Edu</button>
                        </fieldset>
                        
                    </form>
                </div>

                {/* end noi section */}
            </div>{/* end noi content */}
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

export default connect(mapStateToProps)(SchoolCreate);