import React from "react";
import "./App.css";

const Professions = (props) => {

  const professions = props.professions;

  return (
    <div key={professions.toString()}>
      Professions: {professions.map(item => <ul>
        <li>{item}</li>
      </ul>)}
    </div>
  )
}


export default Professions;