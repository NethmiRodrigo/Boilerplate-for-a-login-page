import React from 'react';
import Login from './Login/login';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as routes from './constants/routes';
import Signup from './SignUp/Signup';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path={routes.LANDING} component={Login}/>
          <Route exact path={routes.SIGNUP} component={Signup}/>
          <Route exact path={routes.FORGOTPASSWORD} component={ForgotPassword}/>
          <Route exact path={routes.RESETPASSWORD} component={ResetPassword}/>
        </div>
      </Router>
    )
  }
}


export default App;
