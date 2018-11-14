import React from "react";
import styled from "styled-components"


const Text = styled.p`
  font-size: 16px;
  width: 60%;
  padding-bottom: 10px;
  margin: 10px 0px;
  border-bottom: 1px solid black;
  font-weight: 600;
`;

const List = styled.li`
  list-style: disc;
  padding: 10px;
`;

const NoFriends = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`

const Friends = (props) => {

  const friends = props.friends;

  if (friends.length === 0) {
    return (<NoFriends> No friends :(</NoFriends>)
  }
  else {
    return (
    <div>
      <Text>Friends:</Text> {friends.map(item => <ul>
        <List>{item}</List>
      </ul>)}
    </div>
    )
  }
}


export default Friends;