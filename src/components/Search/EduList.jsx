import React from "react"
import { Link } from 'react-router-dom';
import EduItem from "./EduItem"

class EduList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <section className="list-edu-show">
                <div className="edu-body-card">
                {this.props.eduList.map((edu, i)=> {
                    return (
                        <EduItem key={i} edu={edu} />
                    );
                    })
                }
                </div>
            </section>
        );
    }
}
export default EduList;