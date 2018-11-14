import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 90%;
  padding: 10px;
  display: block;
  margin: 0 auto;
`

const Form = styled.form`
  background-color: #61dafb;
  padding: 20px;
`;

class Filter extends Component {

  filterUpdate() {
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }

  render() {
    return (
      <div>
        <Form>
          <Input
            type="text"
            ref= {(value) => {this.myValue = value}}
            placeholder="Filter here"
            onChange={this.filterUpdate.bind(this)}
          />
        </Form>
      </div>
    )
  }

}



export default Filter;