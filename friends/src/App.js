import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

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
            <NavLink to='/login' activeClassName="selected">Login</NavLink>
          </li>
          <li>
            <NavLink to='/protected' activeClassName="selected">Protected Content</NavLink>
          </li>
          {/* <li>
            <Link to='/friends'>Friends</Link>
          </li> */}
        </ul>

        <Route exact path="/login" component={Login} />
        {/* <Route path="/friends" component={FriendsList} /> */}
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    );
  }
}

export default App;
