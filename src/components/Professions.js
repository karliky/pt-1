import React from "react";

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