import React, { Component } from "react";

class TextField extends Component {
  render() {
    return (
      <input
        name="todo"
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TextField;
