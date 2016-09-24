import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Register from "components/register";
import FindPassword from "components/find";
import LoginBox from "components/login-box";

const app =  document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={LoginBox}>
      <Route path="/register" component={Register} />
      <Route path="/find" component={FindPassword} />
    </Route>
  </Router>,
app);
