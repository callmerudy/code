import React from 'react';
import LoginBox from './login-box';

export default class App extends React.Component {
  render() {
    return(
      <div>
          <h1>React Login</h1>
          <LoginBox />
      </div>
    );
  }
}
