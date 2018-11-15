import React from "react";
import styled from "styled-components";

import Professions from './Professions'
import Friends from './Friends'
import HairColorWrapper from './HairColor'

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
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  }
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
`

const Text = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
`

const Gnomes = (props) => {

  const name = props.name;
  const thumbnail = props.thumbnail;
  const height = props.height;
  const weight = props.weight;
  const hairColor = props.hairColor;
  const professions = props.professions;
  const friends = props.friends;

  return <Wrapper>
      <img src={thumbnail} alt="thumbnail" />
      <Name>{name}</Name>
      <Text><strong>Height:</strong> {height}  ||  <strong>Weight:</strong> {weight}</Text>

      <Text>Hair Color:</Text> <HairColorWrapper hairColor={hairColor}></HairColorWrapper>

      <Professions professions = {professions} />
      <Friends friends = {friends} />
      
    </Wrapper>;
}


export default Gnomes;