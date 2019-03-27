import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import history from '../helpers/history';

import PrivateRoute from './PrivateRoute'
import  Login  from '../views/Auth/Login';
import  Register  from '../views/Auth/Register';
import  Home  from '../views/Home';
import  SchoolView  from '../views/School/View';
import  Watch  from '../views/Watch';
import  PageNotFound  from '../views/ErrorPage/PageNotFound';
import  SchoolCreate  from '../views/School/Create';
import  AccountProfile  from '../views/Account/Profile';
import Upload from "../views/Upload"
import MainLayout from "../views/MainLayout/MainLayout"

const AppRouter = () => (  
<Router history={history}>
    <Switch>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path='/'>
            <MainLayout>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/edu_create" component={SchoolCreate} />
                <PrivateRoute path="/account/profile" component={AccountProfile} />
                <PrivateRoute path="/upload" component={Upload} />
                <Route path="/edu/:id" component={SchoolView} />       
                <Route path="/watch" component={Watch} />  
            </MainLayout> 
        </Route>

        <Route component={PageNotFound}/>
         
        
    </Switch>
</Router>
);
export default AppRouter;