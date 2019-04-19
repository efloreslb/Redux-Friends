import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends Component {
   state = {
      credentials: {
         username: '',
         password: ''
      }
   }

   handleChange = e => {
      this.setState({
         credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
         }
      })
   }

   handleLogin = e => {
      e.preventDefault();
      this.props.login(this.state.credentials)
         .then(() => this.props.history.push("/protected"))
   }
   
   render() {
      return (
         <form onSubmit={this.handleLogin}>
            <input type="text" name="username" placeholder="Username" value={this.state.credentials.username} onChange={this.handleChange}></input>
            <input type="password" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.handleChange}></input>
            <button>Login</button>
            {this.props.loggingIn ? "Logging in..." : ''}
         </form>
      )
   }
}

const mapStateToProps = state => {
   return {
      loggingIn: state.loggingIn
   }
}

export default connect(mapStateToProps, {login})(Login);