import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../helpers/history';

import PrivateRoute from './PrivateRoute'
import  Login  from '../views/Auth/Login';
import  Register  from '../views/Auth/Register';
import  Home  from '../views/Home';

const AppRouter = () => (  
<Router history={history}>
    <div>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </div>
</Router>
);
export default AppRouter;