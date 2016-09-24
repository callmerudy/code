import React from 'react';
import { Link } from 'react-router';


export default class FindPassword extends React.Component {
  render() {
    return(
      <div>
          <h1>계정찾기</h1>
          <form method="post">
            <input type="text" name="u" placeholder="Email" required="required" />
            <button type="submit">제출하기</button>
          </form>
      </div>
    );
  }
}
