import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div>
        <li
          className={this.props.className}
          style={{ display: "inline-block", width: "80%" }}
        >
          {this.props.doItem}
        </li>
        <button
          onClick={this.props.onDelete}
          style={{
            height: "100%"
          }}
        >
          &#10006;
        </button>
      </div>
    );
  }
}

export default ListItem;
