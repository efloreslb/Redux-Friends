import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Content</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul>
        <Route exact path="/login" component={Login} />
        <Route path="/friends" component={FriendsList} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    );
  }
}

export default App;
