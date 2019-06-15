import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="transparant" light expand="md" scrolling>
          <NavbarBrand href="/">
            <Navbar color="transparant" >
              <NavbarBrand href="#">
                <img
                  src=""
                  height="30"
                />
              </NavbarBrand>
            </Navbar>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Pricing</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <form className="form-inline md-form mt-0">
                  <input
                    className="form-control mr-sm-2 mb-0 text-white"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default CustomNavbar;
