import React from "react";
import "./App.css";

import Professions from './Professions'
import Friends from './Friends'

const Gnomes = (props) => {
  const name = props.name;
  const thumbnail = props.thumbnail;
  const height = props.height;
  const weight = props.weight;
  const hairColor = props.hair_color;
  const professions = props.professions;
  const friends = props.friends;

  return <div className="wrapper">
      <img src={thumbnail} alt="thumbnail" />
      <h2>Name: {name}</h2>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>

      <Professions professions = {professions} />
      <Friends friends = {friends} />
    </div>;
}


export default Gnomes;