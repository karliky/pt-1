import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 50%;
  padding: 10px;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 0;
`

const Form = styled.form`
  background-color: #61dafb;
  padding: 20px;
  position: relative;
`;

class Filter extends Component {

  filterNumberOfDisplay() {
    const val = this.myValue.value
    this.props.filterNumberOfDisplay(val)
  }

  render() {
    return (
      <div>
        <Form>
          <Input
            type="text"
            ref={(value) => { this.myValue = value }}
            placeholder="Number of items that gonna show"
            onChange={this.filterNumberOfDisplay.bind(this)}
          />
        </Form>
      </div>
    )
  }

}



export default Filter;