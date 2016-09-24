import React from 'react';
import { Link } from 'react-router';


export default class LoginLink extends React.Component {
  render() {
    return(
      <div class="sign">
        <Link to="/find">비밀번호 찾기</Link>
        <Link to="/register">회원가입하기</Link>
      </div>
    );
  }
}
