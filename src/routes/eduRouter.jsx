import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import  PrivateRoute from './PrivateRoute'
import  VideoTab from '../views/Edu/VideoTab'
import  AboutTab from '../views/Edu/AboutTab'
import  SettingTab from '../views/Edu/SettingTab'

const EduRouter = ({match}) => (  

     <Switch>
        <Route exact path={match.path} component={VideoTab} />
        <Route path={`${match.path}/about`} component={AboutTab} />
        <PrivateRoute path={`${match.path}/setting`} component={SettingTab} /> 
     </Switch>
);
export default EduRouter;