import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import history from '../helpers/history';

import PrivateRoute from './PrivateRoute'
import  Login  from '../views/Auth/Login';
import  Register  from '../views/Auth/Register';
import  Home  from '../views/Home';
import  SchoolView  from '../views/School/View';
import  PageNotFound  from '../views/ErrorPage/PageNotFound';

const AppRouter = () => (  
<Router history={history}>
    <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/school/:id" component={SchoolView} />

        <Route component={PageNotFound}/>
    </Switch>
</Router>
);
export default AppRouter;