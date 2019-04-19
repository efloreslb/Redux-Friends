import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendsList extends Component {
   
   render() {
      return (
         <div>
         <h2>These are your friends</h2>
         </div>
      )
   }
}

const mapStateToProps = ({friends}) => ({
   friends
})