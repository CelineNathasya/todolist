import React, { Component } from "react";
import TextField from "./component/TextField";
import AddButton from "./component/AddButton";
import List from "./component/List";
import CustomNavbar from "./component/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    };
  }
  render() {

      return (
        <div className="text-center container">
          <TextField
            value={this.state.text}
            onChange={e => {
              this.setState({ text: e.target.value });
            }}
          />
          <AddButton
            onClick={() => {
              if (this.state.text === "") return;
              this.setState({
                items: [...this.state.items, this.state.text],
                text: ""
              });
            }}
            text="add"
          />
          <List
            doItems={this.state.items}
            // delete chosen item by using its index
            deleteItem={index => {
              this.setState({
                items: this.state.items.filter((item, idx) => {
                  // chosen index wont be returned
                  return idx !== index;
                })
              });
            }}
          />
        </div>
    );
  }
}

export default App;
