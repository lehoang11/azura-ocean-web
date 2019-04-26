import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import history from '../helpers/history';

import PrivateRoute from './PrivateRoute'
import  Login  from '../views/Auth/Login';
import  Register  from '../views/Auth/Register';
import  Home  from '../views/Home';
import  Watch  from '../views/Watch';
import  EduIndex  from '../views/Edu';
import  AccountIndex  from '../views/Account';
import  EduCreate  from '../views/Edu/EduCreate';
import  PageNotFound  from '../views/ErrorPage/PageNotFound';
import Upload from "../views/Upload"
import MainLayout from "../views/MainLayout/MainLayout"

const AppRouter = () => (  
<Router history={history}>
    <Switch>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route  path='/'>
            <MainLayout>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/edu/:shortName?_.:id" component={EduIndex} />
                <PrivateRoute path="/edu_create" component={EduCreate} />
                <PrivateRoute path="/account" component={AccountIndex} />
                <PrivateRoute path="/upload" component={Upload} />
                {/* <Route path="/edu/:id" component={SchoolView} />        */}
                <Route path="/watch/:shortName?_.:id?" component={Watch} />  
            </MainLayout> 
        </Route>

        <Route component={PageNotFound}/>
         
        
    </Switch>
</Router>
);
export default AppRouter;