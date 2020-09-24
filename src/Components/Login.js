

import React from 'react';
import ChatApp from './ChatApp';
import "./loginapp.css"
import "./login.css"


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    // Bind 'this' to event handlers. React ES6 does not do this by default
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <ChatApp username={this.state.username} />
      );
    }

    // Initial page load, show a simple login form
    return (
      <div class="container">
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>Chat and Work Together</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter Your Name"
            required 
            />
        </div>
        <input type="submit" value="Submit" style={{backgroundColor:"#007bff"}}/>
      </form>
      </div>
    );
  }

}
Login.defaultProps = {
};

export default Login;