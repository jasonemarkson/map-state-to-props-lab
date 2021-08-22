import React, { Component } from 'react';
// add any needed imports here --> import connect so Users component can access the store
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    console.log(this.props.users)
    // create a users variable to map across the users array received from the props passed down from the state -- iterate over each and make into a line element
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
          {/* In addition, display the total number of users curently in the store */}
        {this.props.numberOfUsers}
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users}
          {/* render users on the DOM */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users, 
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux --> added connect to export default so that our application knows to map the most up to date state to our props
export default connect(mapStateToProps) (Users)
