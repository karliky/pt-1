import React from "react";
import styled from "styled-components";

import Professions from './Professions'
import Friends from './Friends'

const Wrapper = styled.section`
  transition: all 200ms ease;
  padding: 2.5rem;
  background: #fff;
  border: 1px solid #ebecec;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  width: 350px;
  height: 600px;
  vertical-align: top;
  display: inline-block;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  }
`;

const Gnomes = (props) => {
  const name = props.name;
  const thumbnail = props.thumbnail;
  const height = props.height;
  const weight = props.weight;
  const hairColor = props.hair_color;
  const professions = props.professions;
  const friends = props.friends;

  return <Wrapper>
      <img src={thumbnail} alt="thumbnail" />
      <h2>Name: {name}</h2>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>

      <Professions professions = {professions} />
      <Friends friends = {friends} />
    </Wrapper>;
}


export default Gnomes;