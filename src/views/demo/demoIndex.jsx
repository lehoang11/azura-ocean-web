import React from "react";
import { Link, Switch,Route } from 'react-router-dom';
import DemoA from './demoA'
import DemoB from './demoB'
import DemoC from './demoC'

class DemoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        
        return (
            <div className="wrap" style={{margin:'300px',textAlign:'center'}}>
            <ul>
                <li><Link to={'/demo/123'}>DemoA</Link></li>
                <li><Link to={'/demo/123/demoB'}>DemoB</Link></li>
                <li><Link to={'/demo/123/demoC'}>DemoC</Link></li>
            </ul>
            <div style={{border:'2px solid #333'}}></div>
            <Switch>
            <Route exact path={this.props.match.path} component={DemoA} />
            <Route path={`${this.props.match.path}/demoB`} component={DemoB} />
            <Route path={`${this.props.match.path}/demoC`} component={DemoC} />
               
            </Switch>
            </div>
    
        );
    }

}


export default DemoIndex;