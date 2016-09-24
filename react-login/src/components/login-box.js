import React from 'react';
import LoginLink from './login-link';

export default class LoginBox extends React.Component {
  render() {
    return(
          <form method="post">
            <div>
              <input type="text" name="u" placeholder="Email" required="required" />
              <input type="비밀번호" name="p" placeholder="Password" required="required" />
            </div>
            <LoginLink />
            <button type="submit">SIGN IN</button>
          </form>
    );
  }
}
