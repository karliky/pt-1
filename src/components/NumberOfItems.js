import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 90%;
  padding: 10px;
  display: block;
  margin: 0 auto;
`

const Form = styled.form`
  background-color: red;
  padding: 20px;
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