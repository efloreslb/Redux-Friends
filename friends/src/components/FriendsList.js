import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendsList extends Component {

   componentDidMount() {
      localStorage.setItem("token", "token")
      this.props.getFriends();
   }
   
   render() {
      console.log("friends", this.props.friends)
      return (
         <div>
            <h2>Tada! These are your friends</h2>
            {this.props.friends.map(friend => <>{friend}</>)}
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      friends: state.friends
   }
}

export default connect(mapStateToProps, {getFriends})(FriendsList);