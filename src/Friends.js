import React from "react";
import "./App.css";

const Friends = (props) => {

  const friends = props.friends;

  if (friends.length === 0) {
    return (<p>No friends :(</p>)
  }
  else {
    return (
    <div>
      Friends: {friends.map(item => <ul>
        <li>{item}</li>
      </ul>)}
    </div>
    )
  }
}


export default Friends;