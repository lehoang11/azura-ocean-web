import React from "react";
// javascript plugin used to create scrollbars on windows
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import authRoutes from "routes/auth.jsx";


class AuthLayout extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
 
        <div className="main-panel" ref="mainPanel">
          {/* <Header {...this.props} /> */}
        { <Switch>
            {authRoutes.map((prop, key) => {
              if (prop.pro) {
                return null;
              }
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch> }
          
          <Footer fluid />
        </div>
   
      </div>
    );
  }
}

export default AuthLayout;
