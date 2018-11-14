import React, { Component } from "react";

class Filter extends Component {

  filterUpdate() {
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            ref= {(value) => {this.myValue = value}}
            placeholder="Filter here"
            onChange={this.filterUpdate.bind(this)}
          />
        </form>
      </div>
    )
  }

}



export default Filter;