import React from "react";
import styled from "styled-components"

const Hair = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 6px;
`

const HairColor = (props) => {

const hairColor = props.hair_Color;

  
    return (
      <Hair style={{'backgroundColor' : hairColor}}>{hairColor}</Hair>
    )
  }



export default HairColor;