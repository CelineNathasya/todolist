import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.doItems.map((doItem, idx) => {
          return (
            <ListItem
              key={idx}
              doItem={doItem}
              className="list-group-item"
              onDelete={() => this.props.deleteItem(idx)}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
