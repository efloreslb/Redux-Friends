import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getFriends, postFriend } from '../actions';

class FriendsList extends Component {
   state = {
      name: '',
      age: '',
      email: ''
   }

   componentDidMount() {
      this.props.getFriends();
   }

   handleChange = e => {
      this.setState({
         ...this.state,
         [e.target.name]: e.target.value
      })
   }

   addFriend = e => {
      e.preventDefault();
      this.props.postFriend(this.state);
      this.setState({
         name: '',
         age: '',
         email: ''
      })
   }
   
   render() {
      console.log("FriendsList rendered", this.props.friends)
      if (this.props.fetchingFriends) return <h1>Loading...</h1>
      return (
         <div className="friendList">
            <h2>Tada! These are all your friends</h2>

            <form onSubmit={this.addFriend}>
               <input onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name"/>
               <input onChange={this.handleChange} value={this.state.age} name="age" placeholder="Age"/>
               <input onChange={this.handleChange} value={this.state.email} name="email" placeholder="Email"/>
               <button type="submit">Add Friend</button>
            </form>

            {this.props.friends.map((friend, index) => ( //BUG: Does not render after new post
               <div key={index} className="friendBox">
                  <p>{friend.name}, {friend.age}, {friend.email}</p>
               </div>
            ))}
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      friends: state.friends,
      fetchingFriends: state.fetchingFriends
   }
}

export default connect(mapStateToProps, {getFriends, postFriend})(FriendsList);