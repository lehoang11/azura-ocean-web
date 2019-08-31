import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import history from '../helpers/history';

import PrivateRoute from './PrivateRoute'
import  Login  from '../views/Auth/Login';
import  Register  from '../views/Auth/Register';
import  Home  from '../views/Home';
import  Watch  from '../views/Watch';
import  EduIndex  from '../views/Edu';
import  EduCreate  from '../views/Edu/EduCreate';
import  PageNotFound  from '../views/ErrorPage/PageNotFound';
import Upload from "../views/Upload"
import MainLayout from "../views/MainLayout/MainLayout"
import DemoIndex from "../views/demo/demoIndex"
import Search    from "../views/Search"
import EduHistory   from "../views/History"
import EduFollow from "../views/EduFollow"
import SettingLayout from "../views/Setting/SettingLayout"
import OpenStreaming from '../views/Upload/live'
import  Preview  from '../views/Watch/preview';


const AppRouter = () => (  
<Router history={history}>
    <Switch>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <PrivateRoute path="/settings" component={SettingLayout} />

        <Route  path='/'>
            <MainLayout>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/edu_create" component={EduCreate} />
                <PrivateRoute path="/upload" component={Upload} />
                <PrivateRoute path="/openClass" component={OpenStreaming} />
                <PrivateRoute path="/history" component={EduHistory} />
                <PrivateRoute path="/edufollow" component={EduFollow} />
                {/* <Route path="/edu/:id" component={SchoolView} />        */}
                <Route path="/watch/:shortName?_.:id?" component={Watch} /> 

                <Route path="/edu/:shortName" component={EduIndex} />
                <Route path="/demo/:shortName" component={DemoIndex}/>
                <Route path="/search" component={Search}/>  
                <Route path="/preview/:shortName?_.:id?" component={Preview} /> 
            </MainLayout> 
        </Route>

        <Route component={PageNotFound}/>
         
        
    </Switch>
</Router>
);
export default AppRouter;