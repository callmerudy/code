import React from 'react';
import { Link } from 'react-router';


export default class Register extends React.Component {
  render() {
    return(
      <div>
      	  <h1>Register</h1>
          <form method="post">
          	<input type="text" name="u" placeholder="Name" required="required" />
            <input type="text" name="u" placeholder="Nickname" required="required" />
            <input type="text" name="u" placeholder="Email" required="required" />
            <input type="비밀번호" name="p" placeholder="Password" required="required" />
            <input type="비밀번호" name="p" placeholder="Password comfirm" required="required" />
            <select>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
            </select>
            <input class="input" type="text" name="u" placeholder="Major" required="required" />
            <button type="submit">가입하기</button>
          </form>
      </div>
    );
  }
}
