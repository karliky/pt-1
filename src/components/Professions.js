import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 16px;
  width: 60%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  font-weight: 600;
`

const List = styled.li`
  list-style: disc;
  padding: 10px;
`;

const Professions = (props) => {

  const professions = props.professions;

  return (
    <div key={professions.toString()}>
      <Text>Professions:</Text> {professions.map(item => <ul>
        <List>{item}</List>
      </ul>)}
    </div>
  )
}


export default Professions;